'use client'

import { useState } from "react";
import Flipable from "./flipable";
import FlipableAlt from "./flipablealt";
import CollapsibleSpan from "./collaspable";

export default function FlashCards() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [randomCards, setRandomCards] = useState([])

  const addCard = (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate inputs
    if (!name.trim() || !description.trim()) {
      alert("Please fill out both fields.");
      return;
    }

    const card = { name, description };
    setCards((prevCards) => [...prevCards, card]);

    // Clear inputs
    setName('');
    setDescription('');
  };

  //Add export
  const downloadFile = (filename, content) => {
    const element = document.createElement('a');//I assume completely pointless
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  
  const handleExport = () => {
    let text = 'name,description\n'
    for (let card of cards) {
      text += card.name + "," + card.description + '\n';
    }
    downloadFile('flashcards.csv', text);
  };

  //Add import
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const content = e.target.result;
      setCards([])
      try {
        let columns = [];
        const importedData = content;
        console.log("All");
        console.log(importedData);
  
        // Read data
        let lines = importedData.split('\n');
        for (const line of lines) { // Corrected the loop
          console.log(line);
          let sections = line.split(",");
          console.log(sections);
          // Set card
          const name = sections[0]
          const description = sections[1]
          const card = { name, description };
          setCards((cardList) => [...cardList, card]);
        }
      } catch (error) {
        console.error('Error parsing imported data:', error);
        alert('An error occurred while reading the data: ' + error);
      }
    };
  
    reader.readAsText(file);
  };

  return (
    <div>
      <h2>Flash Cards</h2>
      <button onClick={handleExport}>Export cards</button>
      <br/>
      <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          id="fileInput"
      />
      <button onClick={() => document.getElementById('fileInput').click()}>Import Cards</button>
        
      <div class="section">
        <div>Add cards</div>
        <CollapsibleSpan>
          <form onSubmit={addCard}>
            <input
              type="text"
              placeholder="Card name or answer"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <textarea
              placeholder="Card definition or problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Card</button>
          </form>
          <div>
            {cards.map((card, index) => (
              <div class="card" key={index}>
                <FlipableAlt mode1={card.name} mode2={card.description}/>
              </div>
            ))}
          </div>
        </CollapsibleSpan>
      </div>
      <div>
        <CollapsibleSpan>
            <button>Next card</button>
            <div>{current}</div>
        </CollapsibleSpan>
      </div>
    </div>
  );
}
'use client'

import { useState } from "react";
import Flipable from "./flipable";

export default function FlashCards() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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

  return (
    <div>
      <h2>Flash Cards</h2>
      <form onSubmit={addCard}>
        <input
          type="text"
          placeholder="Card name or answer"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
            <strong>{card.name}</strong>
            <p>{card.description}</p>
            <Flipable mode1={card.name} mode2={card.description}/>
          </div>
        ))}
      </div>
    </div>
  );
}
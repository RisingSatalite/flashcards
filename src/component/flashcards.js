'use client'

import { useState } from "react"

export default function FlashCards() {
    const [cards, setCards] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function addCard (){
        if(name == ""){
            return
        }
        if(description == ""){
            return
        }
        const card = {"name":name, "description":description}
        setCards((othercards) => [...prevSearches, card]);
    }

    return (
        <div>
            <p>Flash Cards</p>
            <input 
                type="text"
                defaultValue={"Card name or answer"}
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <br/>
            <textarea
                type="text"
                defaultValue={"Card defination or problem"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <button onClick={() => addCard()}>Add card</button>
            {cards.map((card, index) => (
                <div>
                    <div>{card.name}</div>
                    <div>{card.description}</div>
                </div>
            ))}
        </div>
    )
}
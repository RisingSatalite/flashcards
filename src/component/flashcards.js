'use client'

import { useState } from "react"

export default function FlashCards() {
    const [cards, setCards] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div>
            <p>Flash Cards</p>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <textarea/>

        </div>
    )
}
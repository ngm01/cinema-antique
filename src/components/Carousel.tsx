'use client'

import { useEffect, useState } from "react"
import Card from "./Card"

export default function Carousel() {

    interface Card {
        title: string,
        id: string,
        img: string
    }
    const [cards, setCards] = useState<Card[]>([])

    useEffect(() => {
        const exampleCards = [
            {title: "Napoléon", id: 'abc', img: "napoleon-1.jpeg"}, 
            {title: "Metropolis", id: 'bcd', img: "metropolis-1.jpg"}, 
            {title: "The Last Command", id: 'cde', img: 'last-command-1.jpeg'}, 
            {title: "The Big Parade", id: 'def', img: 'big-parade-1.jpg'}, 
            {title: "The Crowd", id: 'efg', img: 'crowd-1.jpeg'}
        ]
        setCards(exampleCards)
    }, [])

    return (
        <main className="flex flex-row bg-green-500">
            {cards.map(card => <Card key={card.id} title={card.title} img={card.img} />)}
        </main>
    )
}
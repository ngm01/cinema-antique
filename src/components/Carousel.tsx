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
    const [currentSelection, setCurrent] = useState<number>(0)

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

    function moveCarousel(direction: string) {
        if(direction === 'left') {
            if(currentSelection > 0) {
                setCurrent(current => current - 1)
            }
        } else if(direction === 'right') {
            if(currentSelection < cards.length - 1) {
                setCurrent(current => current + 1)
            }
        }
    }

    return (
        <main className="flex flex-row bg-black">
            <a href="#" onClick={() => {moveCarousel('left')}} className="fixed top-1/2 left-10 p-2 z-50 bg-white text-black">Left arrow</a>
            <div className="flex flex-row">
                {cards.map(card => <Card isCurrent={card.id === cards[currentSelection].id} key={card.id} title={card.title} img={card.img} />)}
            </div>
            <a href="#" onClick={() => {moveCarousel('right')}} className="fixed top-1/2 right-10 p-2 z-50 bg-white text-black">Right arrow</a>
        </main>
    )
}
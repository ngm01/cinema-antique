'use client'

import { useEffect, useState } from "react"
import Card from "./Card";
import { exampleMovies } from '../app/lib/placeholderData';

export default function Carousel() {

    interface Card {
        title: string,
        id: string,
        img: string
    }
    const [cards, setCards] = useState<Card[]>([])
    const [cardRange, setRange] = useState<number[]>([0, 3])

    useEffect(() => {
        setCards(exampleMovies)
    }, [])

    function moveCarousel(direction: string) {
        if(direction === 'left') {
            if(cardRange[0] > 0) {
                setRange(current => current.map((edge) => {return edge - 1 }))
            }
        } else if(direction === 'right') {
            if(cardRange[0] < cards.length - 1) {
                setRange(current => current.map((edge) => {return edge + 1}))
            }
        }
    }

    return (
        <main className="flex flex-row bg-black">
            <a href="#" onClick={() => {moveCarousel('left')}} className="fixed top-1/2 left-10 p-2 z-50 bg-white text-black">Left arrow</a>
            <div className="flex flex-row w-[90rem] justify-start">
                {cards.map((card, i) => {
                    if(i >= cardRange[0] && i <= cardRange[1]) {
                        return <Card isCurrent={i === cardRange[0]} key={card.id} title={card.title} img={card.img} />
                    }
                    })}
            </div>
            <a href="#" onClick={() => {moveCarousel('right')}} className="fixed top-1/2 right-10 p-2 z-50 bg-white text-black">Right arrow</a>
        </main>
    )
}
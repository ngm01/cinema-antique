'use client'
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import { exampleMovies } from '../lib/placeholderData';
import { MovieInfo } from "../lib/definitions";

export default function Layout({ children } : { children: React.ReactNode }) {

    const [cards, setCards] = useState<MovieInfo[]>([])
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
        <main>
            <Header />
            {children}
            <Carousel moveCarousel={moveCarousel} cardRange={cardRange} cards={cards} />
        </main>
    )
}
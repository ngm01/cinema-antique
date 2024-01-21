'use client'
import Card from "./Card";
import { MovieInfo } from "@/app/lib/definitions";

interface CarouselProps {
    cards: MovieInfo[],
    cardRange: number[],
    moveCarousel: (direction: string) => void
}

export default function Carousel({cards, cardRange, moveCarousel}: CarouselProps) {

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
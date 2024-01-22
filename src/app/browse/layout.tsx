// 'use client'
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";

export default function Layout({ children } : { children: React.ReactNode }) {

    return (
        <main className="flex flex-col">
            <Header />
            {children}
            <Carousel />
        </main>
    )
}
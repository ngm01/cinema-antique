import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import { exampleMovies } from '../lib/placeholderData';

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <main>
            <Header />
            {children}
            <Carousel />
        </main>
    )
}
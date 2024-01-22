import Image from "next/image"
import { redirect } from "next/navigation";
import { exampleMovies } from "../app/lib/placeholderData";

export default function Preview({ movieID } : {movieID: string}) {

    const movie = exampleMovies.filter(movie => movie.id === movieID);
    if(movie.length === 0) {
        redirect('/browse')
    }

    return (
        <main className="relative">
            <Image className="relative" fill style={{"objectFit": "cover"}} src={`/placeholders/${movie[0].still}`} alt={`Still frame from ${movie[0].title}`} />
            <div className="absolute mx-10 bg-gradient-to-b to-transparent from-black to-70%">
                <p>{movie[0].title}</p>
                <p>description</p>
                <p>runtime</p>
                <p>release data</p>
            </div>
        </main>
    )
}
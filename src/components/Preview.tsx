import { redirect } from "next/navigation";
import { exampleMovies } from "../app/lib/placeholderData";

export default function Preview({ movieID } : {movieID: string}) {

    const movie = exampleMovies.filter(movie => movie.id === movieID);
    if(movie.length === 0) {
        redirect('/browse')
    }

    return (
        <main>
            <div>
                splash image
                <div>
                    <p>{movie[0].title}</p>
                    <p>description</p>
                    <p>runtime</p>
                    <p>release data</p>
                </div>
            </div>
        </main>
    )
}
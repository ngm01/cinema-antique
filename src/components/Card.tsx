import Image from "next/image"

export default function Card({title, img} : {title: string, img: string}) {
    return (
        <main className="relative flex flex-col h-[600px] w-[300px] mx-3 px-10 bg-slate-50">
            <Image alt="poster" fill style={{"objectFit": "cover"}} src={`/placeholders/${img}`}/>
            <div className="text-red-700 text-center">{title}</div>
        </main>
    )
}
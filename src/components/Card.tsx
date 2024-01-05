import Image from "next/image"

export default function Card({title, img, isCurrent} : {title: string, img: string, isCurrent: boolean}) {
    return (
        <main className={`${isCurrent ? 'border-8 border-white' : ''} relative flex flex-col h-[700px] w-[350px] mx-2 px-10 bg-slate-50`}>
            <Image alt="poster" fill style={{"objectFit": "cover"}} src={`/placeholders/${img}`}/>
            <div className="absolute flex justify-center bottom-8 left-0 right-0 text-2xl z-50 text-white text-center">{title}</div>
            <div className={`absolute right-0 ${isCurrent ? 'h-[684px] w-[334px]' : 'h-[700px] w-[350px]'} bg-gradient-to-b from-transparent to-black to-97%`}></div>
        </main>
    )
}
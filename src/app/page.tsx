import Carousel from "@/components/Carousel";
import Header from "@/components/Header";

export default function Home() {
  return (
    // min-h-screen 
    <main className="flex flex-col items-center justify-between p-24">
      <Header />
      <Carousel />
    </main>
  )
}

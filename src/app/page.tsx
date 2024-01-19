'use client'
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Page() {

  useEffect(()=> {
    redirect('browse')
  }, [])

  return (
    // min-h-screen 
    <main className="flex flex-col items-center justify-between p-24">
    </main>
  )
}

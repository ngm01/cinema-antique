import Preview from "@/components/Preview";

export default function Page({ params } : { params: {id: string} }) {

    console.log("id:", params.id)

    return (
        <main>
            <Preview movieID={params.id} />
        </main>
    )
}
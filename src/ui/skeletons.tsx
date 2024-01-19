const shimmer = "before: absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinte] before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
    return <div className={`${shimmer}`}></div>
}

export function PreviewSkeleton() {
    <div></div>
}

export function CarouselSkeleton() {
    return (
        <div>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

export function HomeScreenSkeleton() {
    return <div></div>
}
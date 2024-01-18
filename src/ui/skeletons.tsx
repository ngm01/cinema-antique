const shimmer = "";

export function CardSkeleton() {
    return <div></div>
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
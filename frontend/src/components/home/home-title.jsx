import clsx from "clsx";

export function HomeTitle({ line1, line2 }) {
    return (
        <div className="flex flex-col w-max max-w-full mx-auto justify-center items-center gap-6 font-bold uppercase text-nowrap">
            <p className="text-6xl md:text-nowrap text-center">{line1}</p>
            <HighlightedText className="md:text-6xl text-4xl">
                {line2}
            </HighlightedText>
        </div>
    );
}

function HighlightedText({ className, children, isAnimated = false }) {
    const cls = isAnimated
        ? "bg-highlight absolute left-0 w-[1px] group-hover:w-full transition-[width] duration-700 h-full"
        : "bg-highlight absolute left-0 size-full";
    return (
        <div className={clsx("group flex px-6 relative", className)}>
            <div className={cls}>
                <HighlightMarkers isMarkerAtBottom={false} />
                <HighlightMarkers isMarkerAtBottom={true} />
            </div>
            {children}
        </div>
    );
}

function HighlightMarkers({
    isMarkerAtBottom = false
}) {
    const cls = isMarkerAtBottom
        ? "absolute top-0 right-0 w-[1px] h-[calc(100%_+_2rem)]"
        : "-mt-8 w-[1px] h-[calc(100%_+_2rem)]";
    return (
        <div className={cls}>
            <div
                className={
                    "h-full flex items-center " +
                    (isMarkerAtBottom ? "flex-col-reverse" : "flex-col")
                }
            >
                <div
                    className="rounded-full size-8 bg-blue-500"
                />
                <div className="bg-blue-500 grow w-2" />
            </div>
        </div>
    );
}

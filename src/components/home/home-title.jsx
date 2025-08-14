import clsx from "clsx";

export function HomeTitle({ line1, line2 }) {
    return (
        <div className="flex flex-col w-max max-w-full mx-auto justify-center items-center gap-3 font-bold uppercase text-nowrap">
            <p className="text-7xl md:text-nowrap text-center">{line1}</p>
            <HighlightedText className="md:text-7xl text-5xl">
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

function HighlightMarkers({ isMarkerAtBottom = false, markersDotSize = 8, markersWidth = 2}) {
    const cls = isMarkerAtBottom
        ? `absolute top-0 right-0 w-[1px] h-[calc(100%_+_${markersWidth}rem)]`
        : `-mt-${markersDotSize} w-[1px] h-[calc(100%_+_${markersWidth}rem)]`;
    return (
        <div className={cls}>
            <div
                className={
                    "h-full flex items-center " +
                    (isMarkerAtBottom ? "flex-col-reverse" : "flex-col")
                }
            >
                <div className={`rounded-full size-${markersDotSize} bg-blue-500`} />
                <div className={`bg-blue-500 w-${markersWidth} grow`} />
            </div>
        </div>
    );
}

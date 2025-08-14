import clsx from "clsx";

export function Test() {
    return <HomeTtl />;
}

function Testing() {
    const cls = "-!mt-8"
    "h!-[calc(100%_+_2rem)]" +
    "w!-2" +
    "s!ize-8"
    return <div className={cls}></div>;
}

function HomeTtl() {
    return (
        <div className="w-min max-w-full h-[calc(100vh-20rem)] flex flex-col mx-auto justify-center gap-10">
            <div className="flex flex-col w-max max-w-full mx-auto justify-center items-center gap-3 font-bold uppercase text-nowrap">
                <p className="text-7xl md:text-nowrap text-center">
                    привет, я макс
                </p>
                <HighlightedText className="md:text-7xl text-5xl">
                    веб-разработчик
                </HighlightedText>
            </div>
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

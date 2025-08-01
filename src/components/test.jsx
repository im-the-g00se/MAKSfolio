import { useRef } from "react";

export function Test() {
    const scrollRef = useRef(null);

    const scroll = function (isOpposite = false) {
        const container = scrollRef.current;
        if (!container) return;
        console.log(container)
        const amount = 200;
        container.scrollBy({
            left: isOpposite ? -amount : amount,
            behavior: "smooth"
        });
    };

    return (
        <div className="w-[1190px] mx-auto ">
            <div
                ref={scrollRef}
                className="flex gap-6 w-full overflow-y-auto snap-x"
            >
                <Elem />
                <Elem />
                <Elem />
                <Elem />
                <Elem />
                <Elem />
                <Elem />
                <Elem />
                <Elem />
                <Elem />
                <Elem />
            </div>
            <button onClick={() => scroll(true)}>Влево</button>
            <button onClick={() => scroll(false)}>Вправо</button>
        </div>
    );
}

function Elem() {
    return (
        <div className="h-[400px] snap-start w-fit bg-neutral-500 rounded-4xl">
            <div className="rounded-2xl px-4 pt-4 pb-3 w-85 h-50"></div>
        </div>
    );
}

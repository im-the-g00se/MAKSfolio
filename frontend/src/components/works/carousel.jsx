import { useRef } from "react";
import { ArrowRightIcon } from "./icons/arrow-right";

export function Carousel({ children }) {
    const [scrollRef, scroll] = useScroll();

    return (
        <div>
            <div
                ref={scrollRef}
                className="flex gap-6 w-full overflow-x-auto snap-x no-scrollbar"
            >
                {children}
            </div>
            <ScrollButtons scroll={scroll}/>
        </div>
    );
}

function ScrollButtons({scroll}) {
    return (
        <div className="flex justify-between mt-4">
                <button
                    className="rounded-full bg-neutral-200 size-12 rotate-180 text-neutral-700 hover:text-black flex items-center justify-center"
                    onClick={() => scroll(true)}
                >
                    <ArrowRightIcon />
                </button>
                <button
                    className="rounded-full bg-neutral-200 size-12 text-neutral-700 hover:text-black flex items-center justify-center"
                    onClick={() => scroll(false)}
                >
                    <ArrowRightIcon />
                </button>
            </div>
    )
}

function useScroll() {
    const scrollRef = useRef(null);

    const scroll = function (isOpposite = false) {
        const container = scrollRef.current;
        if (!container) return;
        const amount = 200;
        container.scrollBy({
            left: isOpposite ? -amount : amount,
            behavior: "smooth",
        });
    };

    return [scrollRef, scroll];
}
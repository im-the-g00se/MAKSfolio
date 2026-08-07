import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "./icons/arrow-right";

export function Carousel({ children }) {
    const [scrollRef, scroll, isOverflowing] = useScroll(children);

    return (
        <div>
            <div
                ref={scrollRef}
                className={`flex gap-6 w-full ${
                    isOverflowing
                        ? "overflow-x-auto snap-x no-scrollbar"
                        : "overflow-visible justify-center"
                }`}
            >
                {children}
            </div>
            {isOverflowing && <ScrollButtons scroll={scroll} />}
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

function useScroll(children) {
    const scrollRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useLayoutEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const updateOverflow = () => {
            setIsOverflowing(container.scrollWidth > container.clientWidth);
        };

        updateOverflow();

        const resizeObserver = new ResizeObserver(updateOverflow);
        resizeObserver.observe(container);
        Array.from(container.children).forEach((child) => {
            resizeObserver.observe(child);
        });

        return () => resizeObserver.disconnect();
    }, [children]);

    const scroll = function (isOpposite = false) {
        const container = scrollRef.current;
        if (!container) return;
        const amount = 200;
        container.scrollBy({
            left: isOpposite ? -amount : amount,
            behavior: "smooth",
        });
    };

    return [scrollRef, scroll, isOverflowing];
}

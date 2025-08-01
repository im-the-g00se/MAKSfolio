import { useRef } from "react";
import { MiniWorkElement } from "./mini-work-element";
import { WorkElement } from "./work-element";
import { ScrollArrowLeftIcon } from "./icons/scroll-arrow-left";
import { ScrollArrowRightIcon } from "./icons/scroll-arrow-right";

const works = [
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.",
        skills: [
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Figma",
            "Node.js",
            "Git",
        ],
        projLink: "https://ya.ru",
        iconImg: "./img/GLAZKI_icon.png",
        desktopImg: "./img/GLAZKI_desktop.png",
        mobileImg: "./img/GLAZKI_mobile.png",
    },
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.",
        skills: ["HTML", "CSS", "JS"],
        projLink: "https://ya.ru",
        iconImg: "./img/GLAZKI_icon.png",
        desktopImg: "./img/GLAZKI_desktop.png",
        mobileImg: "./img/GLAZKI_mobile.png",
    },
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.",
        skills: ["HTML", "CSS", "JS"],
        projLink: "https://ya.ru",
        iconImg: "./img/GLAZKI_icon.png",
        desktopImg: "./img/GLAZKI_desktop.png",
        mobileImg: "./img/GLAZKI_mobile.png",
    },
];

const miniWorks = [
    {
        title: "GLAZKI",
        text: "CSS spin preloader + preload Page i am testing how the word wrap works hope it's okay and i won't have to remake it",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page i am testing how the word wrap works hope it's okay and i won't have to remake it",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page i am testing how the word wrap works hope it's okay and i won't have to remake it",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page test",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: "./img/GLAZKI_desktop.png",
    },
];
export function Works() {
    return (
        <div className="w-[1190px] mx-auto">
            <div className="uppercase font-semibold text-4xl mb-4">
                Последние проекты
            </div>
            {works.map((item, index) => (
                <WorkElement
                    info={item}
                    key={index}
                    className={index !== 0 && "mt-11"}
                />
            ))}
            <div className="uppercase font-semibold text-4xl mb-4 mt-23">
                Мини-проекты
            </div>
            <Carousel>
                {miniWorks.map((item, index) => (
                    <MiniWorkElement info={item} key={index} />
                ))}
            </Carousel>
        </div>
    );
}

function Carousel({ className, children }) {
    const scrollRef = useRef(null);

    const scroll = function (isOpposite = false) {
        const container = scrollRef.current;
        if (!container) return;
        console.log(container);
        const amount = 200;
        container.scrollBy({
            left: isOpposite ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <div className={className}>
            <div
                ref={scrollRef}
                className="flex gap-6 w-full overflow-x-auto snap-x no-scrollbar"
            >
                {children}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    className="rounded-full bg-neutral-200 size-12 text-neutral-700 hover:text-black flex items-center justify-center"
                    onClick={() => scroll(true)}
                >
                    <ScrollArrowLeftIcon />
                </button>
                <button
                    className="rounded-full bg-neutral-200 size-12 text-neutral-700 hover:text-black flex items-center justify-center"
                    onClick={() => scroll(false)}
                >
                    <ScrollArrowRightIcon />
                </button>
            </div>
        </div>
    );
}

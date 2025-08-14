import { Carousel } from "./carousel";
import { MiniWorkElement } from "./mini-work-element";
import { WorkElement } from "./work-element";
import { WorksLayout } from "./works-layout";

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
        <WorksLayout
            worksTitle={"Последние проекты"}
            worksContent={works.map((item, index) => (
                <WorkElement
                    info={item}
                    key={index}
                    className={index !== 0 && "mt-11"}
                />
            ))}
            miniWorksTitle={"Мини-проекты"}
            miniWorksContent={
                <Carousel>
                    {miniWorks.map((item, index) => (
                        <MiniWorkElement info={item} key={index} />
                    ))}
                </Carousel>
            }
        />
    );
}



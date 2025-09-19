import MediaQuery from "react-responsive";
import { Carousel } from "./carousel";
import { MiniWorkElement } from "./mini-work-element";
import { WorkElement } from "./work-element";
import { SmWorkElement } from "./sm-work-element";
import { WorksLayout } from "./works-layout";
import { SmMiniWorkElement } from "./sm-mini-work-element";

const works = [
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи. Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.азработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи. Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.",
        skills: [
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Figma",
            "Node.js",
            "Git",
        ],
        projLink: "https://ya.ru",
        iconImg: new URL("./img/GLAZKI_icon.png", import.meta.url).href,
        desktopImg: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
        mobileImg: new URL("./img/GLAZKI_mobile.png", import.meta.url).href,
    },
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением.",
        skills: ["HTML", "CSS", "JS"],
        projLink: "https://ya.ru",
        iconImg: new URL("./img/GLAZKI_icon.png", import.meta.url).href,
        desktopImg: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
        mobileImg: new URL("./img/GLAZKI_mobile.png", import.meta.url).href,
    },
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.",
        skills: ["HTML", "CSS", "JS"],
        projLink: "https://ya.ru",
        iconImg: new URL("./img/GLAZKI_icon.png", import.meta.url).href,
        desktopImg: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
        mobileImg: new URL("./img/GLAZKI_mobile.png", import.meta.url).href,
    },
];

const miniWorks = [
    {
        title: "GLAZKI",
        text: "CSS spin preloader + preload Page i am testing how the word wrap works hope it's okay and i won't have to remake it",
        skill: "WebflowWebflowWebflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page i am testing how the word wrap works hope it's okay and i won't have to remake it",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page i am testing how the word wrap works hope it's okay and i won't have to remake it",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page test",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
    {
        title: "First session",
        text: "CSS spin preloader + preload Page",
        skill: "Webflow",
        date: "Январь 2024",
        projLink: "https://ya.ru",
        img: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
    },
];

export function Works() {
    return (
        <>
        <MediaQuery minWidth={1200}>
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
        </MediaQuery>
        <MediaQuery maxWidth={1199} minWidth={425}>

        </MediaQuery>
        <MediaQuery maxWidth={424}>
            <WorksLayout
                worksTitle={"Последние проекты"}
                worksContent={works.map((item, index) => (
                    <SmWorkElement
                        info={item}
                        key={index}
                        className={index !== 0 && "mt-11"}
                    />
                ))}
                miniWorksTitle={"Мини-проекты"}
                miniWorksContent={
                    <Carousel>
                        {miniWorks.map((item, index) => (
                            <SmMiniWorkElement info={item} key={index} />
                        ))}
                    </Carousel>
                }
            />
        </MediaQuery>
               </>

    );
}



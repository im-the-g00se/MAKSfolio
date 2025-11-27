// import MediaQuery from "react-responsive";
import { Carousel } from "./carousel";
import { WorksLayout } from "./works-layout";

import { ResponsiveMiniWorkElement } from "./responsive-mini-work-element";
import { ResponsiveWorkElement } from "./responsive-work-element";

const works = [
    {
        title: "GLAZKIlongname",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec q",
        skills: [
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Figma",
            "Node.js",
            "Git",
        ],
        projLink: "https://ya.ru",
        desktopImg: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
        mobileImg: new URL("./img/GLAZKI_mobile.png", import.meta.url).href,
    },
    {
        title: "GLAZKI 1",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи. Разработал проект глаз",
        skills: [
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Figma",
            "Node.js",
            "Git",
        ],
        projLink: "https://ya.ru",
        desktopImg: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
        mobileImg: new URL("./img/GLAZKI_mobile.png", import.meta.url).href,
    },
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением.",
        skills: ["HTML", "CSS", "JS"],
        projLink: "https://ya.ru",
        desktopImg: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
        mobileImg: new URL("./img/GLAZKI_mobile.png", import.meta.url).href,
    },
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.",
        skills: ["HTML", "CSS", "JS"],
        projLink: "https://ya.ru",
        mobileImg: new URL("./img/GLAZKI_mobile.png", import.meta.url).href,
    },
    {
        title: "GLAZKI",
        text: "Разработал проект глазки которе попмогает следить за зрением. Использовал джаву, хуяву и еще никарагую. Был в качестве лид-разраба, заставлял работать негров, давал им задачи.",
        skills: ["HTML", "CSS", "JS"],
        projLink: "https://ya.ru",
        desktopImg: new URL("./img/GLAZKI_desktop.png", import.meta.url).href,
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
            <WorksLayout
                    worksTitle={"Последние проекты"}
                    worksContent={works.map((item, index) => (
                        <ResponsiveWorkElement
                            info={item}
                            key={index}
                        />
                    ))}
                    miniWorksTitle={"Мини-проекты"}
                    miniWorksContent={
                        <Carousel>
                            {miniWorks.map((item, index) => (
                                <ResponsiveMiniWorkElement info={item} key={index} />
                            ))}
                        </Carousel>
                    }
                />
        </>
    );
}

// import { WorkElement } from "./xl-work-element";
// import { MiniWorkElement } from "./xl-mini-work-element";
// import { SmWorkElement } from "./sm-work-element";
// import { SmMiniWorkElement } from "./sm-mini-work-element";

{/* <MediaQuery minWidth={1200}>
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
<MediaQuery maxWidth={1199} minWidth={800}>
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
<MediaQuery maxWidth={799}>
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
</MediaQuery> */}
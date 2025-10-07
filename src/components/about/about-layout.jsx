import { AboutMeWindow } from "./about-me-window";
import MediaQuery from "react-responsive";

export function AboutLayout({
    totemImageSrc,
    totemImageAlt,
    greetingText,
    text1,
    text2,
    text3,
    text4,
    aboutText1,
    aboutSrc1,
    aboutAlt1,
    aboutText2,
    aboutSrc2,
    aboutAlt2,
    messages,
}) {
    return (
        <div className="">
            <MediaQuery minWidth={1200}>
                <img
                    src={totemImageSrc}
                    alt={totemImageAlt}
                    className="absolute -top-24 right-16 w-1/4"
                />
                <div className="ml-[10%] text-3xl uppercase font-medium w-3/5 wrap-normal text-center">
                    {text1} {text2}
                </div>
                <div className="mt-13 ml-[20%] text-3xl uppercase font-medium w-1/2 wrap-normal text-center">
                    {text3} {text4}
                </div>
                <AboutMeWindow
                    className="ml-[5%] -mt-40 w-[12%]!"
                    text={aboutText1}
                >
                    <img src={aboutSrc1} alt={aboutAlt1} />
                </AboutMeWindow>
                <AboutMeWindow
                    className=" ml-[75%] -mt-10 w-[15%]!"
                    text={aboutText2}
                >
                    <img src={aboutSrc2} alt={aboutAlt2} />
                </AboutMeWindow>

                <div className="w-[890px] mx-auto flex flex-col gap-10 mt-5">
                    {messages}
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1199} minWidth={550}>
                <div className="text-5xl w-4/5 mx-auto text-center uppercase font-bold">
                    этот сайт пока не поддерживает это разрешение экрана
                </div>
                <div className="mt-10 w-4/5 text-5xl text-center mx-auto uppercase font-bold">
                    <a
                        href="https://www.youtube.com/watch?v=iPBq1pTGgro"
                        className="px-10 py-6 bg-neutral-300 hover:bg-neutral-400 underline rounded-full"
                    >
                        простите(
                    </a>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={549}>
                <div className="grid grid-cols-2 gap-x-5 px-7 gap-y-11 text-3xl font-medium wrap-normal text-center">
                    <div className="flex flex-col gap-11 pt-10">
                        <div className="text-4xl font-bold uppercase ">
                            {greetingText}
                        </div>
                        <div className="uppercase">{text1}</div>
                    </div>
                    <div className="">
                        <img
                            src={totemImageSrc}
                            alt={totemImageAlt}
                            className=""
                        />
                    </div>
                    <div className="">
                        <AboutMeWindow className="" text={aboutText1}>
                            <img src={aboutSrc1} alt={aboutAlt1} />
                        </AboutMeWindow>
                    </div>
                    <div className="uppercase">{text2}</div>
                    <div className="col-span-2 uppercase">{text3}</div>
                    <div className="uppercase">{text4}</div>
                    <div className="">
                        <AboutMeWindow className="mt-20" text={aboutText2}>
                            <img src={aboutSrc2} alt={aboutAlt2} />
                        </AboutMeWindow>
                    </div>
                </div>
                <div className="w-9/10 mt-20 mx-auto flex flex-col gap-10">
                    {messages}
                </div>
            </MediaQuery>
        </div>
    );
}

import { AboutMeWindow } from "./about-me-window";

export function AboutLayout({ info }) {
    return (
        <div className="max-w-400 mx-auto">
            <XlAboutLayout info={info} />
            <SmAboutLayout info={info} />
        </div>
    );
}

function SmAboutLayout({ info }) {
    const {
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
    } = info;
    return (
        <div className="block md:hidden max-w-180 mx-auto px-10">
            <div className="grid grid-cols-2 gap-x-5 gap-y-11 text-3xl font-medium text-center">
                <div className="text-4xl col-span-2 font-bold uppercase ">
                    {greetingText}
                </div>
                <div className="uppercase mb-8">{text1}</div>
                <div className="flex items-baseline justify-end">
                    <img
                        src={totemImageSrc}
                        alt={totemImageAlt}
                        className="max-w-65 w-full"
                    />
                </div>
                <div className="">
                    <AboutMeWindow className="-mt-8" text={aboutText1}>
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
            <div className="w-full mt-20  flex flex-col gap-10">{messages}</div>
        </div>
    );
}

function XlAboutLayout({ info }) {
    const {
        totemImageSrc,
        totemImageAlt,
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
    } = info;
    return (
        <div className="hidden md:block relative">
            <img
                src={totemImageSrc}
                alt={totemImageAlt}
                className="absolute -top-14 right-16 w-[23%] max-w-100"
            />
            <div
                className="ml-[10%] text-3xl uppercase font-medium w-3/5 text-center"
                lang="ru"
            >
                {text1} {text2}
            </div>
            <div
                className="mt-13 ml-[23%] text-3xl uppercase font-medium w-1/2 text-center"
                lang="ru"
            >
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

            <div className="w-7/10 mx-auto flex flex-col gap-10 mt-5">
                {messages}
            </div>
        </div>
    );
}

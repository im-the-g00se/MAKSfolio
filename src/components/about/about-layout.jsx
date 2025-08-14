import { AboutMeWindow } from "./about-me-window";

export function AboutLayout({totemImageSrc, totemImageAlt, text1, text2, text3, text4, aboutText1, aboutSrc1, aboutAlt1, aboutText2, aboutSrc2, aboutAlt2, messages}) {
    return (
        <div className="">
                    
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
                </div>
    )
}
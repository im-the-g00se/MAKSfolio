import clsx from "clsx";
import SkillItem from "../ui/skill-item";
import { ArrowRightIcon } from "./icons/arrow-right";

const LOT_OF_SYMB = 200; // amount of symbols that trigger an end case

export function ResponsiveWorkElement({ info, className }) {
    return (
        <ResponsiveWorkElementLayout
            className={className}
            title={info.title}
            text={info.text}
            link={info.projLink}
            skills={info.skills.map((skill, index) => (
                <SkillItem size="sm" key={index}>
                    {skill}
                </SkillItem>
            ))}
            desktop_img={info.desktopImg || new URL("./img/no_desktop.png", import.meta.url).href}
            mobile_img={info.mobileImg || new URL("./img/no_mobile.png", import.meta.url).href}
        />
    );
}

function ResponsiveWorkElementLayout({
    title,
    text,
    link,
    skills,
    desktop_img,
    mobile_img,
    className,
}) {
    return (
        <>
            <SmWorkElementLayout
                title={title}
                text={text}
                link={link}
                skills={skills}
                desktop_img={desktop_img}
                mobile_img={mobile_img}
                className={className}
            />
            <XlWorkElementLayout
                title={title}
                text={text}
                link={link}
                skills={skills}
                desktop_img={desktop_img}
                mobile_img={mobile_img}
                className={className}
            />
        </>
    );
}

function SmWorkElementLayout({
    title,
    text,
    link,
    skills,
    desktop_img,
    mobile_img,
    className,
}) {
    return (
        <div
            className={clsx(
                " pt-10 px-10 bg-neutral-50 relative rounded-4xl grid md:hidden grid-cols-2 w-full gap-2 overflow-hidden",
                className
            )}
        >
            <div className="mb-10 ">
                <div className="font-bold wrap-break-word text-3xl uppercase">
                    {title}
                </div>
                <div className="mt-2 mb-10 text-neutral-500">{text}</div>

                <a
                    href={link}
                    className="flex px-4 py-2 bg-black text-white w-fit h-fit rounded-full"
                >
                    <ArrowRightIcon />
                </a>
                {desktop_img && <div className="w-full aspect-1/1" />}
            </div>
            <div className="flex flex-col justify-between">
                <div className="mt-3 flex flex-wrap justify-end gap-x-[6px] gap-y-3 w-full">
                    {skills}
                </div>
                <div className="flex justify-end mt-5">
                    {mobile_img && (
                        <img
                            src={mobile_img}
                            alt="mobile"
                            className="object-cover w-9/10 rounded-xl rotate-7 shadow-lg z-10 aspect-1/2"
                        />
                    )}
                </div>
            </div>
            {desktop_img && (
                <div className="absolute bottom-0 left-0 w-full h-max ">
                    <img
                        src={desktop_img}
                        alt="desktop"
                        className="object-cover mx-auto w-4/5 aspect-2/1 rounded-xl -rotate-10 shadow-lg"
                    />
                </div>
            )}
        </div>
    );
}

function XlWorkElementLayout({
    title,
    text,
    icon,
    link,
    skills,
    desktop_img,
    mobile_img,
    className,
}) {
    return (
        <div
            className={clsx(
                "min-h-[450px] hidden md:flex bg-neutral-50 overflow-hidden rounded-4xl lg:justify-between gap-10 w-full",
                className
            )}
        >
            <div className=" m-11 mr-0 max-w-70 flex flex-col shrink justify-between">
                <div className="">
                    <div className="uppercase wrap-break-word font-bold text-5xl ">
                        {title}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-[6px] gap-y-3 w-full">
                        {skills}
                    </div>
                    {text.length < LOT_OF_SYMB && (
                        <div className="my-9 text-neutral-500">{text}</div>
                    )}
                </div>
                <a
                    href={link}
                    className="w-fit px-6 py-3 rounded-full bg-black text-white"
                >
                    <ArrowRightIcon />
                </a>
            </div>
            <div
                className={clsx(
                    "flex flex-col grow relative max-w-180",
                    text.length < 200
                        ? "shrink-0 justify-end"
                        : "justify-between"
                )}
            >
                {text.length >= LOT_OF_SYMB && (
                    <div className="m-9 text-neutral-500">{text}</div>
                )}
                <div className="flex pl-5 items-end justify-end z-10">
                    {desktop_img && (
                        <>
                            <img
                                src={desktop_img}
                                alt="desktop"
                                className="object-cover absolute bottom-0 left-0 -mr-8 w-125 h-70 rounded-xl -rotate-10 shadow-lg"
                            />
                            <div className="w-50 h-1" />
                        </>
                    )}
                    {mobile_img && (
                        <img
                            src={mobile_img}
                            alt="mobile"
                            className="object-cover -mb-8 mr-2 h-110 w-50 rounded-xl rotate-10 shadow-lg"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

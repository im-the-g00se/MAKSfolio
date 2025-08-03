// import icon from `./img/${info.name}_icon.png
import clsx from "clsx";
import SkillItem from "../ui/skill-item";
import { ArrowRightIcon } from "./icons/arrow-right";

export function WorkElement({ info, className }) {
    const icon = new URL(info.iconImg, import.meta.url).href;
    const desktop = new URL(info.desktopImg, import.meta.url)
        .href;
    const mobile = new URL(info.mobileImg, import.meta.url)
        .href;
    return (
        <div className={clsx("min-h-[450px] bg-neutral-50 rounded-4xl flex gap-10 w-full", className)}>
            <TextLayout
                title={info.title}
                text={info.text}
                icon={icon}
                link={info.projLink}
                skills={info.skills}
            />
            <ImagesLayout desktop_img={desktop} mobile_img={mobile} />
        </div>
    );
}

function TextLayout({ title, text, icon, link, skills }) {
    return (
        <div className=" mt-11 ml-11 mb-11 flex flex-col justify-between">
            <div className="">
                <div className="flex font-bold text-5xl items-center">
                    {icon && (
                        <img
                            src={icon}
                            alt="icon"
                            className="aspect-square h-11 object-cover mr-3"
                        />
                    )}
                    <div className="uppercase">{title}</div>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-[6px] gap-y-3 w-full">
                    {skills.map((skill, index) => (
                        <SkillItem size="sm" key={index}>
                            {skill}
                        </SkillItem>
                    ))}
                </div>
                <div className="mt-9 text-neutral-500">{text}</div>
            </div>
            <a href={link} className="w-fit px-6 py-3 rounded-full bg-black text-white">
                <ArrowRightIcon/>
            </a>
        </div>
    );
}

function ImagesLayout({ desktop_img, mobile_img }) {
    return (
        <div className="flex pl-5 items-end overflow-hidden shrink-0 z-10">
            {desktop_img && (
                <img
                    src={desktop_img}
                    alt="desktop"
                    className="object-cover -mr-8 w-[500px] h-[280px] rounded-xl -rotate-10 shadow-lg"
                />
            )}
            {mobile_img && (
                <img
                    src={mobile_img}
                    alt="mobile"
                    className="object-cover -mb-8 mr-2 h-[450px] w-[200px] rounded-xl rotate-10 shadow-lg"
                />
            )}
        </div>
    );
}

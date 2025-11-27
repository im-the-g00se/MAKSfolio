import clsx from "clsx";
import SkillItem from "../ui/skill-item";
import { ArrowRightIcon } from "./icons/arrow-right";

export function SmWorkElement({ info, className }) {
    return (
        <SmWorkElementLayout
        className={className}
            title={info.title}
            text={info.text}
            icon={
                info.iconImg && (
                    <img
                        src={info.iconImg}
                        alt="icon"
                        className="aspect-square h-11 object-cover mr-3"
                    />
                )
            }
            link={info.projLink}
            skills={info.skills.map((skill, index) => (
                <SkillItem size="sm" key={index}>
                    {skill}
                </SkillItem>
            ))}
            desktop_img={info.desktopImg}
            mobile_img={info.mobileImg}
        />
    );
}

function SmWorkElementLayout({
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
                " pt-10 px-10 bg-neutral-50 rounded-4xl grid grid-cols-2 w-full gap-2 overflow-hidden",
                className
            )}
        >
            <div className="">
                <div className="flex font-bold text-3xl items-center ">
                    {icon}
                    <div className="uppercase">{title}</div>
                </div>
                <div className="my-9 text-neutral-500">{text}</div>

                <a
                    href={link}
                    className="flex px-4 py-2 bg-black text-white w-fit h-fit rounded-full"
                >
                    <ArrowRightIcon />
                </a>
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
                            className="object-cover w-4/5 rounded-xl rotate-7 shadow-lg z-10 aspect-1/2"
                        />
                    )}
                </div>
            </div>
            <div className="relative h-auto aspect-2/1 col-span-2">
                {desktop_img && (
                    <img
                        src={desktop_img}
                        alt="desktop"
                        className="object-cover rounded-xl -rotate-7 shadow-lg overflow-hidden aspect-2/1 "
                    />
                )}
            </div>
        </div>
    );
}

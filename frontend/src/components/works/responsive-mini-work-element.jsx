import SkillItem from "../ui/skill-item";

export function ResponsiveMiniWorkElement({ info }) {
    return (
        <a href={info.projLink} className="flex flex-col gap-4 justify-between rounded-4xl shrink-0 p-4 snap-start lg:w-[calc((100%-3rem)/3)] w-[calc((100%-(1.5rem))/2)]">
            <div className="">
                <img
                    src={info.img  || new URL("#public/no_desktop.png", import.meta.url).href}
                    alt="screenshot"
                    className="rounded-2xl object-cover mb-3 w-full aspect-7/5 shadow-md"
                />
                <div className="font-semibold text-3xl uppercase wrap-normal">
                    {info.title}
                </div>
                <div className="text-neutral-500 pr-5 text-sm whitespace-pre-wrap">{info.text}</div>
            </div>
            <div className="flex md:justify-between md:items-end items-center flex-col md:flex-row gap-3 md:gap-3">
                <SkillItem size="sm">{info.skill}</SkillItem>
                <SkillItem size="sm">{info.date}</SkillItem>
            </div>
        </a>
    );
}

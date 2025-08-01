// import icon from `./img/${info.name}_icon.png
import clsx from "clsx";
import SkillItem from "../ui/skill-item";

export function MiniWorkElement({ info, className }) {
    const image = new URL(info.img, import.meta.url).href;
    return (
        <div
            className={clsx(
                "h-[400px] flex flex-col justify-between bg-neutral-50 rounded-4xl shrink-0 p-4 snap-start w-[calc((100%-(24px*3))/4)]",
                className
            )}
        >
            <div className="">
                <img
                    src={image}
                    alt="screenshot"
                    className="rounded-2xl object-cover mb-3 w-full aspect-7/5 shadow-md"
                />
                <div className="font-semibold text-3xl uppercase wrap-normal">
                    {info.title}
                </div>
                <div className="text-[#666666] pr-5 text-sm">{info.text}</div>
            </div>
            <div className="flex justify-between">
                <SkillItem size="sm">{info.skill}</SkillItem>
                <SkillItem size="sm">{info.date}</SkillItem>
            </div>
        </div>
    );
}

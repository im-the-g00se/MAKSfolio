// import icon from `./img/${info.name}_icon.png
import SkillItem from "../ui/skill-item";

export function ResponsiveMiniWorkElement({ info }) {
    return (
        <div className="flex flex-col justify-between bg-neutral-50 rounded-4xl shrink-0 p-4 snap-start lg:w-[calc((100%-(1.5rem*3))/4)] md:w-[calc((100%-(1.5rem*2))/3)] w-[calc((100%-(1.5rem))/2)]">
            <div className="">
                <img
                    src={info.img}
                    alt="screenshot"
                    className="rounded-2xl object-cover mb-3 w-full aspect-7/5 shadow-md"
                />
                <div className="font-semibold text-3xl uppercase wrap-normal">
                    {info.title}
                </div>
                <div className="text-neutral-500 pr-5 text-sm">{info.text}</div>
            </div>
            <div className="flex md:justify-between md:items-end md:gap-5 items-center flex-col gap-3 pt-10">
                <SkillItem size="sm">{info.skill}</SkillItem>
                <SkillItem size="sm">{info.date}</SkillItem>
            </div>
        </div>
    );
}

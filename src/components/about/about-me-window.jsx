import clsx from "clsx";

export function AboutMeWindow({ text, children, className }) {
    return (
        <div className={clsx("p-[5px] max-w-55 min-w-40 w-fit rounded-xl shadow-[0_0_3px_0_rgba(0,_0,_0,_0.55),_0_40px_100px_0_rgba(0,_0,_0,_0.20)]", className)}>
            <div className="text-neutral-500 text-left font-semibold w-fit py-2 text-sm ">
                {text}
            </div>
            <div className=" border border-neutral-200 bg-neutral-50 rounded-md w-full flex justify-center items-center py-3 px-8">
                <div className="w-fit h-fit">{children}</div>
            </div>
        </div>
    );
}

import clsx from "clsx";

/**
 *
 * @param {{
 *  size: 'sm' | 'md'
 * }} props
 * @returns
 */

export default function SkillItem({ size, children }) {
    return (
        <div
            className={clsx(
                "rounded-full bg-neutral-200 text-center items-center h-fit w-fit flex ",
                {
                    sm: "px-3 py-2 text-sm",
                    md: "text-lg drop-shadow-md px-5 py-3",
                }[size]
            )}
        >
            <span className="wrap-anywhere">{children}</span>
        </div>
    );
}

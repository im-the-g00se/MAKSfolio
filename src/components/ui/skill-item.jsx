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
                    md: "text-xl drop-shadow-md px-6 py-3",
                }[size]
            )}
        >
            <span className="wrap-anywhere">{children}</span>
        </div>
    );
}

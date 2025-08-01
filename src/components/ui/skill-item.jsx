import clsx from "clsx";

/**
 * 
 * @param {{
 *  size: 'sm' | 'md'
 * }} props 
 * @returns 
 */

export default function SkillItem({size, children}) {
    return (
        <div className={clsx("rounded-full bg-neutral-200", {
            sm: 'px-3 py-2 text-sm',
            md: 'text-xl drop-shadow-md px-6 py-3'
        }[size])}>
            {children}
        </div>
    )
}
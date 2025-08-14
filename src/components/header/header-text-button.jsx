import { Link } from "react-router-dom";
import { useTextButton } from "./useTextButton";

export function HeaderTextButton({ className, children, page = null }) {
    const isActive = useTextButton(page);

    const cls =
        className + " cursor-pointer font-semibold text-xl rounded-full text-nowrap px-4 py-3 transition-colors " +
        (isActive
            ? "bg-white text-black"
            : "text-neutral-300 hover:bg-neutral-900");
    return (
        <Link to={page}>
            <button className={cls}>{children}</button>
        </Link>
    );
}

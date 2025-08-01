import { Link } from "react-router-dom";

export function HeaderTextButton({ className, children, page = null }) {
    const cls =
        className + " cursor-pointer font-semibold text-xl rounded-full text-nowrap px-4 py-3 transition-colors " +
        (window.location.pathname === page
            ? "bg-white text-black"
            : "text-neutral-400 hover:bg-neutral-80");
    return (
        <Link to={page}>
            <button className={cls}>{children}</button>
        </Link>
    );
}

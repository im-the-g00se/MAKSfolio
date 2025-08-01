export function HeaderContactsLink({ children, link = null }) {
    return (
        <a href={link} className="flex items-center justify-center">
            <button className="cursor-pointer font-semibold text-xl rounded-full">
                {children}
            </button>
        </a>
    );
}

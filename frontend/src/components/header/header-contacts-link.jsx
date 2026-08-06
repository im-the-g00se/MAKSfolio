export function HeaderContactsLink({ children, link = null }) {
    return (
        <a href={link} className="flex items-center justify-center max-h-full">
            <button className="cursor-pointer font-semibold text-xl rounded-full size-8">
                {children}
            </button>
        </a>
    );
}

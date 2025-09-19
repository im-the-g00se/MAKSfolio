import clsx from "clsx";

export function ArrowRightIcon({className}) {
    return (
        <svg
            // width="20"
            // height="17"
            className={clsx("w-5 h-4", className) }
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.4761 8.5L1 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.4761 15.5L18.4761 8.5L11.4761 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}


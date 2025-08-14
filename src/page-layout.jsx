import { Crosses } from "./components/crosses";

export function PageLayout({
    header,
    disableMarginTop = false,
    disableMarginBottom = false,
    children,
}) {
    return (
        <div className="w-full h-max relative">
            <Crosses/>
            {header}
            <main
                className={
                    (disableMarginTop || "mt-40 ") +
                    (disableMarginBottom || "mb-40")
                }
            >
                {children}
            </main>
        </div>
    );
}

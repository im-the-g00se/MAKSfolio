import { Crosses } from "./components/crosses";

export function PageLayout({
    header,
    children,
}) {
    return (
        <div className="w-full min-w-[300px] h-max relative">
            <Crosses/>
            {header}
            <main
                className="mt-40 mb-20"
            >
                {children}
            </main>
        </div>
    );
}

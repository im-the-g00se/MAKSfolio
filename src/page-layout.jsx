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
                className="my-40"
            >
                {children}
            </main>
        </div>
    );
}

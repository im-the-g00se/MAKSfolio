import { CrossIcon } from "./icons/cross"

export function PageLayout({header, disableMarginTop = false, disableMarginBottom = false,  children}) {
    return (
        <div className="w-full h-max">
            <div className="fixed top-0 p-12 w-full h-full flex flex-col justify-between -z-10">
                    <div className="flex justify-between">
                        <CrossIcon />
                        <CrossIcon />
                    </div>
                    <div className="flex justify-between">
                        <CrossIcon />
                        <CrossIcon />
                    </div>
                    <div className="flex justify-between">
                        <CrossIcon />
                        <CrossIcon />
                    </div>
                </div>
            {header}
            <main className={(disableMarginTop || 'mt-40 ') + (disableMarginBottom || 'mb-40')}>
                
                {children}
            </main>

        </div>
    )
}
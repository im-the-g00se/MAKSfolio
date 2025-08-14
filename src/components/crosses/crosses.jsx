import { CrossIcon } from "./icon/cross";

export function Crosses() {
    return (
        <div className="absolute -top-40 p-12 w-full h-[calc(100%+20rem)] flex flex-col justify-between -z-10 opacity-0 md:opacity-100">  
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
    );
}

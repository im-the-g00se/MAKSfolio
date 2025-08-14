import { Link } from "react-router-dom";

export function Error() {
    return (
        <div className="h-[calc(100vh-20rem)] flex flex-col w-full justify-center items-center gap-6">
            <div className="w-full text-center text-5xl font-bold text-wrap">
                такой страницы нет.<br/>лучше вернись на главную, ладно?
            </div>
            <Link className="text-3xl text-white rounded-full font-semibold py-4 px-6 bg-black" to='/'>на главную</Link>
        </div>
    )
}
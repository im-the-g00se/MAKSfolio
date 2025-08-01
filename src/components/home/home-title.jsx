export function HomeTitle() {
    return (
        <div className="flex flex-col w-max mx-auto justify-center items-center gap-[6px] text-7xl font-bold uppercase text-nowrap">
            <p className="">привет, я макс</p>
            <div className="group flex px-6 relative">
                {/* <div className="bg-[rgba(0,_119,_255,_0.2)] absolute left-0 w-[1px] group-hover:w-full transition-[width] duration-700 h-full"> */}
                <div className="bg-[rgba(0,_119,_255,_0.2)] absolute left-0 size-full">
                    <div className=" -mt-10 w-[1px] h-[calc(100%_+_40px)]">
                        <div className=" h-full flex flex-col items-center">
                            <div className="rounded-full size-10 bg-[#0077FF]" />
                            <div className="bg-[#0077FF] w-2 grow" />
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[1px] h-[calc(100%_+_40px)]">
                        <div className=" h-full flex flex-col items-center">
                            <div className="bg-[#0077FF] w-2 grow" />
                            <div className="rounded-full size-10 bg-[#0077FF]" />
                        </div>
                    </div>
                </div>
                веб-разработчик
            </div>
        </div>
    );
}

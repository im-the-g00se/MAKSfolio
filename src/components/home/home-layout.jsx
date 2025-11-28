export function HomeLayout({title, skills}) {
    return (
        <div className="w-min max-w-full h-[calc(100vh-20rem)] flex min-h-fit flex-col mx-auto justify-center gap-10">
            {title}
            <div className="flex flex-wrap justify-center gap-x-[6px] gap-y-5 w-full">
                {skills}
            </div>
        </div>
    );
}

export function WorksLayout({
    worksTitle,
    worksContent,
    miniWorksTitle,
    miniWorksContent,
}) {
    return (
        <div className="w-4/5 max-w-320 min-w-50 mx-auto">
            <div className="uppercase font-semibold text-4xl mb-4">
                {worksTitle}
            </div>
            {worksContent}
            <div className="uppercase font-semibold text-4xl mb-4 mt-23">
                {miniWorksTitle}
            </div>
            {miniWorksContent}
        </div>
    );
}

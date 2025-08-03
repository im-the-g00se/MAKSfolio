export function TextMessage({className, isAnswer = true, children}) {
    const classes = (isAnswer ? 'bg-neutral-200 mr-40' : 'mr-0 ml-auto text-white bg-[#0077FF]') + ' py-4 px-6 rounded-2xl w-fit ' + className
    return (
        <div className={classes}>{children}</div>
    )
}
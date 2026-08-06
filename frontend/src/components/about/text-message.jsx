import clsx from "clsx"

export function TextMessage({className, isAnswer = true, children}) {
    const classes = clsx((isAnswer ? 'bg-neutral-200 mr-40 rounded-br-2xl' : 'mr-0 ml-auto text-white bg-blue-500 rounded-bl-2xl'),'py-4 px-6 rounded-t-2xl w-fit', className);
    return (
        <div className={classes}>{children}</div>
    )
}
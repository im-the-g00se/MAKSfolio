import { useEffect } from "react";

export function RedirectPage({link}) {
    useEffect(() => {
        window.location.replace(link);
    }, []);
    return <div/>;
}

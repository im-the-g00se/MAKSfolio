import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useTextButton(page) {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setIsActive(location.pathname === page);
    }, [page, location]);
    return isActive;
}
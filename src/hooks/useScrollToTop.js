import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop(trigger) {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname, trigger]);
}
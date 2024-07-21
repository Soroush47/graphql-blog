import { useEffect, useState } from "react";

const useScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log("effect");
        window.scroll(0, 0);
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 196);
        };
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return isVisible;
};

export default useScrollToTop;

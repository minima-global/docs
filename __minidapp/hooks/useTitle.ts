import { useEffect, useRef } from "react";

function useTitle() {
    const hasLoaded = useRef(false);

    useEffect(() => {
        if (!hasLoaded.current) {
            hasLoaded.current = true;

            document.title = "Minima Docs";
        }
    }, [])
}

export default useTitle;

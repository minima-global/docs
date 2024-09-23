import { useEffect, useRef } from "react";

function useTheme() {
    const hasLoaded = useRef(false);

    useEffect(() => {
        if (!hasLoaded.current) {
            hasLoaded.current = true;

            setTimeout(() => {
                const preferredTheme = window.localStorage.getItem('mode');

                if (preferredTheme === 'light') {
                    document.documentElement.classList.remove("dark")
                    document.documentElement.classList.add("light")
                }
            }, 10)
        }
    }, [])

    // could be moved, copy and pasting right now...
    const toggleTheme = () => {
        const isDarkMode = document.documentElement.classList.contains("dark");

        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
            window.localStorage.setItem('mode', 'light');
        } else {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
            window.localStorage.setItem('mode', 'dark');
        }
    };

    return {
        toggleTheme,
    }
}

export default useTheme;

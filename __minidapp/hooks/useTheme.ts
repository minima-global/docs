import { useEffect, useRef, useState } from "react"

function useTheme() {
  const hasLoaded = useRef(false)
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("mode") || "light"
  )

  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true
      setTimeout(() => {
        const preferredTheme = window.localStorage.getItem("mode")
        setCurrentTheme(preferredTheme || "light")

        if (preferredTheme === "light") {
          document.documentElement.classList.remove("dark")
          document.documentElement.classList.add("light")
        }
      }, 10)
    }
  }, [])

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.contains("dark")

    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      window.localStorage.setItem("mode", "light")
      setCurrentTheme("light") // Update state
    } else {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
      window.localStorage.setItem("mode", "dark")
      setCurrentTheme("dark") // Update state
    }
  }

  const getTheme = () => {
    return currentTheme
  }

  return {
    toggleTheme,
    getTheme,
    currentTheme, // Return current theme
  }
}

export default useTheme

import React, { useEffect } from 'react'

export default function useDarkMode() {
    const [theme, setTheme] = React.useState("light")
    const colorTheme = theme === "light" ? "dark" : "light"
    useEffect(() => {
        const root = window.document.documentElement
        root.classList.add(theme)
        root.classList.remove(colorTheme)

        localStorage.setItem("Theme", theme)
    }, [theme, colorTheme])
    return [setTheme, colorTheme]
}
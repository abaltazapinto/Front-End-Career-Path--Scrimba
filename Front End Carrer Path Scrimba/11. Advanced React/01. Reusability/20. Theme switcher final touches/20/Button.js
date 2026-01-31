import React from "react"
import { ThemeContext } from "./App"

export default function Button() {
    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}
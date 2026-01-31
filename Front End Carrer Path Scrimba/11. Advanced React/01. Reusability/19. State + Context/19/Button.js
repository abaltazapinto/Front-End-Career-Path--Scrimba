import React from "react"
import { ThemeContext } from "./App"

export default function Button() {
    const { theme } = React.useContext(ThemeContext)

    return (
        <button className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}
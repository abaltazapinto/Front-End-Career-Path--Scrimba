import React from "react"
import { ThemeContext } from "./App"

export default function Header() {
    const value = React.useContext(ThemeContext)
    
    /**
     * Challenge:
     * Part 1: Update our CSS className to use the context 
     * value instead of being hard-coded as "dark". Also,
     * change the text "Dark" in the h1 to correspond with
     * the `value` from context.
     */
    
    return (
        <header className={`${value}-theme`}>
            <h1>{value === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}
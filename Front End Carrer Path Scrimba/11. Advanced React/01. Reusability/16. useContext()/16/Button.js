import React from "react"
import {ThemeContext} from "./App"

export default function Button() {
    const value = React.useContext(ThemeContext)
    /**
     * Challenge part 2:
     * Do the same with the Button component :) Only worry
     * about changing the className, don't worry about getting
     * the button click to work just yet.
     */
    return (
        <button className={`${value}-theme`}>
            Switch Theme
        </button>
    )
}
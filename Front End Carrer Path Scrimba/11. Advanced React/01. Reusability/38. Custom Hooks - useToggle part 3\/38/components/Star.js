import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../../hooks/useToggle"

/**
 * Challenge: Remove all parts of our Toggle component
 * (don't delete the react-icons stars though!) and use 
 * the useToggle hook to conditionally render the stars. 
 * Make sure to add an onClick that runs the `toggle` function
 * you get from useToggle()
 */

export default function Star({ onChange }) {
    const [on, toggle] = useToggle()
    return (
        <>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}
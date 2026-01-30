import React from "react"

export default function useToggle() {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return [on, toggle]
}
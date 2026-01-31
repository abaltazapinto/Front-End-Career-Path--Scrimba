import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function Star() {
    const [starred, setStarred] = React.useState(false)
    
    function toggle() {
        setStarred(prev => !prev)
    }
    
    return (
        starred ? 
        <BsStarFill className="star filled" onClick={toggle} /> :
        <BsStar className="star " onClick={toggle} />
    )
}
import React from "react"
import useToggle from "../../hooks/useToggle"

export default function Menu({ children, onOpen }) {
    return (
        <useToggle onToggle={onOpen}>
            <div className="menu">
                {children}
            </div>
        </useToggle>
    )
}

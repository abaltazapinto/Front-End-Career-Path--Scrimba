import React from "react"

export default function MenuItem({ children, toggle, open }) {
    console.log(open, toggle)
    return (
        <div className="menu-item">
            {children}
        </div>
    )
}
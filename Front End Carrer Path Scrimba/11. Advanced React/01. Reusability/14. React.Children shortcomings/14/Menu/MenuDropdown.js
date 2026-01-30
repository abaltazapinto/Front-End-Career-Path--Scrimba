import React from "react"

export default function MenuDropdown({ children, open, toggle }) {
    
    /** Discovery Challenge:
     * Make it so the children of MenuDropdown also have
     * access to toggle and open.
     */
    
    return open ? (
        <div className="menu-dropdown">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {toggle, open})
            })}
        </div>
    ) : null
}
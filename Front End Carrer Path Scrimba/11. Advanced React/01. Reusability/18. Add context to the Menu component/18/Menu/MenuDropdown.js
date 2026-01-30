import React from "react"
import { MenuContext } from "./Menu"

/**
 * Challenge part 2:
 * Pull in the value from context and update the conditional
 * rendering code below to use that value instead of `open`,
 * which used to be passed down via props.
 */

export default function MenuDropdown({ children }) {
    const open = React.useContext(MenuContext)
    
    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}
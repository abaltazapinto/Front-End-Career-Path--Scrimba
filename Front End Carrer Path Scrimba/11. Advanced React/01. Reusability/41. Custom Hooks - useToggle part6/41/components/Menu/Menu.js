import React from "react"
import useToggle from "../../hooks/useToggle"

/**
 * Challenge:
 * 6. Access the needed context values in the MenuButton
 *    and MenuDropdown components. See if you can remember
 *    (or figure out again) how those values are used in each 
 *    of those components. Once you've done this successfully,
 *    the Menu should start working again (except for the onOpen
 *    callback, which we'll work on fixing soon).
 */

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle()

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

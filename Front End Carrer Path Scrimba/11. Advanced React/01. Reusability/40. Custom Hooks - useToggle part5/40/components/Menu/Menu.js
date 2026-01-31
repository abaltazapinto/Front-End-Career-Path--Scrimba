import React from "react"
import useToggle from "../../hooks/useToggle"

/**
 * Challenge:
 * 3. Create context (MenuContext). Make sure to export
 *    it so we can access it in the other Menu components!
 *    (Will be a named export, not default export).
 * 4. Wrap the div below with the context provider
 * 5. What do you think we should pass as the values
 *    to the provider? 🤔
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

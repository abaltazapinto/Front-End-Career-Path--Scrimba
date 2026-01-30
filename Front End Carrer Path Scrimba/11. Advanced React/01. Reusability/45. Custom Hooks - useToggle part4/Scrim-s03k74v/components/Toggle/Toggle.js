import React from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"
import useToggle from "../../hooks/useToggle"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle = () => {}}) {
    const [on, toggle] = useToggle()
    
    useEffectOnUpdate(onToggle, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }
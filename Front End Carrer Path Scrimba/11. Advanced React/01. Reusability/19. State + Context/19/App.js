import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()

export default function App() {
    const [theme, setTheme] = React.useState("light")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
    /**
     * Challenge part 4:
     * Now that we're passing an object instead of a string through
     * context, update the Button and Header components to receive the
     * correct values again.
     */
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
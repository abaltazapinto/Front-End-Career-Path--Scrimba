import React from "react"
import Decision from "./Decision"

function App() {
    /**
     * Challenge:
     * Pass a function down via props to Decision that receives
     * the boolean in state and logs it
     */
    return (
        <div>
            <Decision sayName={(goingOut) => {
                console.log(goingOut ? "I AM going out" : "I'm staying in")
            }} />
        </div>
    )
}

export default App
import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
    
    /**
     * Challenge:
     * If there are 0 unread messages, display a paragraph that says "You
     * have no unread messages". (So, the logic will be the opposite of
     * what we have for the h1)
     */
    
    const [read, setRead] = React.useState(false)
    function toogleRead() {
        setUnreadMessages([])
        console.log("Toogle")
        console.log(unreadMessages)
    }
    return (
        <div>
            {
                unreadMessages.length > 0 && 
                <h1>You have {unreadMessages.length} unread messages!</h1>
            }
            {
                !unreadMessages.length &&
                <p>You have no unread messages</p>
            }
            <button onClick={toogleRead}>Read</button>
        </div>
    )
}

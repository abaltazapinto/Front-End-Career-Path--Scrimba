import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"
import { FcGoogle } from "react-icons/fc"

/**
 * Challenge: Add an onClick handler to the Button
 * component instance (the one on this page). Then
 * make whatever changes you need for it to actually
 * work.
 * 
 * Clicking the button should log "Logging in..." 
 * to the console.
 */

function App() {
  return (
    <main>
      <Button onClick={() => console.log("Logging in...")}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
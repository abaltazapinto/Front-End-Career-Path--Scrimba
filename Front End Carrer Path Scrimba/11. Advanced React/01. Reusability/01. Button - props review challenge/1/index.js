import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"


/**
 * Challenge: 
 * 
 * Build a Button component in a separate file.
 * (For styling purposes, make sure it renders an HTML <button> element)
 * Your button component should take a `text` prop
 */

function App() {
  return (
    <main>
      <Button>Text inside</Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
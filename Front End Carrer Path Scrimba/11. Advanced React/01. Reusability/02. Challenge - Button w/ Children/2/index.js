import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"

/**
 * Challenge: Make the Button accept and display children.
 * 
 * Change the text to say "Buy now!" so it's less boring 🥱
 */

function App() {
  return (
    <main>
      <Button>Buy now!</Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
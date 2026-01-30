import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"

function App() {
  return (
    <main>
      <Button size="lg" className="green">Log in with Google</Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
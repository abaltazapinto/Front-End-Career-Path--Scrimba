import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle/Toggle"

function App() {
  return (
    <>
      <Toggle>
        <Star />
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

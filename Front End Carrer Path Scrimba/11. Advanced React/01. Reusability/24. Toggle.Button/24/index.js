import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle/index"

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

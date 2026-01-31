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
        <Toggle.On>The toggle is on</Toggle.On>
        <Toggle.Off>The toggle is off</Toggle.Off>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

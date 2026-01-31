import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"

/**
 * Challenge: 
 * Part 2:
 * Instead of rendering Toggle.On and Toggle.Off, use a single
 * Toggle.Display to render the div below. Toggle.Display will
 * take a function as a child (don't forget to wrap that function
 * in curly braces since it's JS inside of JSX) and will receive
 * the `on` state as its parameter.
 * 
 * From that function, you should return the div below, but this
 * time conditionally render the `filled` className based on
 * the value of `on`.
 * 
 * You'll know it worked if clicking the box shows a transition
 * between the white background and the blue background. See
 * style.css for details on what's happening there.
 */

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  )
}
          // <Toggle.On>
          //   <div className="box filled"></div>
          // </Toggle.On>
          // <Toggle.Off>
          //   <div className="box"></div>
          // </Toggle.Off>
      // <Star />
      
      // <br />

      // <Menu>
      //   <Menu.Button>Menu</Menu.Button>
      //   <Menu.Dropdown>
      //     <Menu.Item>Home</Menu.Item>
      //     <Menu.Item>About</Menu.Item>
      //     <Menu.Item>Contact</Menu.Item>
      //     <Menu.Item>Blog</Menu.Item>
      //   </Menu.Dropdown>
      // </Menu>

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

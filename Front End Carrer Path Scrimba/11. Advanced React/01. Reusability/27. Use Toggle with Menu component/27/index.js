import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import Menu from "./components/Menu/index"

function App() {
  /**
   * Challenge: Refactor the Menu components to use the logic 
   * from Toggle instead of doing any logic of its own.
   * 
   * 1. Remove all context and state logic from the menu components
   * 2. Using Toggle and its "sub-components", add a menu to this
   *    App component below the Star. Make sure to use a separate
   *    <Toggle> wrapper so the state isn't tied to the Star's 
   *    Toggle state
   */

  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>

      <br />

      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Menu.Item>Blog</Menu.Item>
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

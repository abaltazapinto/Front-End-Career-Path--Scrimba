import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"

function App() {
  /**
   * Challenge: 
   * Move other Toggle logic to be composed with the Menu
   * components internally, so the person using our Menu
   * component never needs to touch the generic Toggle at all.
   */

  return (
    <>
      <Star />

      <br />

      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

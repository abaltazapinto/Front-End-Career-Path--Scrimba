import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

/**
 * Challenge:
 * 1. Convert the MenuButton to accept children and 
 *    render them. (In this case, the children will
 *    just be the button text)
 * 2. Change the MenuButton below to pass "Sports"
 *    in as a child of the component instead of by
 *    using the `buttonText` prop.
 * 
 * NOTE: It's fine that the menu is still broken, I
 * promise we're getting there! 😃
 */

function App() {
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  
  /**
   * 1. MenuDropdown should render children instead of items
   * 2. MenuItem (new component you need to create) should also
   *    render children. Grab the <div className="menu-item">
   *    from MenuDropdown before deleting it if you want to be
   *    lazy :)
   * 3. Map over the `sports` array inside MenuDropdown in this
   *    file and render a MenuItem for each sport in the array
   */
  return ( 
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={sports} />
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
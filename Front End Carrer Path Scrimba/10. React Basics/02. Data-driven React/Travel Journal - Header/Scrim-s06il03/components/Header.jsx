import globe from '../globe.png'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img src={globe} className="logo" alt="Globe logo" />
      my travel journal
    </header>
  )
}

export default Header

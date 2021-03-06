// eslint-disable-next-line
import React, { useRef } from "react"
// Modular CSS
import { navBarActionToggle } from 'modular-css';
// Gatsby 
import { Link } from 'gatsby';

const Header = () => {

  // useRef
  const navBarItem = useRef(null);
  const btnActions = useRef(null);
  const iconToggle = 'a-room_service';

  return (
    <nav className="navbar-component dark bg-grape" id="navbar_1" ref={navBarItem}>
      <Link className="navbar-logo center txt-strong" to="/" title="MyFriky PLAZ Home page">
        PLAZresort HOTEL
      </Link>
      <div className="navbar-toggle">
        <button 
          type="button" 
          className="btn-toggle" 
          onClick={ () => navBarActionToggle(navBarItem, btnActions, iconToggle) }
        >
          <i className={iconToggle}></i>
        </button>
      </div>
      <div className="navbar-actions split" ref={btnActions}>
        <ul className="navbar-actions_item jc-end">
          <li><Link to="/" className="nav-link" activeClassName="select dial">Home</Link></li>
          <li><Link to="/about" className="nav-link" activeClassName="select dial">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

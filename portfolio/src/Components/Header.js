import React from 'react'
import { Link } from 'react-router-dom'
import'../CSS/style.css'
import ToggleMenu from './Togglemenu'

export default function Header() {
  return (
    <><nav id="desktop-nav">
      <div className="logo">Vimukthi</div>
      <div>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>

    {/* Hamburger Navigation */}

    <nav id="hamburger-nav">
        <div className="logo">Vimukthi</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={ToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><Link to="/about" onClick={ToggleMenu}>About</Link></li>
            <li><Link to="/experience" onClick={ToggleMenu}>Experience</Link></li>
            <li><Link to="/projects" onClick={ToggleMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={ToggleMenu}>Contact</Link></li>
          </div>
        </div>
      </nav>
      </>
  )
}

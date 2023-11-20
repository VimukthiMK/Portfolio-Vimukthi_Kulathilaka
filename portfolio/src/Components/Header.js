import React from 'react'
import { Link } from 'react-router-dom'

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
      </>
  )
}

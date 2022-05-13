import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>Brizzle.dev</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
        </div>
    </nav>
  )
}

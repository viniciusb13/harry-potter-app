import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Header = () => {
  return (
    <div className="header">
        <a href="/" style={{ textDecoration: 'none', color: 'black'}}>
            Harry Potter
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link className="nav-button" to={`/characters`}>
                Characters
            </Link>
            <Link className="nav-button" to={`/houses`}>
                Houses
            </Link>
            <Link className="nav-button" to={`/spells`}>
                Spells
            </Link>
        </div>
    </div>
  )
}

export default Header
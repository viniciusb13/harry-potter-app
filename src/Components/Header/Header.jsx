import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const menuRef = useRef(null);
    library.add(fas)

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu')
    }
  return (
    <div className="header">
        <a href="/" style={{ textDecoration: 'none', color: 'black'}}>
            Harry Potter
        </a>
        <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul>
                <li>
                    <Link className="nav-button" to={`/characters`}>
                        Characters
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" to={`/houses`}>
                        Houses
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" to={`/spells`}>
                        Spells
                    </Link>
                </li>
            </ul>
        </div>
        <span onClick={toggleMenu} className="menu-icon">
            <FontAwesomeIcon icon={['fas', 'bars']}/>
        </span>
    </div>
  )
}

export default Header
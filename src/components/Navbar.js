import React from 'react'
import logo from '../logo.png';
import './Navbar.scss'
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="logo" />
            <ul className="nav-links">
                <li>
                    <a href="/" className='nav-link'>home</a>
                </li>
                <li>
                    <a href="/about" className='nav-link'>about</a>
                </li>
                <li>
                    <a href="/tours" className='nav-link'>tours</a>
                </li>
            </ul>
            </nav>
        </>
    )
}

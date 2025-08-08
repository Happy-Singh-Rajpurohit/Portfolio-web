import React, { useState } from 'react';
import { Link } from "react-scroll";
import './NavigationBar.css';

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar-container'>
            {/* Hamburger Icon for Mobile */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`} />
                <div className={`bar ${isOpen ? 'open' : ''}`} />
                <div className={`bar ${isOpen ? 'open' : ''}`} />
            </div>

            {/* Regular Desktop Navbar - Hidden on Mobile */}
            <div className='left-panel desktop-only'>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="tech" smooth={true} duration={500}>Tech</Link>
            </div>

            {/* Center Logo - Always visible */}
            <div className='nav-logo'>
                <img src="/logo.png" alt="logo" />
            </div>

            {/* Regular Desktop Navbar - Hidden on Mobile */}
            <div className='right-panel desktop-only'>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </div>

            {/* Mobile Dropdown Menu - Visible when isOpen is true */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link onClick={toggleMenu} to="about" smooth={true} duration={500}>About</Link>
                    <Link onClick={toggleMenu} to="tech" smooth={true} duration={500}>Tech</Link>
                    <Link onClick={toggleMenu} to="projects" smooth={true} duration={500}>Projects</Link>
                    <Link onClick={toggleMenu} to="contact" smooth={true} duration={500}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
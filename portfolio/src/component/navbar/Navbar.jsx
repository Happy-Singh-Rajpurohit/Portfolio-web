import './navbar.css';
import {Link} from "react-scroll";

export default function Navbar(){
    return(
        //Navbar Container
        <nav className='navbar-container'>
            {/* Left Navbar Tags */}
            <div className='left-panel'>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="tech" smooth={true} duration={500}>Tech</Link>
            </div>

            {/* Center Logo */}
            <div className='nav-logo'>
                <img src="" alt="logo" />
            </div>

            {/* Right Navbar Tags */}
            <div className='right-panel'>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </div>
        </nav>
    )
}
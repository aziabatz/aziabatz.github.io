import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header className="navbar">
            <nav>
                <div className="menu-icon" onClick={toggleDrawer}>
                    <FaBars />
                </div>
                <ul className="desktop-menu">
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="aboutme"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                    <div className="close-icon" onClick={toggleDrawer}>
                        <FaTimes />
                    </div>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={toggleDrawer}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={toggleDrawer}
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={toggleDrawer}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={toggleDrawer}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

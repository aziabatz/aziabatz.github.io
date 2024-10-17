import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
    return (
        <header className="navbar">
            <nav>
                <ul>
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
            </nav>
        </header>
    );
}

export default Header;

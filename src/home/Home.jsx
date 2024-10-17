import React from 'react';
import { Link } from 'react-scroll';
import './Home.css'

function Home() {


    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1>Hi! I'm Ahmed</h1>
                <p>I am computer engineer with expertise in fullstack development, mobile apps, machine learning and low-level & OS development</p>
                <p>This is my portfolio where you can see some of my work</p>
                <Link className="home-button"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    See my projects
                </Link>
            </div>
        </div>
    )
}

export default Home;
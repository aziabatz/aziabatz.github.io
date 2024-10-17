import React from 'react';

import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div className='contact-container'>

            <h1>Contact me!</h1>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>

            <div className="social-links">
                <h2>My socials:</h2>
                <a href="https://github.com/aziabatz" target="_blank" rel="noopener noreferrer">GitHub <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/ahmed-ziabat-7334711a1/" target="_blank" rel="noopener noreferrer">LinkedIn <FontAwesomeIcon icon={faLinkedin}/>
                </a>

            </div>

        </div>
    );
}

export default Contact;
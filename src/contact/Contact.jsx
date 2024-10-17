import React, {useState} from 'react';

import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {

    const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/mldeezkn', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      setStatus('Success! Thank you for your message.');
      form.reset();
    } else {
      setStatus('Oops! There was an error.');
    }
  };

    return (
        <div className='contact-container'>

            <h1>Contact me!</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
            {status && <p>{status}</p>}

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
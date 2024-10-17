import React from 'react';
import './AboutMe.css';
import RadarChart from './radar/Radar';

function AboutMe() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        My first encounter with programming happened when I was 13 years old, 
        discovering that I could do mathematical calculations on a Linux terminal. 
        From that moment, I started creating scripts for small operations on math functions 
        I learned in class, as a hobby. However, my first real program was written in Java, 
        where I attempted to automate the calculation of resistor values based on color codes. 
        That experience opened the door to a larger world that continues to fascinate me, 
        and one from which I never stop learning.
      </p>

      <h2>Work Philosophy</h2>
      <p>
        My work philosophy revolves around writing clean code and implementing design patterns 
        to ensure the scalability and maintainability of my solutions. I am a strong believer in 
        team collaboration, Agile methodology, and placing a high emphasis on thorough documentation.
      </p>

      <h2>Soft Skills</h2>
      <RadarChart/>
      {/* <ul>
        <li>Problem-solving</li>
        <li>Communication</li>
        <li>Adaptability</li>
        <li>Teamwork</li>
        <li>Proactiveness</li>
      </ul> */}

      <h2>Interests Outside of Development</h2>
      <p>
        When I’m not coding, I enjoy simracing, playing soccer, and capturing 
        industrial landscapes through photography. These hobbies help me balance creativity 
        and focus in both my professional and personal life.
      </p>

      <h2>Future Mission</h2>
      <p>
        In the mid to long term, I aim to develop a business idea I have in mind and become 
        one of the entrepreneurs contributing to the global startup ecosystem. At the same time, 
        I don’t want to disconnect from the world of research, which I deeply enjoy. 
        My goal is to pursue what I love while leaving my mark on the world.
      </p>
    </div>
  );
}

export default AboutMe;

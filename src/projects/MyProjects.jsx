import React from 'react';
import './MyProjects.css';

import img1b from './assets/1024-mac.png'
import img1 from './assets/img1.png'
import img2 from './assets/adminpro.jpg'
import img5 from './assets/tinyk.png'
import img6 from './assets/snipit.png'
import img3 from './assets/reprint.png'
import img4 from './assets/barcode.png'

// import projectImage2 from './assets/image2.png';
// import projectImage3 from './assets/image3.png';
// import projectImage4 from './assets/image4.png';
// import projectImage5 from './assets/image5.png';
// import projectImage6 from './assets/image6.png';

function MyProjects() {
    const projects = [
        {
            title: 'Barcode App',
            description:
                'Inventory management app that allows barcode scanning to track products in real time. Perfect for small businesses needing efficient stock control.',
            tech: 'Flutter, Dart, Floor',
            image: img4,
        },
        {
            title: 'Muezzin',
            description:
                'A prayer notification app for macOS with geolocation that notifies users of prayer times based on their location.',
            tech: 'Swift, SwiftUI',
            image: img1
        },
        {
            title: 'reprint',
            description: 'An assistant that helps users print double-sided documents using simplex printers.',
            tech: 'Dart, Flutter, Floor',
            image: img3
        },
        {
            title: 'Muezzin-API',
            description:
                'API consumer for the Muezzin app',
            tech: 'Swift, API REST, OpenAPI',
            image: "https://openapistack.co/img/openapi-stack-logo.png" //img1b,
        },
        {
            title: 'Admin Pro front-end',
            description:
                'Dashboard front-end for a fictional hospital backend, designed to manage patient data and handle shifts.',
            tech: 'Angular, Chart.js, Admin Pro Library, Typescript, JavaScript, Node.js, MongoDB',
            image: img2,
        },
        {
            title: 'tinyK',
            description:
                'Minimalist multi-threaded kernel based on a lightweight OS structure, written for my Bachelor thesis.',
            tech: 'C, GNU Assembler',
            image: img5,
        },
        {
            title: 'SnipIt!',
            description:
                'A multiplatform tool written in Qt to organize and save code snippets in multiple languages.',
            tech: 'C++, Qt, JSON',
            image: img6,
        },
    ];

    return (
        <div className='projects-section'>
            <h1 className='section-title'>My Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project">

                        <h2 className="project-title">{project.title}</h2>

                        <div className='project-content'>
                            <img
                                src={project.image}
                                alt={`Project ${index + 1}`}
                                className="project-image"
                            />
                            <div className="project-info">
                                <p className="project-description">{project.description}</p>
                                <p className="project-tech">Tech used: {project.tech}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    );
}

export default MyProjects;

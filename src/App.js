import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './home/Home'

import { Link } from 'react-router-dom';
import Contact from './contact/Contact';
import AboutMe from './aboutme/AboutMe';
import Header from './Header';
import MyProjects from './projects/MyProjects';
import MySkills from './skills/MySkills';


function App() {
  return (
    <div>
      <Header></Header>
      <section id="home">
        <Home></Home>
      </section>
      <section id="aboutme">
        <AboutMe></AboutMe>
      </section>
      <section id="skills">
        <MySkills></MySkills>
      </section>
      <section id="projects">
        <MyProjects></MyProjects>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>





    </div>
  );
}

export default App;

import React from 'react';
import Introdution from './Introduction/Introdution';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ProjectSection from './Projects/Projects';
import ContactSection from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Introdution></Introdution>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <ProjectSection></ProjectSection>
            <ContactSection></ContactSection>
            
        </div>
    );
};

export default Home;
import React from 'react';
import Introdution from './Introduction/Introdution';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <div>
            <Introdution></Introdution>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            
        </div>
    );
};

export default Home;
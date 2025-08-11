import React from 'react';
import Introdution from './Introduction/Introdution';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introdution></Introdution>
            <AboutMe></AboutMe>
            <Skills></Skills>
            
        </div>
    );
};

export default Home;
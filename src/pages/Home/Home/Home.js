import React from 'react';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;
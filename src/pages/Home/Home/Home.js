import React from 'react';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <About></About>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;
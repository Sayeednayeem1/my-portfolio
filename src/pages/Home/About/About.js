import React from 'react';
import 'animate.css';
import ImgAbout from '../../../assets/images/footer.png';

const About = () => {
    return (
        <div className='mt-10'>
            <div className="hero animate__animated animate__backInLeft">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={ImgAbout} className="max-w-sm rounded-lg shadow-2xl" alt='This is an img made by animation' />
                    <div>
                        <h1 className="text-4xl font-bold text-white">Hello, I am <br /> <span className='text-blue-400'>Abu Sayeed</span></h1>
                        <h1 className="text-2xl font-bold text-blue-400">Junior Front-End Web Developer</h1>
                        <p className="py-6 text-white">I am an Honors Graduate. I always craved learning programming. To chase that dream currently i am learning Programming Hero. A web development course. Now that I can call myself a junior web developer. I want to be a professional web developer. I am hardworking. I never stop chasing. If not today it will be tomorrow.</p>
                        <div>
                        <a href="https://www.linkedin.com/in/sayeed-nayeem/" className="btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600 mr-5" >Linkedin</a>
                        <a href="https://www.linkedin.com/in/sayeed-nayeem/" className="btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600 mr-5" >Github</a>
                        <a href="https://drive.google.com/file/d/1KKV1dAsGIhR7HisZgOYCbDbXS9v1-k-V/view?usp=sharing" className="btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600" >Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
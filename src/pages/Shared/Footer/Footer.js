import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer footer-center p-10 text-primary-content">
                <div>
                    <p className="font-bold">
                        Abu Sayeed <br />Junior Front-End Developer
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a className='text-3xl' href="https://www.linkedin.com/in/sayeed-nayeem/"><FaLinkedin></FaLinkedin></a>
                        <a className='text-3xl' href="https://github.com/Sayeednayeem1"><FaGithub></FaGithub></a>
                        <a className='text-3xl' href="https://web.facebook.com/sayed.nayem.188"><FaFacebook></FaFacebook></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
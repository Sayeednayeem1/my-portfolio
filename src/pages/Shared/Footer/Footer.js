import React from 'react';
import footer from '../../../assets/images/footer.png'

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
                        <a href="/">Test</a>
                        <a href="/">Test</a>
                        <a href="/">Test</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
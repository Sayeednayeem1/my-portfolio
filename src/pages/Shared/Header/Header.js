import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const headerRoutes = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contactMe">Contact</Link></li>
    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-gradient-to-r from-purple-600 to-blue-600 dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white font-bold">
                            {headerRoutes}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl text-orange-400">Abu<span className='text-white ml-1'> Sayeed</span></a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-white font-bold">
                        {headerRoutes}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a href='https://drive.google.com/file/d/1KKV1dAsGIhR7HisZgOYCbDbXS9v1-k-V/view?usp=sharing' className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-none">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
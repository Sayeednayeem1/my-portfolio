import React from 'react';

const Skills = () => {
    return (
        <div className='mt-14 animate__animated animate__lightSpeedInRight'>
            <h1 className='text-4xl text-center text-white mb-6'>My creative skills & experiences.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <div className="card  shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">Expertise</h2>
                        <p className='text-white'>HTML, CSS, Bootstrap, Tailwind css, Daisy UI, JavaScript, React js, React Router Dom, firebase.</p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">Comfortable</h2>
                        <p className='text-white'>Node.js, MongoDB, Express.js, CRUD operation.</p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">Familiar</h2>
                        <p className='text-white'>Tanstack query and Material UI.</p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">Tools</h2>
                        <p className='text-white'>GitHub, Netlify, Vercel, Chrome Dev Tool, Figma, VS Code.</p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">Extra Skills</h2>
                        <p className='text-white'>Team Work, Good communication.</p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">Languages</h2>
                        <p className='text-white'>1. Bangla - native 2. English - Comfortable 3. Hindi - Average.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import AmazingJohn from '../../../assets/images/Amazing-John.png';
import DoctorWalid from '../../../assets/images/DoctorWalid.png';
import QuizTime from '../../../assets/images/QuizTime.png';

const Projects = () => {
    return (
        <div className='mt-10 animate__animated animate__backInRight'>
            <h1 className='text-center text-white mb-8 text-4xl'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card shadow-xl">
                    <figure><img src={AmazingJohn} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Amazing John
                        </h2>
                        <p className='text-white'>This is a buy and sale website</p>
                        <div className="card-actions justify-start">
                            <Link className='btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600' to='/amazingJohn'>Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <figure><img src={DoctorWalid} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Dr. Walid
                        </h2>
                        <p className='text-white'>This is a private doctor website.</p>
                        <div className="card-actions justify-start">
                            <Link className='btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600' to='/drWalid'>Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <figure><img src={QuizTime} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Quiz Crackers
                        </h2>
                        <p className='text-white'>This is Quiz Crackers website.</p>
                        <div className="card-actions justify-start">
                            <Link className='btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600' to='/quizCrackers'>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
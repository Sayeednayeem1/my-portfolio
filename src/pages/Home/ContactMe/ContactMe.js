import React from 'react';
import { FaGoogle, FaMale, FaPhone, FaVoicemail } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div>
            <div className='text-center text-white mt-12 mb-10'>
                <h5 className='text-4xl'>Contact Me</h5>
                <h6 className='text-2xl'>Get In Touch</h6>
            </div>
            <div className="hero shadow-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Get In Touch</h1>
                        <p className="py-6">To contact me please use any method bellow. <br /> I'd love to hear from you. And give me your valuable feedback.</p>
                        <h4>Name: Abu Sayeed</h4>
                        <h4>Phone: +8801751589952</h4>
                        <h4>Email: sayeedn850@gmail</h4>
                        <div className='mt-2 '>
                            <a target='_blank' href="https://www.linkedin.com/in/sayeed-nayeem/" className='btn mr-2 btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600'>Linkedin</a>
                            <a target='_blank' href="https://web.facebook.com/sayed.nayem.188" className='btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600'>Facebook</a>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Visit To Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
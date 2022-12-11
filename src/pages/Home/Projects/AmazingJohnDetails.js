import React from 'react';
import Img1 from '../../../assets/images/Amazing-John.png';
import Img2 from '../../../assets/images/Amazing-John2.png';
import Img3 from '../../../assets/images/Amazing-John3.png';

const AmazingJohnDetails = () => {
    return (
        <div className='mt-12'>
            <div className="carousel w-full rounded">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={Img1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={Img2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={Img3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className="text-5xl font-bold text-white text-center mt-10 mb-8">Website Details</h1>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={Img1} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Amazing John</h2>
                        <p className="py-6">
                            1. This is a buy and sale website. In the home page there are some details of product categories. <br />
                            2. If you click on the categories it will take you to the product page. <br />
                            3. There is of course login and sign up route you can sign up or login anytime. <br />
                            4. Also there is one particular admin. Only admin can make some one admin. <br />
                            5. Also a seller can add the product he/she wanna sell. <br />
                            6. There are plenty of options for a buyer to buy theres lots and lots of products. <br />
                        </p>
                        <div className="card-actions justify-start">
                            <a className='btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600 mr-1' href="/">Live Link</a>
                            <a className='btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600 mr-1' href="/">Github Client</a>
                            <a className='btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600' href="/">Github Server</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmazingJohnDetails;
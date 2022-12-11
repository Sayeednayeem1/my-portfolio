import React from 'react';
import Img from '../../../assets/images/footer.png';

const Blog = () => {
    return (
        <div className='mt-16 mb-16'>
            <div className="hero shadow-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Blog!</h1>
                        <p className="py-6 text-white">Blog is Coming Home! Blog is coming soon!</p>
                        <button className="btn btn-primary">Kindly Wait!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
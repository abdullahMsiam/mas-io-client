import React from 'react';
import img from '../../assets/error-404.png';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className='max-w-7xl mx-auto max-h-screen p-2 mb-10'>
            <div className=' flex flex-col items-center justify-center mt-10'>
                <img className='w-64' src={img} alt="Page Not Found" />
                <h2 className='text-3xl font-bold text-center mt-10'>404 - Page Not Found</h2>
                <p className='text-center text-gray-600 mt-2'>The page you are looking for does not exist or has been removed.</p>
               <Link to={'/'} className='btn bg-linear-to-r from-blue-600 to-blue-900 mt-6 text-white'>Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
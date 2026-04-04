import React from 'react';
import notFoundImg from '../../assets/notfound.png'; 
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className=' flex flex-col items-center justify-center gap mt-10'>
            <img className='w-64 rounded-2xl mt-10' src={notFoundImg} alt="App not found" />
            <h2 className='text-2xl font-bold text-center mt-4'>OPPS! App Not Found</h2>
            <p className='text-center text-gray-600'>The app you are looking for does not exist or has been removed.</p>
            <Link to={'/'} className='btn bg-linear-to-r from-blue-600 to-blue-900 mt-6 text-white'>Back to Home</Link>
        </div>
    );
};

export default AppNotFound;
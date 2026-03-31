import React from 'react';

const Banner = () => {
    return (
        <div className='container h-screen bg-base-200'>
            <section>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-5xl font-bold text-center mt-20'>
                        <span>We Build</span> <br />
                        <span className='text-blue-900'>Productive</span> Apps
                    </h1>
                </div>
            </section>
        </div>
    );
};

export default Banner;
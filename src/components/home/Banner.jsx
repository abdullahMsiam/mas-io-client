import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='container bg-base-200 mx-auto px-4 py-2'>
            <section>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-5xl font-bold text-center mt-20'>
                        <span>We Build</span> <br />
                        <span className='text-blue-900'>Productive</span> Apps
                    </h1>
                    <p className='text-lg text-center mt-4 text-gray-600'>
                        We create innovative solutions that drive business growth and user satisfaction. Our team of experts is dedicated to delivering <br/> high-quality products that meet your unique needs and exceed your expectations.
                    </p>
                    <div className='flex gap-4 mt-6'>
                        <button className='btn btn-primary py-3'>
                            <IoLogoGooglePlaystore />
                            <span className='ml-2'>Google Play</span>
                        </button>
                        <button className='btn btn-secondary py-3'>
                            <FaAppStoreIos />
                            <span className='ml-2'>App Store</span>
                        </button>
                    </div>

                    <div className='mt-10 '>
                        <img className='image-full' src="/src/assets/hero (1).png" alt="" />
                    </div>

                    <div className='bg-linear-to-r from-blue-600 to-blue-900 p-10 w-full text-white'>
                        <h1 className='text-4xl text-center font-bold'>Trusted by Millions, Built for You</h1>
                        <div className='flex items-center justify-around gap-10 mt-6 '>
                            <div>
                                <p className='text-gray-200'>Total Download</p>
                                <p className='text-5xl font-bold'>30.1M</p>
                                <p className='text-gray-600'>15% Increase</p>
                            </div>
                            <div>
                                <p className='text-gray-200'>Total Review</p>
                                <p className='text-5xl font-bold'>4.8M</p>
                                <p className='text-gray-600'>10% Increase</p>
                            </div>
                            <div>
                                <p className='text-gray-200'>Active Apps</p>
                                <p className='text-5xl font-bold '>120</p>
                                <p className='text-gray-600'>20% Increase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
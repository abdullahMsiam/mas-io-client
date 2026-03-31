import React from 'react';
import AppCard from '../utility/AppCard';

const TrendingApps = ({apps}) => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-center text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10 justify-items-center mx-1'>
                    {
                        apps.slice(0,12).map(app => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }

                </div>
                <div className='text-center'>
                    <button className='btn bg-linear-to-r from-blue-600 to-blue-900 mt-6 text-white'>View All</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;
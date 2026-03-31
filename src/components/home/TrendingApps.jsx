import React from 'react';
import AppCard from '../utility/AppCard';

const TrendingApps = ({apps}) => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-center text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center'>
                    {
                        apps.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default TrendingApps;
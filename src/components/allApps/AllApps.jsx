import React, { use, useEffect, useState } from 'react';
import AppCard from '../utility/AppCard';
import Loading from '../utility/Loading';
import AppNotFound from '../utility/AppNotFound';
const fetchApps = async () => {
    const response = await fetch('/apps.json');
    const data = await response.json();
    return data;
}
const appPromise = fetchApps();

const AllApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    const appPromiseData = use(appPromise);
    useEffect(() => {
        const callFetchApps = async () => {
            setApps(appPromiseData);
            setLoading(false);
        }

        callFetchApps();

    }, [appPromiseData]);

    console.log(apps);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredApps = appPromiseData.filter(app => app.title.toLowerCase().includes(searchTerm));
        setApps(filteredApps);
    };

    return (
        loading ? <div> <Loading /> </div> : 
        <div className='max-w-5xl mx-auto my-10 p-2'>
            <h1 className='text-4xl font-bold text-center'>Our All Application</h1>
            <p className='text-center text-gray-600'>Explore All Apps on the Market developed by us</p>

            <div>
                <div className='flex justify-between items-center'>
                    <p className='text-lg font-bold'>({apps?.length}) Apps Available</p>
                    <label className="input input-sm w-40">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" onChange={handleSearch} />
                    </label>
                </div>
                <div>
                    {
                        apps.length == 0 ?
                            <div>
                                <AppNotFound/>
                            </div> :
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10 justify-items-center mx-1'>
                                {
                                    apps.map(app => (
                                        <AppCard key={app.id} app={app} />
                                    ))
                                }
                            </div>
                    }

                </div>

            </div>

        </div>
    );
};

export default AllApps;
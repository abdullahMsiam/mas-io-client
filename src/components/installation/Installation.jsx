import React, { useEffect, useState } from 'react';
import { getStoredAppId, removeFromStoredAppId } from '../utility/storeManage';
import { FaDownload, FaSort, FaStar } from 'react-icons/fa';
import { formatNumber } from '../utility/formateNums';

const appsPromise = fetch('/apps.json').then(res => res.json());

const Installation = () => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        appsPromise.then(data => {
            const filteredApps = data.filter(app => getStoredAppId().includes(app.id));
            setApps(filteredApps);
        });

    }, []);

    console.log(apps);

    const appIds = getStoredAppId();

    // short by app.size 
    const handleShortBySize = () => {
        const sortedApps = [...apps].sort((a, b) => a.size - b.size);
        setApps(sortedApps);
    };

    return (
        <div className='max-w-7xl p-2 mx-auto mb-10 mt-8'>
            <h1 className='text-4xl font-bold text-center'>Your Installation List</h1>
            <p className='text-center text-gray-600'>Here are the apps you have added for installation.</p>

            <section>
                <div className='flex justify-between items-center max-w-5xl mx-auto mt-5'>
                    <h2 className='font-bold text-xl'>{appIds?.length} Apps Found</h2>
                    {/* short apps */}
                    <button onClick={handleShortBySize} className='flex items-center gap-2 justify-around btn btn-outline rounded-none'>Short By Size <FaSort /></button>
                </div>

                <div className='flex flex-col gap-1 mt-5 max-w-5xl mx-auto'>
                    {
                        apps.map(app => (
                            <div key={app.id} className='flex items-center gap-4 p-1 border bg-base-300'>
                                <img className='w-10' src={app.image} alt={app.title} />
                                <div className=''>
                                    <h3 className='font-bold'>{app?.title}</h3>
                                    <div className='flex justify-between items-center w-36 text-sm'>
                                        <p className='flex items-center gap-0.5 text-blue-600 font-semibold'>{formatNumber(app?.downloads)} <FaDownload /></p>
                                        <p className='flex items-center gap-0.5 text-yellow-600 font-semibold'>{app?.ratingAvg} <FaStar /></p>
                                        <p className='text-gray-600 font-semibold'>{app?.size} MB</p>
                                    </div>
                                </div>
                                <button onClick={() => removeFromStoredAppId(app?.id)} className='btn btn-sm border-none btn-error text-white ml-auto'>Uninstall</button>
                            </div>
                        ))

                    }
                </div>
            </section>
        </div>
    );
};

export default Installation;
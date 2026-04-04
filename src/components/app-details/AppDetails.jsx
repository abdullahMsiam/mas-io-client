import React from 'react';
import { FaComment, FaDownload, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { formatNumber } from '../utility/formateNums';

const AppDetails = () => {
    const app = useLoaderData();
    console.log(app);


    const totalReviews = app.ratings.reduce((acc, curr) => acc + curr.count, 0);

    const totalWeight = app.ratings.reduce((acc, curr, index) => {
        const starValue = index + 1;
        return acc + (starValue * curr.count);
    }, 0);
    const averageRating = totalReviews > 0 ? (totalWeight / totalReviews).toFixed(1) : 0;

    return (
        <div className='max-w-7xl mx-auto p-2'>
            <div className='mt-10 flex flex-col md:flex-row justify-between items-center gap-10'>
                <img className='w-fit' src={app.image} alt={app.title} />
                <div className='flex-1 space-y-4'>
                    <h1 className='text-3xl font-bold'>{app.title}</h1>
                    <p>Developer by <span className='text-blue-500 font-bold'>{app?.companyName}</span></p>
                    <hr className='border-zinc-500 border' />
                    <div className='flex flex-row  items-center gap-10'>
                        <div>
                            <p className='text-3xl text-blue-500'> <FaDownload /> </p>
                            <p>Downloads</p>
                            <p className='text-4xl font-bold'>{formatNumber(app?.downloads)}</p>
                        </div>
                        <div>
                            <p className='text-3xl text-yellow-600'> <FaStar /> </p>
                            <p>Rating</p>
                            <p className='text-4xl font-bold'>{averageRating}</p>
                        </div>
                        <div>
                            <p className='text-3xl text-green-500'> <FaComment /> </p>
                            <p>Reviews</p>
                            <p className='text-4xl font-bold'>{formatNumber(totalReviews)}</p>
                        </div> 
                    </div>
                    <button className='btn btn-success py-3'>
                        <FaDownload />
                        <span className='ml-2'> Install Now ({app?.size})MB </span>
                    </button>
                </div>
            </div>

            <hr className='border-zinc-500 border mt-6' />
        </div>
    );
};

export default AppDetails;
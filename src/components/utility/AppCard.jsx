import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {

    const totalReviews = app.ratings.reduce((acc, curr) => acc + curr.count, 0);

    const totalWeight = app.ratings.reduce((acc, curr, index) => {
    const starValue = index + 1; 
    return acc + (starValue * curr.count);
  }, 0);
  const averageRating = totalReviews > 0 ? (totalWeight / totalReviews).toFixed(1) : 0;
    return (
        <div className='bg-white rounded-sm shadow-md p-2 max-w-sm'>
            <img className='w-fit rounded-xl' src={app.image} alt={app.name} />
            <h3>{app.title}</h3>
            <div className='flex justify-between items-center mt-2'>
                <p className='btn btn-sm flex justify-center items-center gap-1 text-green-900 bg-green-800/30 px-1 rounded-sm font-semibold '><FaDownload /> {app?.downloads}</p>
                <p className='btn btn-sm flex justify-center items-center gap-1 text-yellow-700 bg-yellow-500/30 px-1 rounded-sm font-semibold'><FaStar /> {averageRating}</p>
            </div>
        </div>
    );
};

export default AppCard;
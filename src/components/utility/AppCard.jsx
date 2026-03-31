import React from 'react';

const AppCard = ({ app }) => {

    const totalReviews = app.ratings.reduce((acc, curr) => acc + curr.count, 0);

    const totalWeight = app.ratings.reduce((acc, curr, index) => {
    const starValue = index + 1; // 1, 2, 3, 4, 5
    return acc + (starValue * curr.count);
  }, 0);
  const averageRating = totalReviews > 0 ? (totalWeight / totalReviews).toFixed(1) : 0;
    return (
        <div className='bg-white'>
            <img src={app.image} alt={app.name} />
            <h3>{app.title}</h3>
            <div>
                <p>{app?.downloads}</p>
                <p>{averageRating}</p>
            </div>
        </div>
    );
};

export default AppCard;
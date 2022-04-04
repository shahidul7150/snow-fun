import React from 'react';
import useReview from '../../hooks/useReview';
import CustomersAllReviews from '../CustomerAllReviews/CustomersAllReviews';


const Review = () => {
    const [reviews,setReviews]=useReview()
    return (
        <div>
            <h2 className='text-3xl mb-10 mt-10 font-semibold'>Our Valuable Customers:({reviews.length}) </h2>

            <div className='reviews-container'>
            {
                reviews.map(review=><CustomersAllReviews key={review.id} review={review}></CustomersAllReviews>)
            }

        </div>
        </div>
    );
};

export default Review;
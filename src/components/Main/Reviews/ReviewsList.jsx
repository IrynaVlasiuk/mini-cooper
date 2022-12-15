import React from 'react';
import style from './Reviews.module.css';
import Review from "./Review/Review";

const ReviewsList = (props) =>  {
    const reviewsElement = props.reviews.map(review =>
        <Review key={review.id} userName={review.userName} rate={review.rate} message={review.message}/>
    );

    return (
        <div className={style.reviewsList}>
            {reviewsElement}
        </div>
    );
}

export default ReviewsList;

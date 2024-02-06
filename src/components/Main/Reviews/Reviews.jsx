import React from 'react';
import style from './Reviews.module.css';
import ReviewAdd from "./ReviewAdd";
import ReviewsList from "./ReviewsList";
import Title from "../../Common/Title/Title";
import store from "../../../data/store";

const Reviews = (props) =>  {
    return (
        <section className={style.reviews}>
            <Title title={store.reviews.title}/>
            <ReviewAdd addReview={props.addReview} update={props.updateNewReview} newReviewText={props.newReviewText}/>
            <ReviewsList reviews={props.reviews}/>
        </section>
    );
}

export default Reviews;

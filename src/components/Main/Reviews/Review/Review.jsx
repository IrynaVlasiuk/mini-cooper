import React from 'react';
import style from './Review.module.css';
import {FaStar} from "react-icons/fa";
import {Container, Rating} from "./Rating/RatingStyles";

const Review = (props) =>  {
    let arr = [{}, {}, {}, {}, {}];

    return (
        <div className={style.review}>
            <div className={style.reviewInfo}>
                <div>{props.userName}</div>
                <div>{props.date}</div>
            </div>
            <Container>
                {arr.map((item, index) => {
                    const givenRating = index + 1;
                    return (
                        <label>
                            <Rating>
                                <FaStar
                                    color={
                                        givenRating - 1 < props.rate || givenRating === props.rate
                                            ? "000"
                                            : "rgb(192,192,192)"
                                    }
                                    fontSize="20"
                                />
                            </Rating>
                        </label>
                    );
                })}
            </Container>

            <div className={style.reviewMessage}>{props.message}</div>
        </div>
    );
}

export default Review;

import React from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";

const Rate = (props) => {
    let arr = [{}, {}, {}, {}, {}];

    return (
        <Container>
            {arr.map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            name="rate"
                            key={index}
                            type="radio"
                            value={givenRating}
                            onClick={(e) => {
                                props.onChange(e);
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating - 1 < props.rate || givenRating === props.rate
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
    );
};

export default Rate;
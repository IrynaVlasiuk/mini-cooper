import React from 'react';
import apiRequest from "../../../api/api";
import Rate from "./Review/Rating/Rating";
import style from "./Reviews.module.css";

export default class ReviewAdd extends React.Component {
    state = {
        rate: 0,
        message: ''
    }

    handleChange = event => {
        const review = {
            ...this.state,
            [event.target.name]: event.target.value,
        };

        this.props.update(review);
        this.setState(review);
    }

    handleSubmit = event => {
        event.preventDefault();

        const review = {
            rate: this.state.rate,
            message: this.state.message
        };

       apiRequest.addReview(review);

      this.props.addReview();

        this.setState({
            rate: 0,
            message: ''
        });
    }

    render() {
        return (
            <div className={style.reviewAdd}>
                <form onSubmit={this.handleSubmit} className={style.formAddNewReview}>
                    <Rate onChange={this.handleChange} rate={this.state.rate}/>
                    <textarea onChange={this.handleChange} value={this.state.message} className={style.reviewTextArea} name="message"/>
                    <button type="submit">Залишити відгук</button>
                </form>
            </div>
        )
    }
}
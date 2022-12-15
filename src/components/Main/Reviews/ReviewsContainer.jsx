import React from "react";
import {connect} from "react-redux";
import Reviews from "./Reviews";
import {addReview, updateNewReview, setReviews} from "../../../redux/reviewsReducer";
import apiRequest from "../../../api/api";

class ReviewsContainer extends React.Component {
    componentDidMount() {
        apiRequest.getReviews().then(
            response => this.props.setReviews(response)
        );
    }

    render() {
        return <>
            <Reviews reviews={this.props.reviews} updateNewReview={this.props.updateNewReview} addReview={this.props.addReview}/>
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        reviews: state.reviewsReducer.reviews,
        review: state.reviewsReducer.review,
    }
}

export default connect(mapStateToProps, {addReview, updateNewReview, setReviews })(ReviewsContainer);
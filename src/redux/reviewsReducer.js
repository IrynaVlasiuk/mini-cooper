const ADD_REVIEW = 'ADD_REVIEW';
const UPDATE_NEW_REVIEW = 'UPDATE_NEW_REVIEW';
const SET_REVIEWS = 'SET_REVIEWS';

let initialState = {
    reviews: [],
    review:{}
}

const reviewsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_REVIEW:
            let review = {
                id: state.reviews.length + 1,
                userName: 'first last name',
                date: new Date(),
                message: state.review.message,
                rate: state.review.rate

            };
            return  {
                ...state,
                reviews: [...state.reviews, review],
                review:{}
            };

        case UPDATE_NEW_REVIEW:
            return {
                ...state,
                review: action.review
            };
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews
            }
        default:
            return state;
    }
}

export const addReview = () => {
    return {
        type: ADD_REVIEW
    }
}

export const updateNewReview = (review) => {
    return {
        type: UPDATE_NEW_REVIEW,
        review: review
    }
}

export const setReviews = (reviews) => {
    return {
        type: SET_REVIEWS,
        reviews: reviews
    }
}

export default reviewsReducer;

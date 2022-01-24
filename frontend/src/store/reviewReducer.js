import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'reviews/getReviews'

const getAllReviews = (review) => {
    return {
        type: GET_REVIEWS,
        review
    }
}

export const getReviews = () => async(dispatch) => {
    const response = await csrfFetch('/api/reviews')
    const review = await response.json()
    dispatch(getAllReviews(review))
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type) {
        case GET_REVIEWS:
            newState = {...state}
            action.review.forEach(review => newState[review.id] = review)
            return newState
        default:
            return state
    }
}

export default reviewReducer;
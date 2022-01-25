import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'reviews/getReviews'
const ADD_REVIEW = 'reviews/addReview'
const EDIT_REVIEW = 'reviews/editReview'

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

const addAReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

export const addReview = (review) => async(dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })

    if(response.ok) {
        const newReview = await response.json()
        dispatch(addAReview(newReview))
    }
}

const editAReview = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
}

export const editReview = (review, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    }) 
    if(response.ok) {
        const review = await response.json()
        dispatch(editAReview(review))
    }
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type) {
        case GET_REVIEWS:
            newState = {...state}
            action.review.forEach(review => newState[review.id] = review)
            return newState
        case ADD_REVIEW:
            newState = {...state}
            newState[action.review.id] = action.review
            return newState
        case EDIT_REVIEW:
            newState = {...state}
            newState[action.review.review.id] = action.review.review
            return newState
        default:
            return state
    }
}

export default reviewReducer;
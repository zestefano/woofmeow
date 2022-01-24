import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { getReviews } from "../../store/reviewReducer";

const Reviews = ({userId, sitterId}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const allReviews = useSelector(state => Object.values(state.reviews))
    const reviews = allReviews.filter(review => review.sitterId === +sitterId)

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])


    return (
        <div>
            {reviews?.map(({review, Sitter, User, id, rating}) => (
                <div>
                    {User.username}
                    {review}
                </div>
            ))}
        </div>
    )
}

export default Reviews;
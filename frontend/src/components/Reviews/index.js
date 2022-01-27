import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AddReview from "./addReview";
import AddReviewButton from "./addReviewButton";
import EditReviewButton from "./editReviewButton";
import DeleteReviewButton from "./deleteReview";


import { getReviews } from "../../store/reviewReducer";
import AddReview from "./addReview";

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
            {sessionUser && (
                <div>
                    <AddReviewButton userId={userId} sitterId={sitterId}/>
                </div>
            )}
            <h3>{reviews.length} Reviews</h3>
         
            {reviews?.map(({review, Sitter, User, id, rating}) => (
                <div>
                    {User.username}
                    {review}
                    {sessionUser?.id === User?.id && (
                        <EditReviewButton id={id} reviewValue={review} ratingValue={rating} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Reviews;
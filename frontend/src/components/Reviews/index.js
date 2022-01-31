import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AddReview from "./addReview";
import AddReviewButton from "./addReviewButton";
import EditReviewButton from "./editReviewButton";
import DeleteReviewButton from "./deleteReview";
import '../../components/Reviews/reviews.css'


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
        <div className="userReview">
            <h3>{reviews.length} Reviews</h3>
            {sessionUser && (
                <div>
                    <AddReviewButton userId={userId} sitterId={sitterId}/>
                </div>
            )}
            
         
            {reviews?.map(({review, Sitter, User, id, rating}) => (
                <div className="rev">
                    <p className="rating">{rating === 5? "★★★★★" : rating === 4? "★★★★" : rating === 3? "★★★" : rating === 2? "★★" : "★"}</p>
                    {User.username} : {review}
                    
                    <div className="edit">
                    {sessionUser?.id === User?.id && (
                        <EditReviewButton id={id} reviewValue={review} ratingValue={rating} />
                    )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Reviews;
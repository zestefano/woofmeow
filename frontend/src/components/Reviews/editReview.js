import { useDispatch } from "react-redux";
import { useState } from "react";
import { editReview } from "../../store/reviewReducer";
import DeleteReviewButton from "./deleteReview";
import '../../components/Reviews/editReview.css'

const EditReview = ({id, showModal, reviewValue, ratingValue}) => {
    const dispatch = useDispatch()

    const [review, setReview] = useState(reviewValue)
    const [rating, setRating] = useState(ratingValue)

    const onSubmit = async(e) => {
        e.preventDefault()

        const newReview = {
            id,
            review,
            rating
        }
        dispatch(editReview(newReview, id))
        showModal(false)
    }

    return (
        <div>
            <form className="editReview" onSubmit={onSubmit}>
                <label>
                    Edit Review
                </label>
                <textarea
                onChange={e => setReview(e.target.value)}
                value={review}
                />
                <label>Rating:</label>
                <select
                value={rating}
                onChange={e => setRating(e.target.value)}
                >
                    <option value='1'>★</option>
                    <option value='2'>★★</option>
                    <option value='3'>★★★</option>
                    <option value='4'>★★★★</option>
                    <option value='5'>★★★★★</option>
                </select>
                <button disabled={review ? false : true}>Submit</button>
                <DeleteReviewButton id={id} showModal={showModal}/>
            </form>
            

        </div>
    )
}

export default EditReview;
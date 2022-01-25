import { useDispatch } from "react-redux";
import { useState } from "react";
import { editReview } from "../../store/reviewReducer";

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
            <form onSubmit={onSubmit}>
                <h2>
                    Add Review
                </h2>
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
                <button>Submit</button>
            </form>

        </div>
    )
}

export default EditReview;
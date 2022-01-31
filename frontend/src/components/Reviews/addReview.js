import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addReview } from "../../store/reviewReducer";
import '../../components/Reviews/addReview.css'

const AddReview = ({sitterId, showModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)

    const [review, setReview] = useState('')
    const [rating, setRating] = useState('5')
    const [errors, setErrors] = useState([])

    const onSubmit = async(e) => {
        setErrors([])
        e.preventDefault()

        const newReview = {
            review,
            rating,
            userId,
            sitterId
        }
        let errs;
        await dispatch(addReview(newReview)).catch(async(res) => {
            const reviewData = await res.json()
            if(reviewData && reviewData.errors) setErrors(reviewData.errors)
        })
        if(!errs) {
            setReview('')
            setRating('')
            showModal(false)
        }
    }


        return (
            <div>
                
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div>
                    <form className="addReview" onSubmit={onSubmit}>
                        <label>
                            Add Review
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
                        </form>

                    </div>

                
            </div>
        )
    
}

export default AddReview;
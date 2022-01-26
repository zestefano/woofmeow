import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviewReducer";
// import DeleteSitterButton from "../DeleteSitterButton";

const DeleteReviewButton = ({id, showModal}) => {
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(deleteReview(id))
        showModal(false)
    }

    return (
        <div>
            <button
            onClick={() => onSubmit(id)}
            id={id}
            >
                delete
            </button>
        </div>
    )
}

export default DeleteReviewButton;
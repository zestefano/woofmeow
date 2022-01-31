import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditReview from "./editReview";

const EditReviewButton = ({id, reviewValue, ratingValue}) => {
    const [modal, setModal] = useState(false)
    return (
        <div>
            <button
            onClick={() => setModal(true)}
            >
                Edit
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditReview id={id} showModal={setModal} reviewValue={reviewValue} ratingValue={ratingValue} />
                </Modal>
            )}
        </div>
    )
}

export default EditReviewButton;
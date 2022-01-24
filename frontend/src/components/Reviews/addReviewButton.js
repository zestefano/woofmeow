import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddReview from "./addReview";

const AddReviewButton = ({userId, sitterId}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button
            onClick={() => setModal(true)}
            >
                Add Review
            </button>
            {modal && (
                <Modal
                onClose={() => setModal(false)}
                >
                  <AddReview userId={userId} sitterId={sitterId} showModal={setModal}/>
                </Modal>
            )}
        </div>
    )
}


export default AddReviewButton;
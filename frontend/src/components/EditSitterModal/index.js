import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSitterButton from "./editSitter";


const EditSitterModal = ({id, editDog, editCat, editExotic, editAbout, editZipcode, editPrice, editUrl}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>
                Edit
            </button>
        
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditSitterButton id={id} showModal={setModal} editDog={editDog} editCat={editCat} editExotic={editExotic} editAbout={editAbout} editZipcode={editZipcode} editPrice={editPrice} editUrl={editUrl}/>
                </Modal>
            )}
        </div>
    )
}

export default EditSitterModal;
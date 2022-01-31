import { useState } from "react";
import { Modal } from "../../context/Modal";
import BecomeSitter from "./addSitter";

const BecomeSitterModal = () => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button className="become" onClick={() => setModal(true)}>
                Become a sitter
            </button>
            {modal && (
                <div>
                    <Modal onClose={() => setModal(false)}>
                        <BecomeSitter showModal={setModal}/>
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default BecomeSitterModal;
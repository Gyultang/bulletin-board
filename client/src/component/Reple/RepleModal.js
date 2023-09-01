import React from "react";
import { ModalDiv } from "../../Style/ModalCSS";

const RepleModal = ({ isOpen, closeModal }) => {
    return (
        <div style={{ display: isOpen ? "block" : "none" }}>
            <ModalDiv>
                <h1>댓글창</h1>
                <button onClick={closeModal}>X</button>
            </ModalDiv>
        </div>
    );
};

export default RepleModal;

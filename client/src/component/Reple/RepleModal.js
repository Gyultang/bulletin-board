import React from "react";

const RepleModal = ({ isOpen, closeModal }) => {
    return (
        <div style={{ display: isOpen ? "block" : "none" }}>
            <h1>댓글창</h1>
            <button onClick={closeModal}>X</button>
        </div>
    );
};

export default RepleModal;

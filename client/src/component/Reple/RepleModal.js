import React, { useState } from "react";
import { ModalDiv, CloseBtn } from "../../Style/ModalCSS";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import RepleArea from "./RepleArea";
import { useParams } from "react-router-dom";

const RepleModal = ({ isOpen, closeModal, postId }) => {
    let params = useParams();
    const [PostInfo, setPostInfo] = useState({});
    return (
        <div style={{ display: isOpen ? "block" : "none" }}>
            <ModalDiv>
                <div style={{ display: "flex", height: "2rem", textAlign: "center", justifyContent: "space-between" }}>
                    <h1 style={{ fontSize: "25px" }}>comments</h1>
                    <CloseBtn onClick={closeModal}>
                        <FontAwesomeIcon icon={faX} />
                    </CloseBtn>
                </div>
                <div>
                    <RepleArea postId={PostInfo._id} />
                </div>
            </ModalDiv>
        </div>
    );
};

export default RepleModal;

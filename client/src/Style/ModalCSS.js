import styled from "@emotion/styled";

const ModalDiv = styled.div`
    padding: 5px 10px;
    position: fixed;
    top: 160px;
    left: 43.5rem;
    width: 40vw;
    height: 70vh;
    // height: auto;
    border: 3px solid black;
    background-color: white;
`;

const CloseBtn = styled.button`
    border: none;
    background-color: white;
`;

export { ModalDiv, CloseBtn };

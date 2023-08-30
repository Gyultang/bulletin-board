import styled from "@emotion/styled";

const PostDiv = styled.div`
    // border: 10px solid red;
    align-items: center;
    width: 973px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    // max-width: 756px;
    margin: 0 auto;
    @media (max-width: 1000px) {
        width: 90%;
    }
`;

const SpinnerDiv = styled.div`
    width: 973px;
    height: calc(80vh - 2rem);
    display: flex;
    font-size: 20px;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

const Post = styled.div`
    width: 90%;
    height: 100%;
    min-width: 120px;
    margin: 2vh 0;
    padding: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    a {
        color: black;
        text-decoration: none;
    }
    .time {
        text-align: right;
        color: #ccc;
    }
`;

const BtnDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin: 5px 0;
    button {
        border-radius: 15px;
        padding: 5px 10px;
        font-weight: bold;
        &.edit {
            background-color: #252129;
            color: white;
            border: 1px solid #252129;

            &:hover {
                background-color: white;
                color: #252129;
                border: 1px solid #252129;
            }
        }
        &.delete {
            margin-left: 10px;
            background-color: red;
            color: white;
            border: 1px solid red;
            &:hover {
                background-color: white;
                color: black;
                border: 1px solid black;
            }
        }
    }
`;

export { PostDiv, SpinnerDiv, Post, BtnDiv };

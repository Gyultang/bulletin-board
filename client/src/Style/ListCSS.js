import styled from "@emotion/styled";

const ListDiv = styled.div`
    // padding: 1rem 0;
    // max-width: 756px;
    width: 100%;
    margin: 0 auto;
    // height: 100%;
    border: 1px solid black;
    &:not(:first-child) {
        border: none;
    }
    @media (max-width: 756px) {
        width: 90%;
    }
`;

const ListItem = styled.div`
    width: 100%;
    height: 100px;
    min-width: 120px;
    padding: 20px;

    &:not(:last-child) {
        border-bottom: 1px solid black;
    }
    // box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    .title {
        font-weight: bold;
    }
    .time {
        text-align: right;
        color: #ccc;
    }
    a {
        color: black;
        text-decoration: none;
    }
`;

const PaginationBox = styled.div`
    width: %;
    height: 50px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    padding: 5px 0;
`;

export { ListDiv, ListItem, PaginationBox };

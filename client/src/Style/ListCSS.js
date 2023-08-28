import styled from "@emotion/styled";

const ListDiv = styled.div`
    padding: 1rem 0;
    max-width: 756px;
    margin: 0 auto;
    height: 50rem;
    @media (max-width: 756px) {
        width: 90%;
    }
`;

const ListItem = styled.div`
    width: 100%;
    height: auto;
    min-width: 120px;
    // margin: 5vh 0;
    padding: 20px;
    border: 1px solid black;
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

export { ListDiv, ListItem };

import React from "react";
import RepleList from "./RepleList";
import RepleUpload from "./RepleUpload";
import { useSelector } from "react-redux";
import { RepleAreaDiv } from "../../Style/RepleCSS";

const RepleArea = (props) => {
    const user = useSelector((state) => state.user);
    return (
        <RepleAreaDiv>
            <RepleList postId={props.postId} />
            {user.accessToken && <RepleUpload postId={props.postId} />}
        </RepleAreaDiv>
    );
};

export default RepleArea;

import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SpinnerDiv } from "../../Style/DetailCSS";
import RepleArea from "../Reple/RepleArea";

const PostArea = () => {
    let params = useParams();
    const [PostInfo, setPostInfo] = useState({});
    const [Flag, setFlag] = useState(false);
    useEffect(() => {
        let body = {
            postNum: params.postNum,
        };
        axios
            .post("/api/post/detail", body)
            .then((res) => {
                if (res.data.success) {
                    setPostInfo(res.data.post);
                    setFlag(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            {Flag ? (
                <>
                    <Detail PostInfo={PostInfo} />
                    <RepleArea postId={PostInfo._id} />
                </>
            ) : (
                <SpinnerDiv>
                    <Spinner animation="border" variant="secondary" />
                </SpinnerDiv>
            )}
        </div>
    );
};

export default PostArea;

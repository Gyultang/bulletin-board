import React, { useEffect, useState } from "react";
import axios from "axios";
import RepleContent from "./RepleContent";
import { RepleContentDiv, RepleListDiv } from "../../Style/RepleCSS";

const RepleList = (props) => {
    const [repleList, setRepleList] = useState([]);
    useEffect(() => {
        let body = {
            postId: props.postId,
        };
        axios.post("/api/reple/getReple", body).then((res) => {
            if (res.data.success) {
                setRepleList([...res.data.repleList]);
            }
        });
    }, []);
    console.log("리플", repleList);
    return (
        <RepleListDiv>
            {repleList.length > 0 ? (
                repleList.map((reple, idx) => {
                    return (
                        <RepleContent reple={reple} key={idx}>
                            {reple.reple}
                        </RepleContent>
                    );
                })
            ) : (
                <p>No registered comments</p>
            )}
        </RepleListDiv>
    );
};

export default RepleList;

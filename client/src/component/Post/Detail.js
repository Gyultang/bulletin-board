import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PostDiv, BtnDiv, Post } from "../../Style/DetailCSS";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import RepleModal from "../Reple/RepleModal";

const Detail = (props) => {
    let params = useParams();
    let navigate = useNavigate();

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const ModalComment = () => {
        return (
            <div className="comment">
                <button onClick={openModal}>
                    <FontAwesomeIcon icon={faComment} flip="horizontal" />
                </button>
            </div>
        );
    };

    const user = useSelector((state) => state.user);
    console.log("디테일", props);
    // 삭제 기능
    const DeleteHandler = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                postNum: params.postNum,
            };
            axios
                .post("/api/post/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("게시글이 삭제되었습니다.");
                        navigate("/");
                    }
                })
                .catch((err) => {
                    alert("게시글 삭제에 실패하였습니다.");
                });
        }
    };
    const SetTime = (a, b) => {
        if (a !== b) {
            return "수정일: " + moment(b).format("YYYY-MM-D hh:mm");
        }
    };
    return (
        <PostDiv>
            <Post>
                <h1>{props.PostInfo.title}</h1>
                <div style={{ display: "flex" }}>
                    <h4 style={{ fontSize: "14px", marginRight: 10 }}>{props.PostInfo.author.displayName}</h4>
                    <p style={{ fontSize: "10px", marginRight: 8 }}>{moment(props.PostInfo.createdAt).format("YYYY-MM-D hh:mm")}</p>
                    <p style={{ fontSize: "10px" }}>{SetTime(props.PostInfo.createdAt, props.PostInfo.updatedAt)}</p>
                </div>

                {props.PostInfo.image ? <img style={{ width: "100%", minHeight: "400px", height: "400px", margin: "10px 0" }} src={`http://localhost:5000/${props.PostInfo.image} `} /> : null}
                <p>{props.PostInfo.content}</p>
            </Post>
            {user.uid === props.PostInfo.author.uid ? (
                <BtnDiv>
                    <ModalComment />
                    <Link to={`/edit/${props.PostInfo.postNum}`}>
                        <button className="edit" style={{ marginRight: 10 }}>
                            수정
                        </button>
                    </Link>
                    <div>
                        <button className="edit" onClick={(e) => DeleteHandler()}>
                            삭제
                        </button>
                    </div>
                </BtnDiv>
            ) : (
                <BtnDiv>
                    <ModalComment />
                    <Link to="/">
                        <button className="edit">목록</button>
                    </Link>
                </BtnDiv>
            )}
            <RepleModal postId={props.PostInfo._id} isOpen={isModalOpen} closeModal={closeModal} />
        </PostDiv>
        // https://zindex.tistory.com/219
    );
};

export default Detail;

import React, { useState, useRef, useEffect } from "react";
import { RepleContentDiv, RepleListDiv, RepleUploadDiv } from "../../Style/RepleCSS";
import { useSelector } from "react-redux";
import axios from "axios";

const RepleContent = (props) => {
    const [modalFlag, setModalFlag] = useState(false);
    const ref = useRef();
    const user = useSelector((state) => state.user);
    useOnClickOutside(ref, () => setModalFlag(false));
    const [editFlag, setEditFlag] = useState(false);
    const [Reple, setReple] = useState(props.reple.reple);

    const SubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            uid: user.uid,
            reple: Reple,
            postId: props.reple.postId,
            repleId: props.reple._id,
        };
        axios.post("/api/reple/edit", body).then((res) => {
            if (res.data.success) {
                alert("댓글수정이 완료되었습니다.");
            } else {
                alert("댓글수정에 실패하였습니다.");
            }
            return window.location.reload();
        });
    };
    const DeleteHandler = (e) => {
        e.preventDefault();
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                postId: props.reple.postId,
                repleId: props.reple._id,
            };
            axios
                .post("/api/reple/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("댓글이 삭제되었습니다.");
                        window.location.reload();
                    }
                })
                .catch((err) => {
                    alert("댓글 삭제에 실패하였습니다.");
                });
        }
    };
    return (
        <div>
            <RepleContentDiv>
                <div className="author">
                    <p>{props.reple.author.displayName}</p>
                    {props.reple.author.uid === user.uid && (
                        <div className="modalControl">
                            <span onClick={() => setModalFlag(true)}>...</span>
                            {modalFlag ? (
                                <div className="modalDiv" ref={ref}>
                                    <p
                                        onClick={() => {
                                            setEditFlag(true);
                                            setModalFlag(false);
                                        }}
                                    >
                                        수정
                                    </p>
                                    <p className="delete" onClick={(e) => DeleteHandler(e)}>
                                        삭제
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
                {editFlag ? (
                    <RepleUploadDiv>
                        <form>
                            <input
                                type="text"
                                value={Reple}
                                onChange={(e) => {
                                    setReple(e.currentTarget.value);
                                }}
                            />
                            <button
                                onClick={(e) => {
                                    SubmitHandler(e);
                                }}
                            >
                                등록
                            </button>
                        </form>
                        <div className="cancel">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEditFlag(false);
                                }}
                            >
                                취소
                            </button>
                        </div>
                    </RepleUploadDiv>
                ) : (
                    <p>{props.reple.reple}</p>
                )}
            </RepleContentDiv>
        </div>
    );
};
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}
export default RepleContent;

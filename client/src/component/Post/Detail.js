import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PostDiv, Post, BtnDiv } from "../../Style/DetailCSS";
import axios from "axios";

const Detail = () => {
  let params = useParams();
  let navigate = useNavigate();
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

  useEffect(() => {
    console.log(PostInfo);
  }, [PostInfo]);

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
  return (
    <PostDiv>
      {Flag ? (
        <>
          <Post>
            <h1>{PostInfo.title}</h1>
            {PostInfo.image ? (
              <img
                style={{ width: "100%", height: "auto" }}
                src={`http://localhost:5000/${PostInfo.image} `}
              />
            ) : null}
            <p>{PostInfo.content}</p>
          </Post>
          <BtnDiv>
            <Link to={`/edit/${PostInfo.postNum}`}>
              <button className="edit" style={{ marginRight: 10 }}>
                수정
              </button>
            </Link>
            <button className="edit" onClick={(e) => DeleteHandler()}>
              삭제
            </button>
          </BtnDiv>
        </>
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </PostDiv>
  );
};

export default Detail;

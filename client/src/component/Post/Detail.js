import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PostDiv, BtnDiv, Post } from "../../Style/DetailCSS";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

const Detail = (props) => {
  let params = useParams();
  let navigate = useNavigate();

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
      <>
        <Post>
          <h1>{props.PostInfo.title}</h1>
          <div style={{ display: "flex" }}>
            <h4 style={{ fontSize: "16px", marginRight: 10 }}>
              {props.PostInfo.author.displayName}
            </h4>
            <p style={{ fontSize: "12px", marginRight: 8 }}>
              {moment(props.PostInfo.createdAt).format("YYYY-MM-D hh:mm")}
            </p>
            <p style={{ fontSize: "12px" }}>
              {SetTime(props.PostInfo.createdAt, props.PostInfo.updatedAt)}
            </p>
          </div>

          {props.PostInfo.image ? (
            <img
              style={{ width: "100%", height: "auto" }}
              src={`http://localhost:5000/${props.PostInfo.image} `}
            />
          ) : null}
          <p>{props.PostInfo.content}</p>
        </Post>
        {user.uid === props.PostInfo.author.uid ? (
          <BtnDiv>
            <Link to={`/edit/${props.PostInfo.postNum}`}>
              <button className="edit" style={{ marginRight: 10 }}>
                수정
              </button>
            </Link>
            <button className="edit" onClick={(e) => DeleteHandler()}>
              삭제
            </button>
          </BtnDiv>
        ) : (
          <BtnDiv>
            <Link to="/">
              <button className="edit">목록</button>
            </Link>
          </BtnDiv>
        )}
      </>
    </PostDiv>
  );
};

export default Detail;

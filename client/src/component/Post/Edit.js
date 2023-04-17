import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import ImageUpload from "./ImageUpload.js";
import { UploadButtonDiv, UploadForm, UploadDiv } from "../../Style/UploadCSS";
import axios from "axios";

const Edit = () => {
  let params = useParams();
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const [Content, setContent] = useState("");
  const [Image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //글의 정보 가져옴
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
    // 가져온 정보로 해당 포스트의 내용이 담기도록
    setTitle(PostInfo.title);
    setContent(PostInfo.content);
    setImage(PostInfo.Image);
  }, [PostInfo]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === "" || Content === "") {
      return alert("모든 항목을 채워주세요.");
    }
    let body = {
      title: Title,
      content: Content,
      image: Image,
      postNum: params.postNum,
    };
    axios
      .post("/api/post/edit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 수정이 완료되었습니다.");
          navigate(`/post/${params.postNum}`);
        } else {
          alert("글 수정에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="label">제목</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <ImageUpload value={setImage} />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={Content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <UploadButtonDiv>
          <button
            style={{ marginRight: 10 }}
            onClick={(e) => {
              e.preventDefault(); // 새로고침방지
              navigate(-1); // naigate에서 -1하면 뒤로감
            }}
          >
            취소
          </button>
          <button onClick={(e) => onSubmit(e)}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Edit;

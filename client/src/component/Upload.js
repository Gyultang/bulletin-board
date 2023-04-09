import React, { useState, useEffect } from "react";
import { UploadButtonDiv, UploadForm, UploadDiv } from "../Style/UploadCSS";

const Upload = (props) => {
  const [Content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr]);
    console.log("메모?", Content);
    setContent("");
  };

  useEffect(() => {
    // 컴포넌트가 나타날 때 실행될 코드

    return () => {
      // 컴포넌트가 죽을 때 실행될 코드
    };
  }, []);
  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={Content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          type="text"
          value={Content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <UploadButtonDiv>
          <button onClick={onSubmit}>제출!</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Upload;

import React, { useState, useEffect } from "react";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={Content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
      <button onClick={onSubmit} style={{ marginTop: "1rem" }}>
        제출!
      </button>
    </div>
  );
};

export default Upload;

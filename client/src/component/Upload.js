import React, { useState } from "react";

const Upload = () => {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  };
  return (
    <div>
      <button onClick={onSubmit} style={{ marginTop: "1rem" }}>
        제출!
      </button>
    </div>
  );
};

export default Upload;

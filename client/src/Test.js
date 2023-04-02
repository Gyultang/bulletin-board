import React, { useState } from "react";

const Test = () => {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {ContentList.map((content, idx) => {
        return <div key={idx}>{content}</div>;
      })}
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

export default Test;

import React, { useState } from "react";

const List = () => {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  };
  return (
    <>
      {ContentList.map((content, idx) => {
        return <div key={idx}>{content}</div>;
      })}
      <input
        type="text"
        value={Content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
    </>
  );
};

export default List;

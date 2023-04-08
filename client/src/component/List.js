import React, { useState } from "react";

const List = (props) => {
  const [Content, setContent] = useState("");

  return (
    <>
      {props.ContentList.map((content, idx) => {
        return (
          <div style={{ marginLeft: "1rem", width: "100%" }} key={idx}>
            내용 : {content}
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default List;

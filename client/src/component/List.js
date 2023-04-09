import React, { useState, useEffect } from "react";
import axios from "axios";

const List = (props) => {
  const [Content, setContent] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    let body = { text: "hello" };
    axios
      // 3000번 포트에서 요청을 보낼거지만 5000번 포트에서 요청을 받기위해 프록시설정이 필요함!
      .post("api/test", body)
      .then((res) => {
        console.log(res);
        setText(res.data.text);
      })
      .catch((error) => {
        // 에러 핸들링

        console.log(error);
      });
  }, []);
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
      <h1>{text}</h1>
    </>
  );
};

export default List;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS";

const List = (props) => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      // 3000번 포트에서 요청을 보낼거지만 5000번 포트에서 요청을 받기위해 프록시설정이 필요함!
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        // 에러 핸들링
        console.log(err);
      });
  }, []);
  return (
    <ListDiv>
      {postList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
};

export default List;

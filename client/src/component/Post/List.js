import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = (props) => {
  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("lll") + "(수정됨)";
    } else {
      return moment(a).format("lll");
    }
  };
  return (
    <ListDiv>
      {props.postList.map((post, idx) => {
        console.log(post);
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  lineHeight: "100%",
                }}
              >
                <p className="author" style={{ marginRight: 8 }}>
                  {/* <FontAwesomeIcon icon="faUser" /> */}
                  {post.author.displayName}
                </p>
                <p style={{ fontSize: "12px" }}>
                  {moment(post.createdAt).format("YYYY-MM-D hh:mm")}
                </p>
              </div>
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

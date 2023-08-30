import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { ListDiv, ListItem, PaginationBox } from "../../Style/ListCSS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "react-bootstrap";

const List = (props) => {
    console.log("포스트정보", props.postList);
    // Calculate the total number of pages
    const totalPages = Math.ceil(props.postList.length / 5);

    // Initialize the current page state
    const [currentPage, setCurrentPage] = React.useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;

    // Get the posts to be displayed on the current page
    const postsToShow = props.postList.slice(startIndex, endIndex);

    // Event handler for page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("lll") + "(수정됨)";
        } else {
            return moment(a).format("lll");
        }
    };
    return (
        <div style={{ border: "3px solid gray", width: "100%", height: "580px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <ListDiv>
                {postsToShow.map((post, idx) => {
                    console.log(post);
                    return (
                        <ListItem key={idx}>
                            <Link to={`/post/${post.postNum}`}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <p className="title">{post.title}</p>
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
                                            <p style={{ fontSize: "12px" }}>{moment(post.createdAt).format("YYYY-MM-D hh:mm")}</p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <FontAwesomeIcon icon={faComment} flip="horizontal" />
                                        <p>{post.repleNum}</p>
                                    </div>
                                </div>
                                {/* <p>{post.content}</p> */}
                            </Link>
                        </ListItem>
                    );
                })}
            </ListDiv>
            <PaginationBox>
                <Pagination>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} className={"custom-pagination-item"} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </PaginationBox>
        </div>
    );
};

export default List;

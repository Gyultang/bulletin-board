import React, { useState, useEffect } from "react";
import List from "./Post/List";
import axios from "axios";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { ListDiv } from "../Style/ListCSS";
import { MoreBtn } from "../Style/MainPageCSS";
import { useSelector } from "react-redux";
import Sidebar from "./SideBar";

const MainPage = () => {
    const [postList, setPostList] = useState([]);
    const [sort, setSort] = useState("최신순");
    const [search, setSearch] = useState("");
    const [skip, setSkip] = useState(0);
    const [loadMore, setLoadMore] = useState(true);
    const user = useSelector((state) => state.user);

    const getPostLoadMore = () => {
        let body = {
            sort: sort,
            search: search,
            skip: skip,
        };
        axios
            // 3000번 포트에서 요청을 보낼거지만 5000번 포트에서 요청을 받기위해 프록시설정이 필요함!
            .post("/api/post/list", body)
            .then((res) => {
                if (res.data.success) {
                    setPostList([...postList, ...res.data.postList]);
                    setSkip(skip + res.data.postList.length);
                    // 0~4 idx
                    // 5~9 idx
                    // 10~14
                    if (res.data.postList.length < 5) {
                        setLoadMore(false);
                    }
                }
            })
            .catch((err) => {
                // 에러 핸들링
                console.log(err);
            });
    };
    const getPostList = () => {
        setSkip(0);
        let body = {
            sort: sort,
            search: search,
            skip: 0,
        };
        axios
            // 3000번 포트에서 요청을 보낼거지만 5000번 포트에서 요청을 받기위해 프록시설정이 필요함!
            .post("/api/post/list", body)
            .then((res) => {
                if (res.data.success) {
                    setPostList([...res.data.postList]);
                    setSkip(res.data.postList.length);
                    // 0~4 idx
                    // 5~9 idx
                    // 10~14
                    if (res.data.postList.length < 5) {
                        setLoadMore(false);
                    }
                }
            })
            .catch((err) => {
                // 에러 핸들링
                console.log(err);
            });
    };
    useEffect(() => {
        getPostList();
    }, [sort]);

    const Searchhandler = () => {
        getPostList();
    };
    // const sidebarContent = (
    //     <div style={{ width: "400px", height: "100%", backgroundColor: "lightgray", padding: "10px" }}>
    //         {/* 사이드바 컨텐츠 */}
    //         <p>Sidebar Content</p>
    //     </div>
    // );

    return (
        <div style={{ border: "4px solid yellow", width: "100%" }}>
            {user.displayName !== "" ? <h4 style={{ padding: "1rem 0", margin: "0 auto", maxWidth: "756px" }}>{user.displayName}님</h4> : null}
            <ListDiv
                style={{
                    display: "flex",
                    height: 60,
                    padding: "5px 0",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <input
                        style={{
                            height: 35,
                            borderRadius: 6,
                            marginRight: 5,
                            border: "1px solid dark",
                        }}
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.currentTarget.value)}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) Searchhandler();
                        }}
                        placeholder="게시글 검색"
                    />
                    <Button variant="outline-secondary">검색</Button>
                </div>
                <DropdownButton variant="outline-dark" title={sort}>
                    <Dropdown.Item onClick={() => setSort("최신순")}>최신순</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSort("댓글순")}>댓글순</Dropdown.Item>
                </DropdownButton>
            </ListDiv>
            <div style={{ maxHeight: "530px" }}>
                <List postList={postList} />
            </div>
            {loadMore && (
                <MoreBtn>
                    <button style={{ marginBottom: "3vh" }} onClick={() => getPostLoadMore()}>
                        더 불러오기
                    </button>
                </MoreBtn>
            )}
        </div>
    );
};

export default MainPage;

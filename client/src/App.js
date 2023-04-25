import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heading from "./component/Heading";
import MainPage from "./component/MainPage";
import List from "./component/Post/List";
import Upload from "./component/Post/Upload";
import Edit from "./component/Post/Edit";
import Detail from "./component/Post/Detail";
import Register from "./component/User/Register";
import Login from "./component/User/Login";
import PostArea from "./component/Post/PostArea";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice";
import firebase from "./firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 로그인 상태를 확인해주는 firebase 함수
    firebase.auth().onAuthStateChanged((userInfo) => {
      // console.log("userInfo: ", userInfo);
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<PostArea />} />
        <Route path="/edit/:postNum" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

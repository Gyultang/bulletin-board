import React, { useEffect, useState } from "react";
import LoginDiv from "../../Style/UserCSS.js";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebase.js";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Pw, setPw] = useState("");
  const [ErrMsg, setErrMsg] = useState("");
  let navigate = useNavigate();

  const SingInFunc = async (e) => {
    e.preventDefault();
    if (!(Email && Pw)) {
      return alert("모든 값을 채워주세요.");
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(Email, Pw);
      navigate("/");
    } catch (error) {
      if ((error.code = "auth/user-not-found")) {
        setErrMsg("존재하지 않는 이메일입니다.");
      } else if ((error.code = "auth/wrong-password")) {
        setErrMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setErrMsg("로그인이 실패하였습니다.");
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setErrMsg("");
    }, 5000);
  }, [ErrMsg]);
  return (
    <LoginDiv>
      <form>
        <label>이메일</label>
        <input
          id="email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>비밀번호</label>
        <input
          id="password"
          type="password"
          value={Pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        {ErrMsg != "" && (
          <p style={{ color: "red", fontSize: "12px" }}>{ErrMsg}</p>
        )}
        <button onClick={(e) => SingInFunc(e)}>로그인</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
};

export default Login;

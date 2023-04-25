import React, { useState } from "react";
import LoginDiv from "../../Style/UserCSS";
import firebase from "../../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pw, setPw] = useState("");
  const [PwConfirm, setPwConfirm] = useState("");
  // 광클방지
  const [Flag, setFlag] = useState(false);
  const [NameCheck, setNameCheck] = useState(false);
  const [NameInfo, setNameInfo] = useState("");
  let navigate = useNavigate();

  const RegisterFunc = async (e) => {
    setFlag(true);
    e.preventDefault();

    if (!(Name && Email && Pw && PwConfirm)) {
      return alert("모든 값을 채워주세요!");
    }
    if (Pw != PwConfirm) {
      return alert("비밀번호와 비밀번호 확인 값은 같아야 합니다.");
    }
    if (Pw.length < 6) {
      return alert("비밀번호는 6자리 이상이여야합니다.");
    }
    if (!NameCheck) {
      return alert("닉네임 중복검사를 진행해 주세요.");
    }
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Pw);

    await createdUser.user.updateProfile({
      displayName: Name,
    });

    console.log(createdUser.user);
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };
    axios.post("/api/user/register", body).then((res) => {
      setFlag(false);
      if (res.data.success) {
        //회원가입 성공
        navigate("/login");
      } else {
        //회원가입실패
        alert("회원가입이 실패하였습니다.");
      }
    });
  };
  const NameCheckFunc = (e) => {
    e.preventDefault();
    if (!Name) {
      return alert("닉네임을 입력해주세요.");
    }
    let body = {
      displayName: Name,
    };
    axios.post("/api/user/namecheck", body).then((res) => {
      if (res.data.success) {
        if (res.data.check) {
          setNameCheck(true);
          setNameInfo("사용가능한 닉네임입니다.");
        } else {
          setNameInfo("사용불가능한 닉네임입니다.");
        }
      }
    });
  };

  return (
    <LoginDiv>
      <form>
        <label>닉네임</label>
        <input
          type="name"
          value={Name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        {NameInfo ? (
          NameCheck ? (
            <p style={{ color: "blue", fontSize: "12px" }}>{NameInfo}</p>
          ) : (
            <p style={{ color: "red", fontSize: "12px" }}>{NameInfo}</p>
          )
        ) : null}

        <button onClick={(e) => NameCheckFunc(e)}>닉네임중복검사</button>
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={Pw}
          minLength={6}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        <label>비밀번호 확인</label>
        <input
          type="password"
          value={PwConfirm}
          minLength={6}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        />
        <button disabled={Flag} onClick={(e) => RegisterFunc(e)}>
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
};

export default Register;

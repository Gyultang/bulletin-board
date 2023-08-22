import React, { useEffect, useState } from "react";
import LoginDiv from "../../Style/UserCSS.js";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebase.js";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import axios from "axios";

const Login = () => {
    const [userData, setUserData] = useState(null);
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

    // 구글 로그인
    const signInGoogle = async (e) => {
        e.preventDefault();
        console.log("클릭");
        const provider = new GoogleAuthProvider();
        try {
            const data = await signInWithPopup(firebase.auth(), provider);

            // 이메일이 이미 데이터베이스에 있는지 확인(중복유저생성방지)
            const signInMethods = await firebase.auth().fetchSignInMethodsForEmail(data.user.email);

            setUserData(data.user);
            console.log("유저정보", data.user);
            if (signInMethods && signInMethods.length > 0) {
                navigate("/");
            } else {
                // 서버로 사용자 데이터 전송
                const response = await axios.post("/api/user/register", {
                    email: data.user.email,
                    displayName: data.user.displayName,
                    uid: data.user.uid,
                    // ... 추가로 보낼 필요한 사용자 데이터
                });
                console.log("서버 응답:", response.data);
            }
        } catch (error) {
            console.error("에러:", error);
        }
    };

    // 깃허브 로그인
    const SignInGitHub = async (e) => {
        e.preventDefault();
        const provider = new GithubAuthProvider();
        try {
            const data = await signInWithPopup(firebase.auth(), provider);
            // 이메일이 이미 데이터베이스에 있는지 확인(중복유저생성방지)
            const signInMethods = await firebase.auth().fetchSignInMethodsForEmail(data.user.email);
            setUserData(data.user);
            console.log("유저정보", data.user);
            if (signInMethods && signInMethods.length > 0) {
                navigate("/");
            } else {
                // 서버로 사용자 데이터 전송
                const response = await axios.post("/api/user/register", {
                    email: data.user.email,
                    displayName: data.user.displayName,
                    uid: data.user.uid,
                    // ... 추가로 보낼 필요한 사용자 데이터
                });
                console.log("서버 응답:", response.data);
            }
        } catch (error) {
            console.error("에러:", error);
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
                <input id="email" type="email" value={Email} onChange={(e) => setEmail(e.currentTarget.value)} />
                <label>비밀번호</label>
                <input id="password" type="password" value={Pw} onChange={(e) => setPw(e.currentTarget.value)} />
                {ErrMsg != "" && <p style={{ color: "red", fontSize: "12px" }}>{ErrMsg}</p>}
                <button onClick={(e) => SingInFunc(e)}>로그인</button>
                <button style={{ color: "red" }} onClick={(e) => signInGoogle(e)}>
                    Google
                </button>
                <button onClick={(e) => SignInGitHub(e)}>GitHub</button>
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

// signInWithPopup(firebase.auth(), provider)
//     .then((data) => {
//     // 이메일이 이미 데이터베이스에 있는지 확인
//     const emailExists = await checkIfEmailExists(data.user.email);

//         setUserData(data.user);
//         console.log("데이터", data);

//         // 서버로 사용자 데이터 전송
//         axios
//             .post("/api/user/register", {
//                 email: data.user.email,
//                 displayName: data.user.displayName,
//                 uid: data.user.uid,
//                 // ... 추가로 보낼 필요한 사용자 데이터
//             })
//             .then((response) => {
//                 console.log("서버 응답:", response.data);
//             })
//             .catch((error) => {
//                 console.error("서버 요청 오류:", error);
//             });

//         navigate("/");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

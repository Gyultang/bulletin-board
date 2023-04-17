const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;
const config = require("./config/key.js");
const { mongoURI } = require("./config/dev.js");

// mongodb+srv://rnfl0318:alwl0213%40@gyultang.gscu7o3.mongodb.net/?retryWrites=true&w=majority
// 비밀번호에 @가 들어간 경우 @를 %40으로 대체
// body로전달되는 내용을 파싱하기위해 body-parsor를 해야함 (따로 설치할필욘없음)

// express에서 static으로 활용할 파일을 알려줌
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api에서 공통되는 부분을 빼줄수있음
app.use("/api/post", require("./Router/post.js"));

app.listen(port, () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("connecting mongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

// req는 클라이언트에서 보내는 요청, res는 서버측에서 보내는 응답
app.get("/", (req, res) => {
  // sendFile은 경로를 입력하므로서 파일을 보내줄수있다.
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// 어떤 경로로 들어오든 빌드폴더에있는 index파일을 띄워줄거임
app.get("*", (req, res) => {
  // sendFile은 경로를 입력하므로서 파일을 보내줄수있다.
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// npm i nodemon --save
// 서버쪽에 코드가 변경됨이 감지되면 자동으로 서버를 껐다 켜줌.
/*
1. Post MongoDB Model
2. Client CSS (Bootstrap, Emotion)
*/

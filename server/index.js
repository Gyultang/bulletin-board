const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// req는 클라이언트에서 보내는 요청, res는 서버측에서 보내는 응답
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/express", (req, res) => {
  res.send("Hello Express!");
});

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const ImageUpload = (props) => {
  const [imgValue, setImgValue] = useState("");
  // 1. 사용자가 이미지를 업로드
  // 2. 업로드한 이미지를 받아서 서버에서 저장
  // 3. 저장한 이미지의 경로를 다시 클라이언트에게 전송
  // 4. 경로를 받아서 post model에 저장
  const FileUpload = (e) => {
    console.log("파일", e.target.files);
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((res) => {
      props.setImage(res.data.filePath);
    });
    setImgValue(e.target.files[0].name);
  };
  console.log("ddd", imgValue);
  console.log("파일이름?", Image);

  return (
    <>
      {/* accept 특정 파일만  */}
      <Form.Control
        type="file"
        className="shadow-none"
        accept="image/*"
        defaultValue={`${imgValue}`}
        onChange={(e) => {
          {
            FileUpload(e);
          }
        }}
      />
    </>
  );
};

export default ImageUpload;

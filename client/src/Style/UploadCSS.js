import styled from "@emotion/styled";

const UploadDiv = styled.div`
    width: 100%;
    // border: 10px solid red;
    display: flex;
    align-items: center;
`;
const UploadForm = styled.form`
width: 80%;
height: 85%;
margin: 0 auto;
// border: 10px solid black;
display:flex;
flex-direction:column;
#title{
    border-radius:10px;
    border: 1px solid #c6c6c6;
    padding:10px;
    margin-bottom:10px;
    &: active, &:focus{
        outline:none;
    }}
    textarea{
    min-height:350px;
    resize:none;
    border-radius:10px;
    border: 1px solid #c6c6c6;
    padding:10px;
    &: active, &:focus{
        outline:none;
}
&::-webkit-scrollbar{
    width:10px;
}&::-webkit-scrollbar-thumb{
    background-color:grey;
    border-radius:15px;
    background-colip: padding-box;
    border:2px solid transparent;
}&::-webkit-scrollbar-track{
    background-color: #c6c6c6;
    border-radius:15px;
    box-shadow:inset 0px 0px 5px whitesmoke;
}
}
label{
    font-weight:bold;
    margin-top:10px;
}
`;

const UploadButtonDiv = styled.div`
margin-top:1rem;
display:flex;
justify-content:flex-end;
button{
  padding: 5px 10px;
  background-color: #252129;
  border:none;
  border-radius: 15px;
  border:1px solid black;
  color:white;
  &:hover {
    background-color: white;
    color: black;
    border:1px solid black;
    }
`;

export { UploadButtonDiv, UploadForm, UploadDiv };

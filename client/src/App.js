import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heading from "./component/Heading";
import List from "./component/Post/List";
import Upload from "./component/Post/Upload";
import Edit from "./component/Post/Edit";
import Detail from "./component/Post/Detail";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heading from "./component/Heading";
import List from "./component/List";
import Upload from "./component/Upload";
import { useState } from "react";

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/list"
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/Upload"
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;

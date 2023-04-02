import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heading from "./component/Heading";
import List from "./component/List";
import Upload from "./component/Upload";
import Test from "./Test";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Test />} />

        <Route path="/list" element={<List />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;

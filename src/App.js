import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./screen/Landing";
import Ibt from "./screen/Ibt";
import "./style/global.scss";
import "./style/ibt.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="ibt" element={<Ibt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

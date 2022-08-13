import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/global.scss";
import Landing from "./screen/Landing";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </BrowserRouter>;
}

export default App;

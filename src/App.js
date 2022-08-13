import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./screen/Landing";
import "./style/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

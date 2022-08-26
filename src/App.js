import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success/success";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

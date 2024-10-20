import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return <div className="max-w-[1400px] mx-auto">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;

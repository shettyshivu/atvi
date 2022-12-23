import React from "react";
import Navbar from "./components/Navbar/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Float from "./components/Float/Float";
import "./styles.css";
import "./fonts/fonts.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<Home />}></Route>
          <Route path="/how-we-work" element={<Home />}></Route>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="/get-inspired" element={<Home />}></Route>
          <Route path="/contact" element={<Home />}></Route>
        </Routes>
        <Float />
      </BrowserRouter>
    </>
  );
}

export default App;

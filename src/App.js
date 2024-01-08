import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Error404Page from "./pages/Error404Page";
import Location from "./pages/Location";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404Page />} />
        <Route path="/location/:IDlocation" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;

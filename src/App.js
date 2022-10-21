import React from "react";
import "./index.css"
import Home_Catalogue from "./routes/Home_Catalogue";
import RED from "./routes/RED";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_Catalogue />} />
        <Route path="/RED/:id" element={<RED />} />
      </Routes>
    </>
  );
}

export default App;

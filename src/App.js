import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/loginPage";
import MapPage from "./Pages/MapPage/mapPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
}

export default App;

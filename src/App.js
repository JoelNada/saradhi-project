import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import { Route, Routes } from "react-router-dom";
import PhoneLogin from "./components/PhoneLogin";
import Register from "./components/Register";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PhoneLogin />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;


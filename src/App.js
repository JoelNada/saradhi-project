import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import PhoneLogin from "./components/PhoneLogin";
import Register from "./components/Register";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleText = (event) => {
    console.log(event.target.value);
    if (event.target.value === "register") {
      navigate("/register");
    } else {
      console.log("Not correct route");
    }
  };
  console.log("The curent page route", location.pathname);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PhoneLogin />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      {location.pathname === "/" ? (
        <button className="btn btn-primary">
          <Link to="/register" style={{ color: "#fff" }}>
            Click here to Register
          </Link>
        </button>
      ) : (
        ""
      )}
      <input
        type="text"
        className="form-control w-50"
        placeholder="Type something here"
        onChange={handleText}
      />
    </>
  );
}

export default App;


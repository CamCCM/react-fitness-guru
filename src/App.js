import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Excercise from "./Pages/Excercise";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Excercise />}></Route>
        </Routes>
      </Router>
    </>
  );
}

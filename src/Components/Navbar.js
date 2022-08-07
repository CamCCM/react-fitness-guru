import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar text-center">
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link to="/">
            <span id="logo1">Fitness</span>
            <span id="logo2">Guru</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

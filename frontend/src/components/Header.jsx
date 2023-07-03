import React from "react";
import "./Header.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import logoNOIR from "../assets/logoNOIR.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header bg-light">
      <nav>
        <div className="flex flex-wrap justify-center items-center m-3">
          <Link to="/">
            <img src={logoNOIR} className="w-24" alt="Logo A la Maude" />
          </Link>
        </div>
      </nav>
      <NavBar />
    </div>
  );
}

export default Header;

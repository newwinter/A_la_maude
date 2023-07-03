import React from "react";
import "./Header.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import logoNOIR from "../assets/logoNOIR.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="flex flex-wrap min-[320px]:flex-col min-[635px]:flex-row items-center justify-between m-10 p-2 underline-offset-8 ">
          <Link to="/">
            <img
              src={logoNOIR}
              className="w-40 mr-3 pt-3 pb-3 max-[435px]:w-15
            "
              alt="Logo A la Maude"
            />
          </Link>
        </div>
      </nav>
      <NavBar />
    </div>
  );
}

export default Header;

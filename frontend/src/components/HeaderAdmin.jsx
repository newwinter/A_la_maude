import React from "react";
import { Link } from "react-router-dom";
import logonoir from "../assets/logonoir.png";

function HeaderAdmin() {
  return (
    <div className="header bg-white border-b-4 border-beige">
      <nav>
        <div className="flex">
          <div className="flex flex-wrap basis-1/3" />
          <div className="flex flex-wrap basis-1/3 justify-center items-center m-3">
            <Link to="/">
              <img src={logonoir} className="w-28" alt="Logo A la Maude" />
            </Link>
          </div>
          <hr className="border-b-4 border-beige" />
        </div>
      </nav>
    </div>
  );
}

export default HeaderAdmin;

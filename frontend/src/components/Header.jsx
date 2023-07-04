import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logoNOIR from "../assets/logoNOIR.png";

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
      <div className="bg-terracotta">
        <nav>
          <ul className="text-light flex flex-row justify-center text-center text-lg rounded bg-gray-50 ">
            <li className="block py-2 pl-3 pr-2 mx-4 max-[450px]:mx-1 max-[450px]:text-sm rounded hover:text-rose">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose font-bold max-[450px]:underline-offset-4 underline underline-offset-8 decoration-2"
                    : ""
                }
              >
                A propos
              </NavLink>
            </li>
            <li className="block py-2 pl-3 pr-2 mx-4 max-[450px]:mx-1 max-[450px]:text-sm rounded hover:text-rose">
              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose font-bold max-[450px]:underline-offset-4 underline underline-offset-8 decoration-2"
                    : ""
                }
              >
                Boutique
              </NavLink>
            </li>
            <li className="block py-2 pl-3 pr-2 mx-4 max-[450px]:mx-1 max-[450px]:text-sm rounded hover:text-rose">
              <NavLink
                to="/panier"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose font-bold max-[450px]:underline-offset-4 underline underline-offset-8 decoration-2"
                    : ""
                }
              >
                Panier
              </NavLink>
            </li>
            <li className="block py-2 pl-3 pr-2 mx-4 max-[450px]:mx-1 max-[450px]:text-sm rounded hover:text-rose">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose font-bold max-[450px]:underline-offset-4 underline underline-offset-8 decoration-2"
                    : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

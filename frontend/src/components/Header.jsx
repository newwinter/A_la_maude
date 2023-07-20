import React from "react";

import { Link, NavLink } from "react-router-dom";
import logonoir from "../assets/logonoir.png";
import magnifyingglass from "../assets/magnifyingglass.png";
import user from "../assets/user.png";
import shoppingbasket from "../assets/shoppingbasket.png";

function Header() {
  return (
    <div className="header bg-white">
      <nav>
        <div className="flex">
          <div className="flex flex-wrap basis-1/3" />
          <div className="flex flex-wrap basis-1/3 justify-center items-center m-3">
            <Link to="/">
              <img src={logonoir} className="w-28" alt="Logo A la Maude" />
            </Link>
          </div>
          <div className="flex basis-1/3 justify-end my-2">
            <img
              src={magnifyingglass}
              alt="logo de loupe"
              className="w-7 h-7 mr-2"
            />
            <img src={user} alt="logo d'utilisateur" className="w-7 h-7 mx-1" />
            <Link to="/panier">
              <img
                src={shoppingbasket}
                alt="logo de panier d'achats"
                className="w-7 h-7 ml-2"
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-white">
        <nav>
          <ul className="text-black bg-beige flex flex-row justify-center text-center text-lg rounded bg-gray-50 ">
            <li className="block py-2 pl-3 pr-2 mx-4 max-[450px]:mx-1 max-[450px]:text-sm rounded hover:text-rose">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose font-bold max-[450px]:underline-offset-4 underline underline-offset-8 decoration-2"
                    : ""
                }
              >
                À propos
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
            {/* <li className="block py-2 pl-3 pr-2 mx-4 max-[450px]:mx-1 max-[450px]:text-sm rounded hover:text-rose">
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
            </li> */}
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

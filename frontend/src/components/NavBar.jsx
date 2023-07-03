import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-terracotta">
      <nav>
        <ul className="text-light flex flex-row justify-center text-center font-medium p-2 mt-2 rounded bg-gray-50 ">
          <li className="block py-2 pl-3 pr-2 mx-4 rounded hover:text-rose">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-rose font-bold underline underline-offset-8 decoration-2"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="block py-2 pl-3 pr-2 mx-4 rounded hover:text-rose">
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive
                  ? "text-rose font-bold underline underline-offset-8 decoration-2"
                  : ""
              }
            >
              Boutique
            </NavLink>
          </li>
          <li className="block py-2 pl-3 pr-2 mx-4 rounded hover:text-rose">
            <NavLink
              to="/panier"
              className={({ isActive }) =>
                isActive
                  ? "text-rose font-bold underline underline-offset-8 decoration-2"
                  : ""
              }
            >
              Panier
            </NavLink>
          </li>
          <li className="block py-2 pl-3 pr-2 mx-4 rounded hover:text-rose">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-rose font-bold underline underline-offset-8 decoration-2"
                  : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

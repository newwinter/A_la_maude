import RandomProductAccueil from "@components/RandomProductAccueil";
import React from "react";
import atelier from "../assets/atelier.jpeg";

function Home() {
  return (
    <div>
      <div className="object-cover overflow-hidden shadow-[4px_7px_5px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <img
          className="hover:scale-125 transition duration-500 cursor-pointer w-full"
          alt="home"
          src={atelier}
        />
      </div>
      <RandomProductAccueil />
    </div>
  );
}

export default Home;

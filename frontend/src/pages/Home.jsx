import React from "react";
import RandomProductAccueil from "../components/RandomProductAccueil";
import ResumeAccueil from "../components/ResumeAccueil";
import couturecoupe from "../assets/couturecoupe.jpeg";

function Home() {
  return (
    <div>
      <div className="mx-24 my-10">
        <img alt="home" src={couturecoupe} />
      </div>
      <ResumeAccueil />
      <RandomProductAccueil />
    </div>
  );
}

export default Home;

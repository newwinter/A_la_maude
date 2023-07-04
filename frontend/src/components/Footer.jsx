import React from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

function Footer() {
  const handleClickInsta = () => {
    // Code à exécuter lorsque vous cliquez sur l'icône
    window.location.href =
      "https://www.instagram.com/le_calot_a_la_maude/?hl=fr"; // Remplacez l'URL par celle que vous souhaitez atteindre
  };

  const handleClickFB = () => {
    // Code à exécuter lorsque vous cliquez sur l'icône
    window.location.href =
      "https://www.instagram.com/le_calot_a_la_maude/?hl=fr"; // Remplacez l'URL par celle que vous souhaitez atteindre
  };

  return (
    <div>
      <div className="bg-terracotta flex justify-between">
        <div className="flex flex-wrap justify-start items-center">
          <div className="w-10 mx-3 py-2">
            <button type="button" onClick={handleClickInsta}>
              <img src={instagram} alt="Icône du réseau social instagram" />
            </button>
          </div>
          <div className="w-8 mx-1 py-2">
            <button type="button" onClick={handleClickFB}>
              <img src={facebook} alt="Icône du réseau social facebook" />
            </button>
          </div>
          <div className="text-white flex flex-wrap justify-end items-center ">
            <p>A la Maude ® | © 2023 Tous droits réservés</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

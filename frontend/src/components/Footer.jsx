import React from "react";
import instagram from "../assets/instagram.png";

function Footer() {
  const handleClickInsta = () => {
    // Code à exécuter lorsque vous cliquez sur l'icône
    window.location.href =
      "https://www.instagram.com/le_calot_a_la_maude/?hl=fr"; // Remplacez l'URL par celle que vous souhaitez atteindre
  };

  return (
    <div>
      <div className="bg-terracotta text-light">
        <div className="flex justify-between items-center">
          <div className="w-10 mx-3 pt-3 pb-1">
            <button type="button" onClick={handleClickInsta}>
              <img src={instagram} alt="Icône du réseau social instagram" />
            </button>
          </div>
          <div className="text-white flex flex-wrap justify-end mx-3">
            <p>A la Maude ® | © 2023 Tous droits réservés</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

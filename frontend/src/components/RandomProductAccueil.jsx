import React, { useState, useEffect } from "react";
import "./RandomProductAccueil.css";
// eslint-disable-next-line import/no-unresolved
import { register } from "swiper/element/bundle";

register();

function RandomProductAccueil() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/products?type=random`)
      .then((res) => res.json())
      .then((prod) => setProducts(prod))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>RandomProductAccueil</div>
      <swiper-container>
        {products.map((product) => (
          <swiper-slide>
            <div>
              {product.name}
              {product.price}
            </div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                product.src
              }`}
              alt={product.alt}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}

export default RandomProductAccueil;

// http://localhost:5005/assets/images/Calot2_F_1.jpeg

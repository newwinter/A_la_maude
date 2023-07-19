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
      <div>random</div>
      <div>
        <swiper-container
          pagination="true"
          pagination-clickable="true"
          space-between="30"
          slides-per-view="3"
          className="swiper-container font-inter"
        >
          {products.map((product) => (
            <swiper-slide className="swiper-slide">
              <div className="mb-5">{product.price}€</div>
              <div className="mt-2">{product.name}</div>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  product.src
                }`}
                alt={product.alt}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </>
  );
}

export default RandomProductAccueil;

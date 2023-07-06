import React, { useState, useEffect } from "react";

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
      <div>
        {products.map((product) => (
          <h1>{product.name}</h1>

          // <ProductCard product={product} />
        ))}
      </div>
    </>
  );
}

export default RandomProductAccueil;

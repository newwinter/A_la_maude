import React, { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((cat) => setCategories(cat))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="text-center text-inter mt-20">
        Retrouver toute nos catégories de produits
      </div>
      <div className="flex flex-row mx-10">
        {categories.map((categorie) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4">
            <div className="px-6 py-4">
              <img
                className="w-full"
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  categorie.src
                }`}
                alt={categorie.alt}
              />
              <h2 className="font-bold text-xl my-2">{categorie.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;

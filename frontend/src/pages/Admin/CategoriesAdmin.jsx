import React, { useEffect, useState } from "react";

function CategoriesAdmin() {
  const categorieModel = {
    name: "",
    src: "",
    alt: "",
  };
  const [categorie, setCategorie] = useState(categorieModel);
  const [allCategories, setAllCategories] = useState([]);

  const handleCategorie = (name, value) => {
    setCategorie({ ...categorie, [name]: value });
  };

  const getCategories = () => {};

  const postCategorie = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`, {
      method: "POST",
      body: JSON.stringify(categorie),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setCategorie(json);
        getCategories();
      })
      .catch((err) => console.error(err));
  };

  const deleteCategorie = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories/${categorie.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCategorie(categorieModel);
        getCategories();
      })
      .catch((err) => console.error(err));
  };

  const updateCategorie = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories/${categorie.id}`, {
      method: "PUT",
      body: JSON.stringify(categorie),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setCategorie(json);
        getCategories();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((cat) => setAllCategories(cat))
      .catch((err) => console.error(err));
  }, []);

  const updateCategorieState = (id) => {
    if (id === "") {
      setCategorie(categorieModel);
    } else {
      setCategorie(allCategories.find((cat) => cat.id === +id));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div>Admin</div>
      <div className="flex flex-col w-80">
        <label htmlFor="underline_select" className="sr-only">
          Choisissez une catégorie de produit
        </label>
        <select
          id="underline_select"
          className="flex justify-center py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
          name="id"
          value=""
          onChange={(event) => updateCategorieState(event.target.value)}
        >
          <option value="">Choisissez une catégorie</option>
          {allCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <form
          className="w-full max-w-lg font-inter"
          onSubmit={(event) => postCategorie(event)}
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Nom de la catégorie
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Cotons"
                required
                minLength={1}
                maxLength={255}
                name="name"
                onChange={(e) => handleCategorie(e.target.name, e.target.value)}
                value={categorie.name}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Photo"
              >
                Photo de la catégorie
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Photo"
                required
                minLength={1}
                maxLength={255}
                name="src"
                onChange={(e) => handleCategorie(e.target.name, e.target.value)}
                value={categorie.src}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Photo"
              >
                Description de la photo
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Description photo"
                required
                minLength={1}
                name="alt"
                onChange={(e) => handleCategorie(e.target.name, e.target.value)}
                value={categorie.alt}
              />
            </div>
            {!categorie.id && (
              <button
                type="submit"
                className="max-sm:order max-sm:m-2 w-56 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-terracotta from-terracotta to-lemon focus:ring-4 focus:outline-none focus:ring-terracotta"
              >
                <div className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  <h3 className="text-center">Ajouter</h3>
                </div>
              </button>
            )}
          </div>
        </form>
        {categorie.id && (
          <div>
            <button
              type="button"
              onClick={(event) => deleteCategorie(event)}
              className="max-sm:order max-sm:m-2 w-56 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-terracotta from-terracotta to-lemon focus:ring-4 focus:outline-none focus:ring-terracotta"
            >
              <div className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                <h3 className="text-center">Supprimer</h3>
              </div>
            </button>
            <button
              type="button"
              onClick={(event) => updateCategorie(event)}
              className="max-sm:order max-sm:m-2 w-56 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-terracotta from-terracotta to-lemon focus:ring-4 focus:outline-none focus:ring-terracotta"
            >
              <div className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                <h3 className="text-center">Modifier</h3>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default CategoriesAdmin;

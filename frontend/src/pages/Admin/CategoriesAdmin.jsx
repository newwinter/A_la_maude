import React from "react";

function Admin() {
  return (
    <>
      <div>Admin</div>
      <div>
        <form className="w-full max-w-lg font-inter ">
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
              />
            </div>
            <button
              type="submit"
              className="max-sm:order max-sm:m-2 w-56 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-terracotta from-terracotta to-lemon focus:ring-4 focus:outline-none focus:ring-terracotta"
            >
              <div className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                <h3 className="text-center">Ajouter</h3>
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Admin;

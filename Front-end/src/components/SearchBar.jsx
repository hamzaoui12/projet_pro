import React from "react"
import { Formik, Form, Field } from "formik"

const SearchBar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        search: "",
        description: "",
        materials: [],
        minPrice: "",
        maxPrice: "",
        categories: [],
        inStockOnly: false,
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-md mx-auto">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="search">
                Recherche
              </label>
              <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="search" name="search" />
            </div>
            <div className="w-full px-3 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                Description
              </label>
              <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="description" name="description" />
            </div>
            <div className="w-full px-3 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="materials">
                Matériaux
              </label>
              <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" as="select" id="materials" name="materials" multiple>
                <option value="metal">Métal</option>
                <option value="wood">Bois</option>
                <option value="plastic">Plastique</option>
                <option value="glass">Verre</option>
              </Field>
            </div>
            <div className="w-1/2 px-3 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="minPrice">
                Prix minimum
              </label>
              <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" id="minPrice" name="minPrice" />
            </div>
            <div className="w-1/2 px-3 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maxPrice">
                Prix maximum
              </label>
              <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" id="maxPrice" name="maxPrice" />
            </div>
            <div className="w-full px-3 mb-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="categories">
            Catégories
          </label>
          <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" as="select" id="categories" name="categories" multiple>
            <option value="chambre">Chambre</option>
            <option value="cuisine">Cuisine</option>
            <option value="salledebain">Salle de bain</option>
            <option value="salon">Salon</option>
          </Field>
        </div>
        <div className="w-full px-3 mb-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inStockOnly">
            Uniquement en stock
          </label>
          <Field className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" id="inStockOnly" name="inStockOnly" />
        </div>
        <div className="w-full px-3 mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
            Rechercher
          </button>
        </div>
      </div>
    </Form>
  )}
</Formik>
)
}

export default SearchBar



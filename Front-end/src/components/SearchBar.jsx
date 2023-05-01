import React from "react";
import { Formik, Form, Field } from "formik";

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
        <Form>
          <div>
            <label htmlFor="search">Recherche</label>
            <Field type="text" id="search" name="search" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" />
          </div>
          <div>
            <label htmlFor="materials">Matériaux</label>
            <Field as="select" id="materials" name="materials" multiple>
              <option value="metal">Métal</option>
              <option value="wood">Bois</option>
              <option value="plastic">Plastique</option>
              <option value="glass">Verre</option>
            </Field>
          </div>
          <div>
            <label htmlFor="minPrice">Prix minimum</label>
            <Field type="number" id="minPrice" name="minPrice" />
          </div>
          <div>
            <label htmlFor="maxPrice">Prix maximum</label>
            <Field type="number" id="maxPrice" name="maxPrice" />
          </div>
          <div>
            <label htmlFor="categories">Catégories</label>
            <Field as="select" id="categories" name="categories" multiple>
            <option value="chambre">Chambre</option>
              <option value="cuisine">Cuisine</option>
              <option value="salleDeBain">Salle de bain</option>
              <option value="salon">Salon</option>
            </Field>
          </div>
          <div>
            <label htmlFor="inStockOnly">Uniquement en stock</label>
            <Field type="checkbox" id="inStockOnly" name="inStockOnly" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Rechercher
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;

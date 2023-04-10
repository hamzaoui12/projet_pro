import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  region: "",
  postalCode: "",
  country: "",
  phoneNumber: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Prénom est requis";
  }

  if (!values.lastName) {
    errors.lastName = "Nom est requis";
  }

  if (!values.address1) {
    errors.address1 = "Adresse est requise";
  }

  if (!values.city) {
    errors.city = "Ville est requise";
  }

  if (!values.region) {
    errors.region = "Région est requise";
  }

  if (!values.postalCode) {
    errors.postalCode = "Code postal est requis";
  }

  if (!values.country) {
    errors.country = "Pays est requis";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Numéro de téléphone est requis";
  }

  return errors;
};

const PaymentForm = () => {
  const handleSubmit = (values) => {
    // envoyer les données du formulaire à une API ou à un backend pour traitement
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="firstName">Prénom :</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" />
          </div>

          <div>
            <label htmlFor="lastName">Nom :</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" />
          </div>

          <div>
            <label htmlFor="address1">Adresse :</label>
            <Field type="text" name="address1" />
            <ErrorMessage name="address1" />
          </div>

          <div>
            <label htmlFor="address2">Adresse 2 :</label>
            <Field type="text" name="address2" />
            <ErrorMessage name="address2" />
          </div>

          <div>
            <label htmlFor="city">Ville :</label>
            <Field type="text" name="city" />
            <ErrorMessage name="city" />
          </div>

          <div>
            <label htmlFor="region">Région :</label>
            <Field type="text" name="region" />
            <ErrorMessage name="region" />
          </div>

          <div>
            <label htmlFor="postalCode">Code Postal :</label>
            <Field type="text" name="postalCode" />
            <ErrorMessage name="postalCode" />
          </div>

          <div>
            <label htmlFor="country">Pays :</label>
            <Field type="text" name="country" />
            <ErrorMessage name="country" />
          </div>

          <div>
            <label htmlFor="phoneNumber">Numéro de téléphone :</label>
            <Field type="text" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Valider
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;

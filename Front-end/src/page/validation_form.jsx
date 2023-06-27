import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Le prenom est requis"),
  lastName: Yup.string().required("Le nom est requis"),
  address: Yup.string().required("L'Adresse est requise"),
  city: Yup.string().required("La ville est requise"),
  region: Yup.string().required("La region est requise"),
  postalCode: Yup.string()
    .required("Le postal code est requis")
    .matches(/^\d{5}$/, "Le code postal doit contenir 5 chiffres"),
  country: Yup.string().required("Le pays est requis"),
  phoneNumber: Yup.string()
    .required("Le numero de telephone est requis")
    .matches(/^\d{10}$/, "Le numéro de téléphone doit contenir 10 chiffres"),
})

const ValidateForm = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
  }
  const [isFormValid, setIsFormValid] = useState(false)

  const validate = (values) => {
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => setIsFormValid(true))
      .catch(() => setIsFormValid(false))
  }


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post(`${process.env.REACT_APP_URL_ROUTE}/addresses`, {
        country: values.country,
        city: values.city,
        region: values.region,
        postalCode: values.postalCode,
      }, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      }
      )

      await axios.patch(`${process.env.REACT_APP_URL_ROUTE}/users/${loggedUser.id}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
      }, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })

      alert("Adresse et données utilisateur mises à jour avec succès")
      setSubmitting(false)
      navigate("/checkout")
    } catch (error) {
      console.log(error)
      setSubmitting(false)
    }
  }

  return (
    <div>
      <div
        className="flex items-center justify-center"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url(https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="max-w-md p-8 bg-white bg-opacity-75 rounded-lg shadow-lg border border-gray-300"
          style={{ width: "500px" }}
        >
          <h1 className="text-3xl font-bold mb-8">Livraison</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validate={validate}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-lg font-semibold"
                    >
                      Prenom:
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="firstName"
                        className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-lg font-semibold">
                      Nom:
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="lastName"
                        className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="address1" className="text-lg font-semibold">
                    Adresse :
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="address"
                      className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="text-lg font-semibold">
                      Ville:
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="city"
                        className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="region" className="text-lg font-semibold">
                      Region:
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="region"
                        className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                      />
                      <ErrorMessage
                        name="region"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postalCode"
                    className="text-lg font-semibold"
                  >
                    Code Postal :
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="postalCode"
                      className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className="text-red-500 mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="text-lg font-semibold">
                    Pays:
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="country"
                      className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500 mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="text-lg font-semibold"
                  >
                    Numero de telephone:
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="phoneNumber"
                      className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 mt-1"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className={`w-full py-2 px-4 btn-black-white font-semibold rounded-md ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""
                      } hover:bg-blue-700 focus:outline-none focus:bg-blue-700`}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Payement
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ValidateForm

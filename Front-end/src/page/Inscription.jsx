import React, { useState } from "react"
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "tailwindcss/tailwind.css"

const Registration = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  }

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Le prénom est requis"),
    lastName: Yup.string().required("Le nom de famille est requis"),
    email: Yup.string()
      .email("Email invalide")
      .required("L'adresse email est requise"),
    password: Yup.string()
      .required("Le mot de passe est requis")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{10,}$/,
        "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un caractère spécial, aucun signe égal (=) et doit comporter au moins 10 caractères"
      ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Les mots de passe doivent correspondre"
      )
      .required("La confirmation du mot de passe est requise"),
    phoneNumber: Yup.string()
      .matches(
        /^\d+$/,
        "Le numéro de téléphone doit contenir uniquement des chiffres"
      )
      .min(10, "Le numéro de téléphone doit comporter au moins 10 chiffres")
      .max(15, "Le numéro de téléphone ne doit pas dépasser 15 chiffres")
      .required("Le numéro de téléphone est requis")
  })

  const handleSubmit = (values) => {
    axios
      .post(`${process.env.REACT_APP_URL_ROUTE}/sign-up`, {
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        mail: values.email,
        phoneNumber: values.phoneNumber,
      })
      .then(function (response) {
        navigate("/Singin")
      })
  }

  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-800"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md mr-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Creer votre compte
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Field
                name="firstName"
                type="text"
                placeholder="Prenom"
                className="bg-transparent border border-gray-300 p-2 rounded-lg"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />

              <Field
                name="lastName"
                type="text"
                placeholder="Nom"
                className="bg-transparent border border-gray-300 p-2 rounded-lg"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />

              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-300 p-2 rounded-lg"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />

              <div className="relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  className="bg-transparent border border-gray-300 p-2 rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "Cacher" : "Montrer"}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />

              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirmez le mot de passe"
                className="bg-transparent border border-gray-300 p-2 rounded-lg"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />

              <Field
                name="phoneNumber"
                type="text"
                placeholder="Numéro de téléphone 0000000000"
                className="bg-transparent border border-gray-300 p-2 rounded-lg"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500"
              />

              <div className="flex items-center gap-2">
                <Field
                  type="checkbox"
                  name="privacyPolicy"
                  className="rounded-sm"
                />
                <label className="text-gray-700">
                  En créant un compte, je consens au traitement de mes données
                  personnelles.
                </label>
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Creer
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Registration

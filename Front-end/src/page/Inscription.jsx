import React, { useState } from "react"
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "tailwindcss/tailwind.css"

const Registration = () => {
  const { t } = useTranslation()
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  }

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t("registration.firstNameRequired")),
    lastName: Yup.string().required(t("registration.lastNameRequired")),
    email: Yup.string()
      .email(t("registration.invalidEmail"))
      .required(t("registration.emailRequired")),
    password: Yup.string()
      .required(t("registration.passwordRequired"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{10,}$/,
        t("registration.passwordComplexity")
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("registration.passwordMatch"))
      .required(t("registration.confirmPasswordRequired")),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, t("registration.phoneNumberDigitsOnly"))
      .min(10, t("registration.phoneNumberMinLength"))
      .max(15, t("registration.phoneNumberMaxLength"))
      .required(t("registration.phoneNumberRequired")),
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
          {t("registration.createAccount")}
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
                placeholder={t("registration.firstName")}
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
                placeholder={t("registration.lastName")}
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
                placeholder={t("registration.email")}
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
                  placeholder={t("registration.password")}
                  className="bg-transparent border border-gray-300 p-2 rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600"
                  onClick={toggleShowPassword}
                >
                  {showPassword
                    ? t("registration.hide")
                    : t("registration.show")}
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
                placeholder={t("registration.confirmPassword")}
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
                placeholder={t("registration.phoneNumber")}
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
                  {t("registration.consent")}
                </label>
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                {t("registration.create")}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Registration

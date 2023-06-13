import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link } from "react-router-dom"
import axios from "axios"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  region: Yup.string().required("Region is required"),
  postalCode: Yup.string()
    .required("postal code is required")
    .matches(/^\d{5}$/, "Le code postal doit contenir 5 chiffres"),
  country: Yup.string().required("Le pays est requis"),
  phoneNumber: Yup.string()
    .required("phone number is required")
    .matches(/^\d{10}$/, "Le numéro de téléphone doit contenir 10 chiffres"),
})

const ValidateForm = () => {
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
      // Make a POST request to the address API
      await axios.post("/addresses", {
        country: values.country,
        city: values.city,
        region: values.region,
        postalCode: values.postalCode,
      })

      // Make a PATCH request to the user API to update user data
      await axios.patch("/users/:id", {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        // Add other user data fields as needed
      })

      // Handle success or navigate to the next step
      alert("Address and user data updated successfully")
      // Navigate to the next step or show a success message

      setSubmitting(false)
    } catch (error) {
      // Handle error
      alert("Failed to update address and user data", error)
      // Show an error message to the user

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
                      First Name:
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
                      Last Name:
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
                    Address :
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
                      City:
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
                    Postal Code:
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
                    Country:
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
                    Phone Number:
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
                    <Link to="/checkout">
                      <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className={`w-full py-2 px-4 btn-black-white font-semibold rounded-md ${
                          !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                        } hover:bg-blue-700 focus:outline-none focus:bg-blue-700`}
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Payment
                      </button>
                    </Link>
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

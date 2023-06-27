import React, { useRef } from "react"
import { Formik, Field, ErrorMessage } from "formik"
import { Link } from "react-router-dom"

const ValidateForm = () => {
  const paymentPageRef = useRef()
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
  }

  const validate = (values) => {
    const errors = {}

    if (!values.firstName) {
      errors.firstName = "First name is required"
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required"
    }

    if (!values.address1) {
      errors.address1 = "Address is required"
    }

    if (!values.city) {
      errors.city = "City is required"
    }

    if (!values.region) {
      errors.region = "Region is required"
    }

    if (!values.postalCode) {
      errors.postalCode = "Postal code is required"
    }

    if (!values.country) {
      errors.country = "Country is required"
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required"
    }

    return errors
  }

  const handleSubmit = (values) => {
    localStorage.removeItem("userData")
    localStorage.setItem("userData", JSON.stringify(values))
    paymentPageRef.current.click()
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
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, handleSubmit }) => (
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                    Address 1:
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="address1"
                      className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <ErrorMessage
                      name="address1"
                      component="div"
                      className="text-red-500 mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address2" className="text-lg font-semibold">
                    Address 2:
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="address2"
                      className="w-full text-black py-1 pl-2 pr-8 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <ErrorMessage
                      name="address2"
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
                  <label htmlFor="postalCode" className="text-lg font-semibold">
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

                {/* <Link to="/checkout"> */}
                {/* {" "} */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 btn-black-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Payment
                </button>
                {/* </Link> */}
                <Link
                  to="/payment"
                  ref={paymentPageRef}
                  style={{ opacity: "0" }}
                ></Link>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ValidateForm

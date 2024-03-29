import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { MdCheck } from "react-icons/md"

const PasswordResetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address"),
})

const PasswordResetPage = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const [resetEmail, setResetEmail] = useState("")

  const handleSubmit = (values, { setSubmitting }) => {
    setResetEmail("")
    setSuccessMessage("Password reset successful!")
    setSubmitting(false)
    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-gray-100"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-md w-full p-6 bg-white bg-opacity-70 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Forgot Password
          </h2>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={PasswordResetSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <Field
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  ) : null}
                </div>
                <button
                  className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 flex items-center justify-center"
                  type="submit"
                  disabled={resetEmail === ""}
                >
                  Reset Password
                </button>
                {successMessage && (
                  <div className="text-green-500 text-sm mt-2 flex items-center">
                    <MdCheck className="mr-1" />
                    {successMessage}
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default PasswordResetPage

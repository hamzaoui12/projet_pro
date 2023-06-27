import React, { useState } from "react"
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { logToken } from "../Storage/logToken"
import { Link } from "react-router-dom"

const Connexion = () => {
  const initialValues = {
    mail: "",
    password: "",
  }
  const [loginError, setLoginError] = useState("")
  const [loginSuccess, setLoginSuccess] = useState(false)

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3001/sign-in", {
        mail: values.mail,
        password: values.password,
      })
      .then((res) => {
        logToken.logIn(res.data.result, res.data.user)
        setLoginSuccess(true)
        setLoginError("")
      })
      .catch((error) => {
        console.log(error)
        setLoginError("Failed to log in. Please check your credentials.")
        setLoginSuccess(false)
      })
  }

  const validationSchema = Yup.object().shape({
    mail: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(10, "Password must be at least 10 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter and one special character"
      ),
  })

  return (
    <div className="w-full h-screen flex items-center">
      <div className="relative w-full sm:w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-3xl sm:text-6xl text-white font-bold my-4 tracking-wide leading-tight">
            MAKE YOUR <span className="text-[#FED7AA]">FURNITURE</span> DREAMS A{" "}
            <span className="text-[#FED7AA]">REALITY</span>
          </h1>
          <p className="text-lg sm:text-2xl text-black font-normal">
            Logging in to get more offers on our articles!
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
          className="w-full h-full object-cover"
          alt="Furniture"
        />
      </div>
      <div className="w-full sm:w-1/2 h-full bg-[#F5f5F5] flex flex-col p-5 sm:p-10 justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="w-full flex flex-col">
              <div className="w-full flex flex-col mb-3">
                <h3 className="text-2xl sm:text-6xl font-bold mb-2 sm:mb-4">Login</h3>
                <p className="text-base sm:text-lg mb-1 sm:mb-2">
                  Welcome Back! Please enter your details.
                </p>
              </div>
              <div className="w-full flex flex-col">
                <Field
                  name="mail"
                  type="email"
                  placeholder="Email"
                  className="w-full text-black py-2 sm:py-4 bg-none border-black outline-none focus:outline-none"
                />
                <ErrorMessage
                  name="mail"
                  component="div"
                  className="text-red-500 text-sm sm:text-base"
                />
              </div>
              <div className="w-full flex flex-col my-2 sm:my-4">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full text-black py-2 sm:py-4 bg-none border-black outline-none focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm sm:text-base"
                />
              </div>
              {loginError && (
                <div className="w-full flex flex-col mb-2 sm:mb-4">
                  <p className="text-red-500 text-sm sm:text-base">{loginError}</p>
                </div>
              )}
              {loginSuccess && (
                <div className="w-full flex flex-col mb-2 sm:mb-4">
                  <p className="text-green-500 text-sm sm:text-base">Login successful!</p>
                </div>
              )}
              <div className="w-full flex items-end justify-end mb-2 sm:mb-4">
                <Link to="/Password">
                  <p className="text-sm sm:text-base font-medium whitespace-normal cursor-pointer underline underline-offset-2">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              <div className="w-full flex flex-col my-2 sm:my-6">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full text-white m-1 bg-black rounded-md p-2 sm:p-4 text-center flex items-center justify-center text-lg sm:text-xl font-semibold"
                  >
                    Log in
                  </button>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-sm sm:text-base font-normal text-[#060606]">
                  <Link to="/registration">
                    Don't have an account?{" "}
                    <span className="font-semibold underline underline-offset">
                      Register
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Connexion

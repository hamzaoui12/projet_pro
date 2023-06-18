import React from "react"
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { logToken } from "../Storage/logToken"
import { BrowserRouter as Router, Link } from "react-router-dom"

const Connexion = () => {
  const initialValues = {
    mail: "",
    password: "",
  }
  const handleSubmit = (values) => {
    const response = axios
      .post("http://localhost:3300/sign-in/", {
        mail: values.mail,
        password: values.password,
      })
      .then((res) => {
        logToken.logIn(res.data.result, res.data.user)
      })
  }
  const validationSchema = Yup.object().shape({
    mail: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{10,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 10 characters long"
      ),
  })

  return (
    <div className="w-full h-screen flex items-center">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-6xl text-white font-bold my-4 tracking-wide leading-tight">
            MAKE YOUR <span className="text-[#FED7AA]">FURNITURE</span> DREAMS A{" "}
            <span className="text-[#FED7AA]">REALITY</span>
          </h1>
          <p className="text-2xl text-black font-normal">
            Logging in to get more offers on our articles !
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full bg-[#F5f5F5] flex flex-col p-20 justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="w-full flex flex-col">
              <div className="w-full flex flex-col mb-5">
                <h3 className="text-6xl font-bold mb-4 ">Login</h3>
                <p className="text-base mb-2  ">
                  Welcome Back! Please enter your details.
                </p>
              </div>
              <div className="w-full flex flex-col">
                <Field
                  name="mail"
                  type="email"
                  placeholder="Email"
                  className="w-full text-black py-4 bg-none border-black outline-none focus:outline-none"
                />
                <ErrorMessage
                  name="mail"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-full flex flex-col my-4">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full text-black py-4 bg-none border-black outline-none focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-full flex items-end justify-end mb-4">
                <p className="text-base font-medium whitespace-normal cursor-pointer underline underline-offset-2">
                  Forgot Password?
                </p>
              </div>
              <div className="w-full flex flex-col my-6">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full text-white m-1 bg-black rounded-md p-4 text-center flex items-center justify-center text-xl font-semibold"
                  >
                    Log in
                  </button>
                </div>
                <div className="flex justify-center">
                  <Link to="/registration">
                    {" "}
                    <button className="w-full text-[#060606] m-1 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center text-xl font-semibold">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-base font-normal text-[#060606]">
                  Don't have an account?{" "}
                  <span className="font-semibold underline underline-offset">
                    Register
                  </span>
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

import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "tailwindcss/tailwind.css";

const Registration = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{10,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 10 characters long"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Phone Number must only contain digits")
      .min(10, "Phone Number must be at least 10 digits")
      .max(15, "Phone Number must not exceed 15 digits")
      .required("Phone Number is required")
  });

  const handleSubmit = (values) => {
    axios.post(`${process.env.REACT_APP_URL_ROUTE}/sign-up`, {
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        mail: values.email,
        phoneNumber: values.phoneNumber
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-800"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md mr-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Create an Account
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
                placeholder="First Name"
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
                placeholder="Last Name"
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
                  placeholder="Password"
                  className="bg-transparent border border-gray-300 p-2 rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "Hide" : "Show"}
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
                placeholder="Confirm Password"
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
                placeholder="Phone Number 0000000000"
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
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Create
              </button>
            </form>
          )}
        </Formik>
        <p className="mt-4 text-gray-700">
          Already have an account?{" "}
          <a className="text-black mt-4 hover:text-blue-200" href="#">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
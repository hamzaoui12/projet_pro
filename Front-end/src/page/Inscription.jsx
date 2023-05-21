import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const userExists = checkIfUserExists(username);
    const emailExists = checkIfEmailExists(email);

    if (userExists || emailExists) {
      setErrorMessage(
        "An account with this username or email already exists."
      );
    } else {
      // Handle form submission
    }
  };

  const checkIfUserExists = (username) => {
    return false;
  };

  const checkIfEmailExists = (email) => {
    return false;
  };

  return (
    <div
      className="flex items-center justify-end h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md mr-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Create an Account</h1>
        <form className="flex flex-col gap-4">
          <input
            className="bg-transparent border border-gray-300 p-2 rounded-lg"
            placeholder="First Name"
          />
          <input
            className="bg-transparent border border-gray-300 p-2 rounded-lg"
            placeholder="Last Name"
          />
          <input
            className="bg-transparent border border-gray-300 p-2 rounded-lg"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="bg-transparent border border-gray-300 p-2 rounded-lg"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="bg-transparent border border-gray-300 p-2 rounded-lg"
            placeholder="Password"
          />
          <input
            className="bg-transparent border border-gray-300 p-2 rounded-lg"
            placeholder="Confirm Password"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded-sm" />
            <label className="text-gray-700">
              By creating an account, I consent to the processing of my personal data
              in accordance with the privacy policy.
            </label>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200">
            Create
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        <p className="mt-4 text-gray-700">
          Already have an account?{" "}
          <a className="text-blue-800 mt-4 hover:text-blue-600" href="#">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;

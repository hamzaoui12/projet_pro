import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      setErrorMessage("Your email is not valid.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!isChecked) {
      setErrorMessage("Please agree to the privacy policy.");
      return;
    }

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage("Please complete all fields.");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("Account created successfully!");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-800"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Create an Account</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="bg-white text-gray-900 border border-gray-300 p-2 rounded-lg"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
          <input
            className="bg-white text-gray-900 border border-gray-300 p-2 rounded-lg"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
          <input
            className="bg-white text-gray-900 border border-gray-300 p-2 rounded-lg"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className="bg-white text-gray-900 border border-gray-300 p-2 rounded-lg"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            className="bg-white text-gray-900 border border-gray-300 p-2 rounded-lg"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <div className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              className="rounded-sm"
              required
              onChange={() => setIsChecked(!isChecked)}
            />
            <label className="text-gray-900">
              By creating an account, I consent to the processing of my personal data
              in accordance with the privacy policy.
            </label>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200">
            Create
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        <p className="mt-4 text-black ">
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

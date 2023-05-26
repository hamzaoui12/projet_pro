import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "tailwindcss/tailwind.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation du formulaire

    if (email && subject && message) {
      // Envoi du formulaire de contact
      setSuccessMessage("Votre message a été envoyé avec succès !");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setErrorMessage("Veuillez remplir tous les champs du formulaire.");
    }
  };

  return (
   <div><Navbar/>
    
    <div
    
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            className="border border-gray-300 p-2 rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="border border-gray-300 p-2 rounded-lg"
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <textarea
            className="border border-gray-300 p-2 rounded-lg h-60 resize-none"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200">
            Send
          </button>
        </form>
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
    </div> 
  );
};

export default Contact;

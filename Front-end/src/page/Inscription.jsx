import React, { useState } from "react"
import "tailwindcss/tailwind.css"

const Inscription = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    // Vérification du nom d'utilisateur et de l'adresse e-mail dans la base de données
    const userExists = checkIfUserExists(username)
    const emailExists = checkIfEmailExists(email)

    if (userExists || emailExists) {
      setErrorMessage(
        "Un compte avec ce nom d'utilisateur ou cette adresse e-mail existe déjà."
      )
    } else {
      // Traitement de la soumission du formulaire
    }
  }

  const checkIfUserExists = (username) => {
    // Code pour vérifier si le nom d'utilisateur existe déjà dans la base de données
    return false
  }

  const checkIfEmailExists = (email) => {
    // Code pour vérifier si l'adresse e-mail existe déjà dans la base de données
    return false
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Créer un compte</h1>
      <form className="flex flex-col gap-4 w-96 bg-white p-6 rounded-lg shadow-md">
        <input
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Nom"
        />
        <input
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Prénom"
        />
        <input
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Mot de passe"
        />
        <input
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Confirmation du mot de passe"
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" className="rounded-sm" />
          <label className="text-gray-700">
            En créant un compte, je consens au traitement de mes données
            personnelles conformément à la politique de confidentialité
          </label>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200">
          Créer
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      <p className="mt-4 text-gray-700">
        Vous avez déjà un compte ?{" "}
        <a className="text-blue-800 mt-4 hover:text-blue-600" href="#">
          Connectez-vous ici
        </a>
      </p>
    </div>
  )
}

export default Inscription

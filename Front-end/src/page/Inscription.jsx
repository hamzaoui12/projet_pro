import React, { useState } from "react";

const Inscription = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full h-screen flex items-center" style={{ backgroundColor: "#F5F2E8" }}>
      <div className="w-1/2 mx-auto bg-white p-8 rounded-lg shadow-lg relative">
        <h1 className="text-4xl font-semibold mb-8 text-center">Créer un compte</h1>
        <form className="flex flex-col space-y-4">
          <input className="px-4 py-2 border border-gray-300 rounded-lg outline-none" placeholder="Nom" />
          <input className="px-4 py-2 border border-gray-300 rounded-lg outline-none" placeholder="Prénom" />
          <input className="px-4 py-2 border border-gray-300 rounded-lg outline-none" placeholder="Nom d'utilisateur" />
          <input className="px-4 py-2 border border-gray-300 rounded-lg outline-none" placeholder="Email" />
          <input className="px-4 py-2 border border-gray-300 rounded-lg outline-none" placeholder="Mot de passe" />
          <input className="px-4 py-2 border border-gray-300 rounded-lg outline-none" placeholder="Confirmation du mot de passe" />
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="text-sm text-gray-600">
              En créant un compte, je consens au traitement de mes données personnelles données conformément à la politique de confidentialité.
            </p>
          </div>
          <button className="w-full bg-black text-white rounded-md py-3 font-semibold hover:bg-gray-800">
            Créer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inscription;

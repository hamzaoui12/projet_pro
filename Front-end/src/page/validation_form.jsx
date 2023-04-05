import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
      <label className="block mb-2">
        <span className="text-gray-700">Prénom :</span>
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Nom :</span>
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Adresse 1 :</span>
        <input
          type="text"
          value={address1}
          onChange={(event) => setAddress1(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Adresse 2 :</span>
        <input
          type="text"
          value={address2}
          onChange={(event) => setAddress2(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Ville :</span>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Région :</span>
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Code postal :</span>
        <input
          type="text"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Pays :</span>
        <input
          type="text"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Numéro de téléphone :</span>
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded mt-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
        Payer
      </button>
    </form>
    );
}

export default Form;    
         

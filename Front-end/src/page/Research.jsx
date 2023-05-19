import React, { useState } from 'react';
import Navbar from "./components/Navbar";

const research = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    
    <div className="research" class="w-full bg-[#F5F5DC]">
      <Navbar/>
      <h1 class="text-2xl font-bold text-center  p-4">Rechercher</h1>
      
      <div class="flex justify-center w-screen">
          <button class="text-black font-bold py-2 px-4 rounded flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
        <span onClick={openModal} >Filtrer</span>
      </button>
      <div class="flex items-center">
        <input type="text" class="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-8 sm:h-10 md:h-12 text-sm sm:text-base border-gray-400 border-2 px-2 py-1 rounded-md mr-2 sm:mr-4" placeholder="Rechercher..."></input>
        <button class="inline-flex items-center py-2 px-4 rounded-md bg-[#D2A36D] text-white hover:bg-blue-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
        </button>
      </div>   
      
    </div>
        <h1 class="text-2xl font-bold text-center p-4">Résultat(s)</h1>
        <div class="flex justify-center items-center ">
      <button class="text-black py-2 px-4 rounded flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
        <span>Trier par prix</span>
      </button>
      
    </div>

    <div class="grid grid-cols-1 gap-4 p-4 lg:grid-cols-3">
        <div><img 
  src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
  class="h-auto max-w-full border-4 border-[#D2A36D] rounded-md"
  alt="..." /><div class="flex justify-between"><h1 class="font-bold uppercase text-sm md:text-lg lg:text-xl xl:text-2xl">Nom Produit</h1>
  <h1 class="text-sm md:text-lg lg:text-xl xl:text-2xl">1 200€</h1>
  </div></div>
        <div><img
  src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
  class="h-auto max-w-full border-4 border-[#D2A36D] rounded-md"
  alt="..." /><div class="flex justify-between"><h1 class="font-bold uppercase">Nom Produit</h1>
  <h1 class="font-bold uppercase">1 200€</h1>
  </div></div>
        <div><img
  src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
  class="h-auto max-w-full border-4 border-[#D2A36D] rounded-md"
  alt="..." /><div class="flex justify-between"><h1 class="font-bold uppercase">Nom Produit</h1>
  <h1 class="font-bold uppercase">1 200€</h1>
  </div></div>
        <div><img
  src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
  class="h-auto max-w-full border-4 border-[#D2A36D] rounded-md"
  alt="..." /><div class="flex justify-between"><h1 class="font-bold uppercase">Nom Produit</h1>
  <h1 class="font-bold uppercase">1 200€</h1>
  </div></div>
        <div><img
  src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
  class="h-auto max-w-full border-4 border-[#D2A36D] rounded-md"
  alt="..." /><div class="flex justify-between"><h1 class="font-bold uppercase">Nom Produit</h1>
  <h1 class="font-bold uppercase">1 200€</h1>
  </div></div>
        <div><img
  src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
  class="h-auto max-w-full border-4 border-[#D2A36D] rounded-md"
  alt="..." /><div class="flex justify-between"><h1 class="font-bold uppercase">Nom Produit</h1>
  <h1 class="font-bold uppercase">1 200€</h1>
  </div></div>
      </div>
      {isOpen && (
        <div className="fixed z-10 w-screen inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg z-20 p-8">
              <h2 className="text-2xl font-bold mb-4">Filtrer</h2>
              <div class="bg-[#F5F5DC] border border-gray-200 rounded-lg p-4 m-4">
                <div class="flex justify-between items-center">
                  <h3 class="text-gray-700 font-semibold">Prix</h3>
                  <span class="text-gray-500 text-sm">en €</span>
                </div>
                <div class="mt-2">
                  <label class="block text-gray-700 font-semibold mb-2" for="price-min">Prix minimum :</label>
                  <input class="border border-gray-400 rounded-md py-1 px-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" type="number" id="price-min" name="price-min" placeholder="Entrez un prix minimum"></input>
                </div>
                <div class="mt-4">
                  <label class="block text-gray-700 font-semibold mb-2" for="price-max">Prix maximum :</label>
                  <input class="border border-gray-400 rounded-md py-1 px-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" type="number" id="price-max" name="price-max" placeholder="Entrez un prix maximum"></input>
                </div>
              </div>
              <div class="bg-[#F5F5DC] border border-gray-200 rounded-lg p-4 m-4">
                <div class="mt-2">
                  <label class="block text-gray-700 font-semibold mb-2">Sélectionnez les matériaux :</label>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <input type="checkbox" id="material-1" name="material-1" class="form-checkbox h-4 w-4 text-green-600 rounded"></input>
                      <label for="material-1" class="ml-2 block text-gray-700">Matériau 1</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="material-2" name="material-2" class="form-checkbox h-4 w-4 text-green-600 rounded"></input>
                      <label for="material-2" class="ml-2 block text-gray-700">Matériau 2</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="material-3" name="material-3" class="form-checkbox h-4 w-4 text-green-600 rounded"></input>
                      <label for="material-3" class="ml-2 block text-gray-700">Matériau 3</label>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <label class="block text-gray-700 font-semibold mb-2">Stock</label>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <input type="checkbox" id="material-1" name="material-1" class="form-checkbox h-4 w-4 text-green-600 rounded"></input>
                      <label for="material-1" class="ml-2 block text-gray-700">En stock</label>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                <div class="flex items-center">
                  <label for="date" class="block text-gray-700 font-semibold mb-2 mr-2">Date d'ajout:</label>
                  <input type="date" id="date" name="date" class="border border-gray-400 rounded py-2 px-4" />
                  </div>
                </div>
                <div class="mt-2">
                  <label class="block text-gray-700 font-semibold mb-2">Sélectionnez des categories :</label>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <input type="checkbox" id="material-1" name="material-1" class="form-checkbox h-4 w-4 text-green-600 rounded"></input>
                      <label for="material-1" class="ml-2 block text-gray-700">Catégorie 1</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="material-2" name="material-2" class="form-checkbox h-4 w-4 text-green-600 rounded"></input>
                      <label for="material-2" class="ml-2 block text-gray-700">Categorie 2</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="material-3" name="material-3" class="form-checkbox h-4 w-4 text-green-600 rounded"></input>
                      <label for="material-3" class="ml-2 block text-gray-700">Categorie 3</label>
                    </div>
                  </div>
                </div>
              </div>


              <button onClick={closeModal} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}



    </div>
    
  );
};

export default research

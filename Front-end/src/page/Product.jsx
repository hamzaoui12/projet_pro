import React from "react"

const product = () => {
  return (
    <div className="app" class="bg-[#F5F5DC]">
      <div class="flex lg:space-x-96">
        <div class="m-20 bg-black max-w-sm h-48 lg:h-96 lg:w-96 rounded overflow-hidden shadow-lg ">
          <slot>
            <div>
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fully.com%2Ffr-eu%2Fbureau-debout-jarvis-en-l.html&psig=AOvVaw2LIhKQTN41SvyKlYRlSJPA&ust=1678721418367000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCbo-Ha1v0CFQAAAAAdAAAAABAI"
                class="h-auto max-w-full"
                alt="..."
              />
            </div>
          </slot>
        </div>

        <div class="lg:max-w-sm p-6 lg:m-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex space-x-8">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              1 200€
            </h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BUREAU JARVIS
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            En stock
          </p>
          <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            numquam voluptate quod vitae excepturi odio obcaecati? Sit
            laudantium id dignissimos necessitatibus autem obcaecati non,
            praesentium debitis. Rem officia veniam consectetur. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Excepturi porro eos
            iste blanditiis autem tempore ullam, numquam reiciendis, mollitia
            commodi nobis error! Blanditiis, voluptatem tempore. Et, cupiditate.
            A, libero alias?
          </h5>
          <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            AJOUTER AU PANIER
          </div>
        </div>
      </div>
      <div class="font-bold p-4 text-center">PRODUITS SIMILAIRES</div>
      <div class="grid grid-cols-3 gap-4 p-4">
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.x1-6X1rg49jF23q0ztlKZAHaEe?pid=ImgDet&rs=1"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
      </div>
    </div>
  )
}

export default product

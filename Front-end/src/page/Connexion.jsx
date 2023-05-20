import React from "react";

const Connexion = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-6xl text-white font-bold my-4 tracking-wide leading-tight">
            MAKE YOUR <span className="text-[#FED7AA]">FURNITURE</span> DREAMS A <span className="text-[#FED7AA]">REALITY</span>
          </h1>
          <p className="text-2xl text-black font-normal">Logging in to get more offers on our articles !</p>
        </div>
        <img src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#F5f5F5] flex flex-col p-20 justify-center">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-5">
            <h3 className="text-6xl font-bold mb-4 ">Login</h3>
            <p className="text-base mb-2  ">Welcome Back! Please enter your details.</p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-4 bg-none border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-4 bg-none border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex items-end justify-end mb-4">
            <p className="text-base font-medium whitespace-normal cursor-pointer underline underline-offset-2">Forgot Password?</p>
          </div>
          <div className="w-full flex flex-col my-6">
            <div className="flex justify-center">
              <button className="w-full text-white m-1 bg-black rounded-md p-4 text-center flex items-center justify-center text-xl font-semibold">
                Log in
              </button>
            </div>
            <div className="flex justify-center">
              <button className="w-full text-[#060606] m-1 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center text-xl font-semibold">
                Register
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-base font-normal text-[#060606]">
              Don't have an account? <span className="font-semibold underline underline-offset">Register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;

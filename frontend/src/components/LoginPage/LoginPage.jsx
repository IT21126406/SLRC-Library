import React from "react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 rounded-[16px]">
      <div className="w-full max-w-md p-8 rounded-md bg-red-700 text-white shadow-lg">
        <div className="text-center mb-6">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <Image 
              src="/images/rupavahini logo.png" 
              alt="Rupavahini Logo" 
              width={170} 
              height={170}
              className="rounded-full"
            />
          </div>

          <h1 className="text-2xl font-semibold">Library System</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 rounded-md bg-gray-100 text-black 
                         focus:bg-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400
                         focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-md bg-gray-100 text-black 
                         focus:bg-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400
                         focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-2 rounded-md bg-yellow-300 text-black font-medium 
                         hover:bg-white transition duration-200"
            >
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

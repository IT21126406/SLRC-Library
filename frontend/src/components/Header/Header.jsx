"use client";
import * as React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-3.5 w-full bg-rose-800 h-[55px] max-md:px-6 max-md:py-3.5 max-sm:px-4 max-sm:py-3.5">
      <img
        src="/images/rupavahini logo.png"
        className="h-6 w-[180px] max-md:h-5 max-md:w-[150px] max-sm:h-[15px] max-sm:w-[120px]"
        alt="Logo"
      />
      <div className="flex gap-2.5 items-center">
        <img
          src="/images/user logo.png"
          className="h-[38px] w-[38px]"
          alt="User icon"
        />
        <p className="text-x1 font-semibold text-white">User</p>
        <button className="px-4 py-1.5 text-base font-semibold text-black bg-red-200 rounded-lg max-sm:px-2 max-sm:py-1 max-sm:text-sm">
          LogOut
        </button>
      </div>
    </header>
  );
}

export default Header;

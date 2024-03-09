import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
const link = ["home", "work", "skills", "about"];
const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <header className="flex justify-between z-50 shadow-md fixed w-full shadow-slate-500 bg-white px-2 sm:px-4 md:px-10 items-center flex-row py-4 sm:py-4 duration-200 ">
      <h1 className="font-bold flex  sm:flex-row duration-200 text-xs sm:text-base gap-2 md:text-xl">
        <span>UIUX</span>
        <span> DESIGNER</span>
      </h1>

      {/* desktop Nav */}
      <nav>
        <section className="hidden sm:block">
          <nav className="flex  flex-row gap-2 mr-10">
            {link.map((li, i) => {
              return (
                <a
                  href={`#${li}`}
                  className="font-semibold hover:bg-black hover:text-white px-4 py-2 capitalize list-none text-sm cursor-pointer"
                  key={i}
                >
                  {li}
                </a>
              );
            })}
          </nav>
        </section>
        <small
          onClick={() => setopen(!open)}
          className="sm:hidden block cursor-pointer"
        >
          {open ? <FaXmark /> : <GiHamburgerMenu />}
        </small>
      </nav>
      {/* mobile Nav */}
      {open && (
        <section className="fixed sm:hidden bg-black text-white top-12 left-0 right-0 h-fit">
          <nav className="flex pb-4 flex-col gap-2">
            {link.map((li, i) => {
              return (
                <a
                  href={`#${li}`}
                  onClick={() => setopen(false)}
                  className=" font-semibold hover:bg-teal-500 hover:pl-6 duration-300 hover:text-white px-4 py-2 capitalize list-none text-sm cursor-pointer"
                  key={i}
                >
                  {li}
                </a>
              );
            })}
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;

import React from "react";
const link = ["home", "work", "skills", "about"];
const Header = () => {
  return (
    <header className="flex z-50 shadow-md fixed w-full shadow-slate-500 bg-white px-2 sm:px-4 md:px-10 flex-row py-2 sm:py-4 md:p-6 duration-200 ">
      <h1 className="font-bold flex flex-col sm:flex-row duration-200 text-xs sm:text-base sm:gap-2 md:text-xl">
        <span>UIUX</span>
        <span> DESIGNER</span>
      </h1>
      <section className="hidden sm:block">
        <nav className="flex  flex-row gap-6 ml-32">
          {link.map((li, i) => {
            return (
              <a
                href={`#${li}`}
                className="font-semibold capitalize list-none text-sm cursor-pointer"
                key={i}
              >
                {li}
              </a>
            );
          })}
        </nav>
      </section>
    </header>
  );
};

export default Header;

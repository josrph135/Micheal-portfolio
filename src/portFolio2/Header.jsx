import React, { useState } from "react";
import { Links } from "./data";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="fixed  md:hidden top-0 right-0 left-0 py-2 px-4 w-full  z-[500]">
      {/* *****mobile nav****** */}
      <div
        onClick={() => setShow(!show)}
        className="ml-auto z-[100] w-[50px] flex justify-center relative cursor-pointer items-center p-1 rounded-full h-[50px] bg-black/80 "
      >
        <div className="absolute top-1 ">
          {show ? (
            <span className="text-primary font-bold z-[1200] relative inline-block">
              X
            </span>
          ) : (
            <span className="w-[24px] z-[1200] h-[4px] relative inline-block bg-primary before:content-[''] after:content-[''] after:absolute after:w-[60%] after:right-0 after:h-[4px] after:bg-primary before-w-[60%] before:h-[4px] before:-translate-y-2 after:translate-y-2 before:absolute before:bg-primary before:w-[60%]"></span>
          )}
        </div>

        <ul
          className={`fixed top-0 left-0 transition-all right-0 bottom-0 h-screen bg-white text-black z-[999] flex flex-col justify-center duration-300 font-semibold items-center ${
            show
              ? "opacity-100 translate-x-0 translate-y-0"
              : " opacity-0 translate-x-[100%] -translate-y-[100%]"
          }`}
        >
          {Links.map((Link, i) => {
            return (
              <li
                key={i}
                className="text-[24px] hover:text-primary mb-3 last:mb-0"
              >
                <a
                  className="text-[24px] font-semibold flex flex-row items-center gap-4 tracking-wider cursor-pointer hover:text-primary capitalize duration-200 text-black"
                  href={`#${Link.heading}`}
                >
                  {Link.icon && (
                    <span className="text-primary">
                      <Link.icon />
                    </span>
                  )}
                  <span>{Link.heading}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;

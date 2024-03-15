import React, { useState } from "react";
import { TiMessages } from "react-icons/ti";

const Contact = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      {!open && (
        <section
          className="fixed bottom-8 right-5 animate-bounce text-2xl sm:text-4xl bg-black/60 duration-200 z-30  p-2 rounded-full cursor-pointer text-teal-500"
          onClick={() => setopen(!open)}
        >
          <TiMessages />
        </section>
      )}
      {open && (
        <div
          id="contact"
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 pt-8 z-20 rounded-md sm:pt-20 overflow-scroll h-fit my-4 mx-auto bg-teal-500 m-auto md:pl-20  p-4 "
        >
          <h1 className="header  text-center text-sm text-white">Contact</h1>
          <p
            onClick={() => setopen(false)}
            className="absolute sm:top-20  right-7 top-10 hover:rotate-180 duration-200 text-white cursor-pointer"
          >
            X
          </p>
          <p className="text-white text-center text font-normal ">
            I'm available for work and open to any ideas of cooperation.
          </p>
          <form
            action="https://getform.io/f/pbgkxzkb"
            method="POST"
            encType="multipart/form-data"
            className="sm:w-1/2 mx-auto text-white sm:mt-4 grid sm:grid-cols-2 gap-2 sm:gap-4 w-full text-xs md:text-sm"
          >
            <div className=" w-full col-span-1">
              <div className=" flex flex-col gap-1">
                <label className="uppercase text text-[12px] font-semibold">
                  Name
                </label>
                <input
                  className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                  type="text"
                  placeholder=""
                  name="name"
                />
              </div>
              <div className="gap-1 flex flex-col">
                <label className="uppercase text text-[12px] font-semibold">
                  Phone Number
                </label>
                <input
                  className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                  type="text"
                  placeholder=""
                  name="phone"
                />
              </div>
              <div className="gap-1 flex flex-col">
                <label className="uppercase text text-[12px] font-semibold">
                  Email
                </label>
                <input
                  className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                  type="email"
                  placeholder=""
                  name="email"
                />
              </div>
            </div>

            <div className="w-full col-span-1">
              <div className=" flex gap-1 flex-col">
                <label className="uppercase text text-[12px] font-semibold">
                  Subject
                </label>
                <input
                  className=" border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                  type="text"
                  placeholder=""
                  name="subject"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label className="uppercase text text-[12px] font-semibold">
                  Message
                </label>
                <textarea
                  className=" border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                  name="message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className=" col-span-2 flex flex-row justify-center items-center">
              <button className=" bg-gradient-to-r from-black hover:to-black hover:from-teal-600 to-teal-600 mt-4 w-6/12 sm:w-fit  p-2 rounded-lg text-white whitespace-nowrap font-semibold">
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;

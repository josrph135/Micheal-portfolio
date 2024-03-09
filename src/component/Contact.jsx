import React, { useState } from "react";
import { TiMessages } from "react-icons/ti";

const Contact = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <section
        className="fixed bottom-8 right-5 animate-bounce text-4xl bg-black/60 z-30  p-2 rounded-full text-teal-500"
        onClick={() => setopen(!open)}
      >
        <TiMessages />
      </section>
      {open && (
        <div
          id="contact"
          className="fixed top-0 left-0 right-0 bottom-0 pt-12 bg-black/80 py-6 overflow-y-hidden"
        >
          <div className="pt-4 rounded-md  my-4 mx-auto bg-teal-500 py-6 m-auto md:pl-20 p-4 ">
            <h1 className="font-semibold text-lg md:text-xl duration-200 pb-2 md:pb-6 header text-center text-white">
              Contact
            </h1>
            <p className="text-white text-center text font-normal ">
              I'm available for work and open to any ideas of cooperation.
            </p>
            <form
              action="https://getform.io/f/0e78ef00-9981-49bd-ae32-63dd74b73f15"
              method="POST"
              encType="multipart/form-data"
              className=" sm:w-full mx-auto text-white mt-4 grid md:grid-cols-2 gap-4 w-full text-xs md:text-sm"
            >
              <div className=" w-full col-span-1 ">
                <div className=" flex flex-col">
                  <label className="uppercase text text-[12px] font-semibold pb-2">
                    Name
                  </label>
                  <input
                    className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                    type="text"
                    placeholder=""
                    name="name"
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="uppercase text text-[12px] font-semibold py-2">
                    Phone Number
                  </label>
                  <input
                    className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                    type="text"
                    placeholder=""
                    name="phone"
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="uppercase text text-[12px] font-semibold py-2">
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

              <div className="w-full col-span-1 ">
                <div className=" flex flex-col">
                  <label className="uppercase text text-[12px] font-semibold py-2">
                    Subject
                  </label>
                  <input
                    className=" border-[1px] rounded-lg py-1 pl-4 flex border-gray-300 outline-none text-black"
                    type="text"
                    placeholder=""
                    name="subject"
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="uppercase text text-[12px] font-semibold py-2">
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
                <button className=" bg-gradient-to-r from-black hover:to-black hover:from-teal-600 to-teal-600 mt-4 w-6/12 sm:w-1/3  p-2 rounded-lg text-white font-semibold">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

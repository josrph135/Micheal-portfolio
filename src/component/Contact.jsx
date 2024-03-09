import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full mx-auto bg-secondary-0">
      <div className=" max-w-[1040px] m-auto md:pl-20 p-4 ">
        <h1 className="header font-semibold text-center text-black">Contact</h1>
        <p className=" text-center text font-normal ">
          I'm available for work and open to any ideas of cooperation.
        </p>
        <form
          action="https://getform.io/f/0e78ef00-9981-49bd-ae32-63dd74b73f15"
          method="POST"
          encType="multipart/form-data"
          className="w-3/5 mx-auto mt-4 text-xs md:text-sm"
        >
          <div className=" grid md:grid-cols-2 gap-4 w-full ">
            <div className=" flex flex-col">
              <label className="uppercase text text-[12px] font-semibold pb-2">
                Name
              </label>
              <input
                className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300"
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
                className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300"
                type="text"
                placeholder=""
                name="phone"
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <label className="uppercase text text-[12px] font-semibold py-2">
              Email
            </label>
            <input
              className="border-[1px] rounded-lg py-1 pl-4 flex border-gray-300"
              type="email"
              placeholder=""
              name="email"
            />
          </div>
          <div className=" flex flex-col">
            <label className="uppercase text text-[12px] font-semibold py-2">
              {" "}
              Subject
            </label>
            <input
              className=" border-[1px] rounded-lg py-1 pl-4 flex border-gray-300"
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
              className=" border-[1px] rounded-lg py-1 pl-4 flex border-gray-300"
              name="message"
              rows="5"
            ></textarea>
          </div>
          <div className=" flex flex-row justify-center items-center">
            <button className=" bg-gradient-to-r from-black hover:to-black hover:from-red-300 to-red-300 mt-4 w-6/12  p-2 rounded-lg text-white font-semibold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

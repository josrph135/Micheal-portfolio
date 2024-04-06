const Contact = () => {
  return (
    <div
      id="contacts"
      className="bg-black md:px-8 sm:px-4 px-2 flex flex-col gap-2 scroll-mt-6 min-h-[100vh]"
    >
      <section>
        <h2 className=" text-[40px] md:text-[50px] sm:text-[38px] sm:font-[750px] lg:text-[60px] lg:font-[800] duration-200 font-[650] whitespace-nowrap md:tracking-wide leading-[70px] md:leading-[90px] text-primary text-start">
          Contact me
        </h2>
        <p className="text-white w-full font-semibold text-[18px] md:text-[22px]">
          If you have any job offer for me, you could use the form below to
          reach out to me.
        </p>
      </section>
      <form
        action="https://getform.io/f/nadoggmb"
        method="POST"
        encType="multipart/form-data"
        className="mx-auto text-white gap-2 sm:gap-2 w-full flex justify-center items-start flex-col text-xs md:text-sm"
      >
        <div className=" flex md:flex-row flex-wrap w-full">
          <section className=" flex flex-col justify-center  w-[320px] sm:w-2/3 lg:w-1/2 gap-2">
            <div className="relative w-full pt-5">
              <input
                className="peer bg-white/30 w-full placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-primary"
                type="text"
                placeholder="Enter Name"
                name="name"
                id="name"
              />
              <label
                htmlFor="name"
                className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
              >
                Enter Name
              </label>
            </div>

            <div className="relative pt-5">
              <input
                className="peer bg-white/30 w-full placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-primary"
                type="text"
                placeholder="Phone Number"
                name="phone"
              />
              <label
                htmlFor="ph"
                className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
              >
                Phone Number
              </label>
            </div>

            <div className="relative pt-5">
              <input
                className="peer bg-white/30 w-full placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-primary"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
              <label
                htmlFor="email"
                className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
              >
                Email
              </label>
            </div>
            <div className="pt-5 relative">
              <textarea
                className="peer bg-white/30 w-full placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-primary"
                name="message"
                rows="4"
                placeholder="Subject"
                id="subject"
              ></textarea>
              <label
                className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
                htmlFor="subject"
              >
                Subject
              </label>
            </div>
          </section>
        </div>
        <div className=" flex flex-row w-1/2 justify-center items-center">
          <button className=" bg-gradient-to-r from-primary to-black hover:from-black duration-300 transition-all ease-linear mt-4 w-fit text-center text-[20px] font-semibold hover:to-primary rounded px-4 py-2 whitespace-nowrap">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

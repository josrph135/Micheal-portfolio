import React from "react";
import mike from "../assets/papa.jpg";
const Home = () => {
  return (
    <section
      id="home"
      className="px-4 md:px-10 items-center mb-10 duration-200 pt-16 sm:pt-20 md:pt-32 gap-4 flex justify-center h-fit sm:flex-row flex-col"
    >
      <article className="flex sm:w-2/5 duration-200 pt-4 flex-col">
        <h4 className="px-2 md:px-4 duration-200 py-1 text-[10px] sm:text-sm md:text-base font-semibold w-fit text-white bg-black rounded-md">
          Hello Everyone
        </h4>
        <h5 className="header">
          ADEGBOYE MICHEAL ADEMOLA <br /> UI/UX Designer
        </h5>
        <p className="text">
          I'm an aspiring UI/UX Designer enthusiastically seeking internships to
          fuel my growth in the dynamic world of design. With a passion for
          crafting user-centric experiences. i am eager to contribute my
          creativity and learn from industry professionals. Let's embark on this
          collaborative journey towards innovation and meaningful design
          solutions.
        </p>
      </article>
      <section className="w-2/3  sm:w-3/5 duration-200 rounded-md">
        <img src={mike} alt="" className=" md:w-4/5 rounded-xl m-auto " />
      </section>
    </section>
  );
};

export default Home;

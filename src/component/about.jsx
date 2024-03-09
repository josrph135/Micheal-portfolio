import React from "react";

const about = (
  <p>
    I'm currently a diploma student at Allschool Africa. My design journey
    started about few months ago. driven by a passion for creating engaging
    digital experiences. With a background in communication, i bring a unique
    perspective to design. From wireframing to prototyping. I find joy in
    turning ideas into user-centric solutions. As i navigate the challenges of
    design, each project becomes an opportunity for growth and collaboration.
    <br /> Currently immersed in my studies at Allschool Africa, i'm horing my
    skills and gaining valuable insights into the ever-evolving world of design.
    Beyond the pixels, i'm driven by the belief that thoughtful design has the
    power to transform and enhance the way we interact with technology.
  </p>
);
const About = () => {
  return (
    <section
      id="about"
      className="bg-black flex justify-center items-center px-10 py-8 text-white"
    >
      <div className="h-fit my-auto">
        <h4 className="font-semibold text-lg md:text-xl duration-200 pb-6 header">
          About Me
        </h4>
        <p className="text">{about}</p>
      </div>
    </section>
  );
};

export default About;

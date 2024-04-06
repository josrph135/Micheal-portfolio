import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Svg from "../svg";
import Micheal from "../assets/Michael.pdf";
import Skills from "./skill";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const control = useAnimation();
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);
  return (
    <div
      id="about"
      className="bg-black md:px-8 sm:px-4 px-2 flex flex-col gap-10 scroll-mt-6  min-h-screen"
    >
      {/* About section */}
      <section className="md:w-[90%] lg:w-4/5 flex flex-col gap-4">
        <h2 className=" text-[40px] md:text-[50px] sm:text-[38px] sm:font-[750px] lg:text-[60px] lg:font-[800] duration-200 font-[650] whitespace-nowrap md:tracking-wide leading-[70px] md:leading-[90px] text-primary text-start">
          About & Skill
        </h2>
        <section className="text-white w-full font-semibold text-[18px] md:text-[22px]">
          <motion.div
            ref={ref}
            animate={control}
            initial={"hidden"}
            transition={{ duration: 0.9, delay: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -95 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>
              I am a driven UI/UX designer who is passionate about ensuring user
              satisfaction and seeking a role within an established IT company
              where I can leverage the latest technologies and contribute to
              challenging and diverse projects. Currently employed at Techlytics
              Africa, a leading data-driven company in Nigeria, I excel in
              crafting captivating user interfaces, designing dynamic web
              experiences with seamless interactions, and orchestrating
              intuitive user journeys that consistently delight users.
            </span>
          </motion.div>
          <br />

          <motion.div
            ref={ref}
            initial={"hidden"}
            animate={control}
            transition={{ duration: 0.8, delay: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -95 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>
              My fervor for exploring global opportunities to refine my skills
              propels me to seek collaborations with fellow designers and UI/UX
              professionals, with the aim of innovating and enhancing user
              experiences on a global scale. My unwavering readiness to confront
              any challenge that comes my way stands as one of my most defining
              characteristics. For a comprehensive overview of my qualifications
              and experiences, please download my CV from the link below
            </span>
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={"hidden"}
            animate={control}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <a
              href={Micheal}
              target="blank"
              className="relative whitespace-nowrap px-16 mt-6 isolate flex justify-center items-center select-none overflow-hidden rounded-tr-[24px] rounded-bl-[24px] border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-right before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-neutrals-50 py-3 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em] bg-neutrals-50 hover:[&:not(:disabled)]:text-neutrals-50 focus-visible:text-black text-primary border-primary hover:text-black before:bg-primary disabled:cursor-progress max-sm:w-1/2"
            >
              Download CV
            </a>
          </motion.div>
        </section>
      </section>

      <Skills />
    </div>
  );
};

export default About;

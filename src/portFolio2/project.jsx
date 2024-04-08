import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiFigma } from "react-icons/fi";
import { Projects } from "./data";

const Project = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    control.start("visible");
  }, [isInView]);

  const articleStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      id="projects"
      className=" md:px-8 sm:px-4 px-2  min-h-[100vh] scroll-mt-6 pb-8"
    >
      {/* Projects section */}
      <section>
        <h2 className=" text-[40px] md:text-[50px] sm:text-[38px] sm:font-[750px] lg:text-[60px] lg:font-[800] duration-200 font-[650] whitespace-nowrap md:tracking-wide leading-[70px] md:leading-[90px] text-primary text-start">
          Projects
        </h2>
        <p className="text-white font-semibold text-[18px] md:text-[22px]">
          Here are some selected and challenging personal projects that I have
          worked on so far which enabled me to level up my skills to a
          fascinating point that makes me feel confident in tackling more
          difficult challenges.
        </p>
      </section>
      <section className="flex justify-center items-center flex-row mt-8 gap-4 flex-wrap">
        {Projects.map((project, i) => (
          <motion.div
            style={{
              ...articleStyle,
              backgroundImage: `url(${project.img})`,
            }}
            className="border-[3px] relative rounded-[8px] md:w-[400px] min-w-[250px] h-[200px] border-amber-800 group"
            key={i}
            ref={ref}
            animate={control}
            initial="hidden"
            transition={{
              duration: i === 0 ? 0.6 : i === 1 ? 0.75 : 0.95,
              delay: i === 0 ? 0.6 : i === 1 ? 0.7 : 0.8,
            }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Project content */}
            <a href={`${project.link}`}>
              <div
                className={`w-full h-full bg-black/50 absolute translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100  duration-500 rounded-[8px]`}
              >
                <h3 className="text-white text-center font-bold text-[30px] mt-4">
                  {project.title}
                </h3>

                <FiFigma className="text-primary absolute bottom-2 left-2 text-[35px]" />
              </div>
            </a>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Project;

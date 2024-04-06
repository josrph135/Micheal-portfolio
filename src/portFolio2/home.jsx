import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Home = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      id="home"
      className="md:px-8 sm:px-4 px-2 scroll-mt-6 min-h-[100vh] flex flex-col gap-6 mb-8"
      ref={ref}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.9, delay: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 95 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {/* Home section */}
      <section className="w-[200px] md:hidden mx-auto h-[200px] mt-10">
        <img src="micheal.jpg" alt="" className="rounded-full h-44 w-44" />
      </section>
      <section className="md:mt-14">
        <h2 className=" text-[40px] md:text-[40px] sm:text-[38px] sm:font-[750px] lg:text-[60px] lg:font-[800] duration-200 font-[650] md:tracking-wide leading-[70px] md:leading-[80px] text-primary">
          Hi, 👋
          <br />
          I'm Micheal Adegboye <br /> A UI/UX Designer.
        </h2>
      </section>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={control}
        transition={{ duration: 0.9, delay: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <section className="text-white lg:w-1/2 md:w-2/3 font-semibold text-[18px] md:text-[22px] mt-4">
          <p>
            I excel at blending creativity with functionality to deliver designs
            that deeply resonate with users.
          </p>
        </section>
      </motion.div>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={control}
        transition={{ duration: 0.9, delay: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <section className="w-52">
          <a
            href="#contacts"
            className="relative whitespace-nowrap px-16 mt-6 isolate flex justify-center items-center select-none overflow-hidden rounded-tr-[24px] rounded-bl-[24px] border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-right before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-neutrals-50 py-3 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em] bg-neutrals-50 hover:[&:not(:disabled)]:text-neutrals-50 focus-visible:text-black text-primary border-primary hover:text-black before:bg-primary disabled:cursor-progress max-sm:w-full"
            type="submit"
            fdprocessedid="1fi6k"
          >
            Contact me
          </a>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Home;

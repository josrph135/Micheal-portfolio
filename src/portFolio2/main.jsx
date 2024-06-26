import { useEffect, useRef } from "react";
import Header from "./Header";
import { useAnimation, useInView, motion } from "framer-motion";
import { Links, Projects } from "./data";
import { FiFigma } from "react-icons/fi";
import Sidebar from "./sidebar";
import Home from "./home";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="scroll-smooth duration-300 ease-linear bg-black h-full max-w-screen transition overflow-x-hidden font-sans">
        <Header />
        <main className="w-fit h-full overflow-x-hidden flex flex-row">
          <Sidebar />
          <section className="bg-[#333435] md:pl-48 min-h-[100vh] px-2 pb-4 w-fit">
            <Home />
            <About />
            <Project />
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
};

export default Main;

import Svg from "../../svg";
import { Ski } from "./Skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" scroll-smooth sm:h-fit h-full scroll-mt-8 w-screen"
    >
      <div className="flex flex-col h-full gap-4 py-8  bg-white items-center">
        <h2 className="header font-semibold text-black text-[18px] sm:text-[24px]">
          My Skills
        </h2>
        <div className="grid mt-8 grid-cols-2 sm:grid-cols-3 w-[95%] sm:w-[80%] sm:pl-4 mx-auto justify-center gap-2 md:gap-4">
          {Ski.map((ski, i) => {
            return (
              <section
                className="flex justify-center items-center gap-4 flex-col "
                key={i}
              >
                <h3 className="header text-center text-black font-semibold text-[16px] sm:text-[18px] pb-1 ">
                  {ski.title}
                </h3>
                <Svg percent={ski.per} />
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;

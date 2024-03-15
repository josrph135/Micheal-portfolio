import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
const project = [
  {
    title: "Clean Go",
    desc: "Cleango is my venture into UI/UX, focusing on computer repairs. IT streamlines service requests, provides real-time updates, and priotizes user-friendly interactions. Through this exploration. I aim to understand user needs while crafting an aesthetically pleasing and functional design.",
    link: "https://www.figma.com/file/M3yVmqBCIH2psxOEuNPL7Z/CleanGo?type=design&mode=design&t=J9WKYBVnPIKILOsn-1",
    img: image1,
  },
  {
    title: "Burger Place",
    desc: "Designing Burger Palace, a pburger focused food delivery app. Key features include simplified food selection, easy checkout, and real-time order tracking. Learning to bring joy to users during their online burger ordering experience.",
    link: "https://www.figma.com/file/zHnbJiC2w7AzM2ffObB6tz/burger-app?type=design&mode=design&t=J9WKYBVnPIKILOsn-1",
    img: image2,
  },
  {
    title: "Foodie Space",
    desc: "Foodie Space is an ongoing exploration aiming to create an exciting food app. Key features include intuitive search, personalized recommendations, and a user-friendly vibe. Balancing simplicity with presenting various cusines is part of the learning adventure.",
    link: "https://www.figma.com/file/ENUwFXmBqA3UwNUkRFg1lt/Food-Delivery---Mobile-App-Design-(Community)?type=design&node-id=0%3A1&mode=design&t=J9WKYBVnPIKILOsn-1",
    img: image3,
  },
];
const Work = () => {
  return (
    <section
      id="work"
      className="w-full scroll-mt-16 bg-black px-4 md:px-10 py-8"
    >
      <h4 className="text-white font-semibold text-lg md:text-xl duration-200 pb-2 md:pb-6 header">
        Featured Work
      </h4>
      <section className="flex flex-col gap-4">
        {project.map((proj, i) => {
          return (
            <article
              className="bg-white hover:scale-105 duration-150  flex sm:flex-row flex-col rounded-lg text-black"
              key={i}
            >
              <div className="px-4 group sm:px-10 sm:w-3/5 my-auto py-2 sm:py-4 md:py-8 duration-200">
                <h4 className="font-semibold header text-sm pb-2">
                  {proj.title}
                </h4>
                <div className="w-full sm:hidden">
                  <img
                    src={proj.img}
                    className=" h-full w-full sm:rounded-r-lg "
                    alt=""
                  />
                </div>
                <p className="text w-full">{proj.desc}</p>
                <div className="sm:pt-4 pt-2">
                  <a
                    target="blank"
                    className="bg-black text-teal-500 text-[8px] sm:text-sm px-2 sm:px-4 duration-200 flex-row flex w-fit gap-2 items-center py-[5px] rounded"
                    href={proj.link}
                  >
                    <span>View Project</span>
                    <span className="text-sm group-hover:text-yellow-400">
                      <FaArrowCircleRight />
                    </span>
                  </a>
                </div>
              </div>
              <div className="hidden sm:block sm:w-2/5">
                <img
                  src={proj.img}
                  className=" h-full w-full sm:rounded-r-lg "
                  alt=""
                />
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Work;

import React from "react";
import { GoDot } from "react-icons/go";

const skills = [
  "Wireframing(still learning the ropes)",
  "Prototyping(learning, but it's getting there)",
  "User Research(googling a lot)",
  "Interaction Design(trying not to make it too confusing",
  "Visual Design(making things look nice in my own way",
  "Problem Solving: Navigating challenges with creativity and determination",
  "Adaptability: Embracing new tools, techniques, anddesign trends",
  "Attention to Details: Meticulous focus on finer design elements",
  "Collaboration: Actively engaging in team-oriented design processes",
  "Usability Testing: Exploring methods for valuable user feedback",
];
const Skill = () => {
  return (
    <section
      id="skills"
      className="px-4 md:px-10 py-8  flex flex-col justify-start scroll-mt-16 "
    >
      <div className="h-fit my-auto">
        <h4 className="text-black font-semibold text-lg md:text-xl duration-200 pb-2 md:pb-6 header">
          My Skill
        </h4>
        {skills.map((skill, i) => {
          return (
            <div key={i} className="flex items-center flex-row gap-3 ">
              <span className="pt-2 text-teal-500 text-xs">
                <GoDot />
              </span>
              <p className="text" key={i}>
                {skill}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;

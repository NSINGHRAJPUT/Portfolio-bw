import React from "react";

const Skills = () => {
  const skills = [
    { name: "REACT", level: "95%" },
    { name: "REACT NATIVE", level: "90%" },
    { name: "NODE JS", level: "95%" },
    { name: "MONGO DB", level: "95%" },
    { name: "EXPRESS JS", level: "90%" },
    { name: "NEXT JS", level: "85%" },
    { name: "SQL", level: "95%" },
    { name: "MYSQL", level: "90%" },
  ];

  return (
    <section id="skills" className="bg-gray-800 text-white p-[5%] pt-6">
      <h2 className="heading mb-4 text-center">Skills</h2>
      <p className="paragraph mb-8 text-center">
        As a dedicated Full Stack Web Developer, I bring extensive expertise in
        building dynamic and responsive web applications. My skills encompass a
        wide range of technologies including React, React Native, Node.js,
        Express.js, Next.js, MongoDB, SQL, and MySQL. I am committed to
        delivering efficient, scalable, and user-friendly solutions that meet
        your business needs.
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Focus Areas */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="subheading">MY FOCUS</h3>
          <div className="border-b-2 border-white w-1/3 mb-4"></div>
          <ul className="space-y-8">
            <li>Backend Architecture</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
          </ul>
        </div>

        {/* Skills Bars */}
        <div className="md:w-2/3">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
              </div>
              <div className="w-full bg-gray-700 h-4">
                <div
                  className="bg-gray-300 h-4"
                  style={{ width: skill.level }}
                  aria-label={`${skill.name} proficiency: ${skill.level}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiElectron,
  SiAngular,
} from "react-icons/si";

const skills = [
  {
    name: "REACT",
    description:
      "Building dynamic and interactive user interfaces for web applications.",
    icon: FaReact,
  },
  {
    name: "REACT NATIVE",
    description:
      "Developing cross-platform mobile applications with a native look and feel.",
    icon: FaReact,
  },
  {
    name: "NODE JS",
    description: "Creating scalable server-side applications using JavaScript.",
    icon: FaNodeJs,
  },
  {
    name: "ANGULAR",
    description:
      "Developing scalable and maintainable web applications using TypeScript and Angular framework.",
    icon: SiAngular, // Make sure to import the correct icon from your icon library
  },
  {
    name: "ELECTRON JS",
    description:
      "Building cross-platform desktop applications with web technologies like JavaScript, HTML, and CSS.",
    icon: SiElectron, // Make sure to import the correct icon from your icon library
  },

  {
    name: "EXPRESS JS",
    description: "Building robust and efficient web servers with Node.js.",
    icon: SiExpress,
  },
  {
    name: "NEXT JS",
    description:
      "Developing server-rendered React applications for optimized performance.",
    icon: SiNextdotjs,
  },
  {
    name: "MONGO DB",
    description:
      "Implementing NoSQL database solutions for high-performance applications.",
    icon: SiMongodb,
  },
  {
    name: "SQL",
    description: "Managing and querying relational databases effectively.",
    icon: FaDatabase,
  },
  {
    name: "MYSQL",
    description:
      "Implementing and managing MySQL databases for reliable data storage.",
    icon: SiMysql,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-[5%] bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <p className=" mx-auto mb-8 text-gray-400">
          As a dedicated Full Stack Web Developer, I bring extensive expertise
          in building dynamic and responsive web applications. My skills
          encompass a wide range of technologies including React, React Native,
          Node.js, Express.js, Next.js, MongoDB, SQL, and MySQL. I am committed
          to delivering efficient, scalable, and user-friendly solutions that
          meet your business needs.
        </p>
        <div className="flex flex-row flex-wrap justify-evenly gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="p-6 w-[360px] bg-gray-900 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <IconComponent
                  size={64}
                  className="mx-auto mb-4 text-yellow-500"
                />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

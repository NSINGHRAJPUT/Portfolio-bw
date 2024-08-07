"use client";

import { FaCode, FaMobileAlt, FaDesktop } from "react-icons/fa";

export const skills = [
  {
    title: "Web Development",
    description:
      "Create dynamic, responsive websites with modern technologies. Specializing in both front-end and back-end development to deliver complete web solutions.",
    icon: FaCode,
  },
  {
    title: "App Development",
    description:
      "Design and develop engaging mobile applications for iOS and Android platforms. Focus on user experience, performance, and seamless functionality.",
    icon: FaMobileAlt,
  },
  {
    title: "Software Development",
    description:
      "Build robust, scalable software solutions tailored to your business needs. Expertise in various programming languages and frameworks to ensure high-quality software.",
    icon: FaDesktop,
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-[10vh] px-[5%]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">My Services</h2>
        <p className="w-[90%] mx-auto mb-8 text-gray-600 text-justify">
          With a strong foundation in various domains, I offer a wide range of
          services to meet your needs. From web development and app development
          to software development, each service is tailored to ensure excellence
          and precision. Whether you're looking to create an engaging online
          presence, develop a comprehensive mobile application, or build a
          robust software solution, I have the skills and expertise to bring
          your vision to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <IconComponent
                  size={64}
                  className="mx-auto mb-4 text-yellow-500"
                />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-justify">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import resume from "../../assets/resume.pdf";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex min-h-[50vh] flex-col md:flex-row items-start md:items-center justify-center my-[5vh] px-[5%]"
    >
      <h1 className="heading text-left md:text-normal flex w-[260px] items-start justify-start about_h1">
        About Me
      </h1>
      <div className="w-full md:pl-8 flex flex-col justify-start items-start">
        <p className="paragraph text-justify">
          I am a dedicated and experienced Full Stack Web Developer with a
          strong background in creating dynamic and responsive web applications.
          My expertise includes HTML, CSS, JavaScript, React, Node.js,
          Express.js, Next.js, and React Native. I have a proven track record of
          delivering high-quality solutions and have worked on various projects,
          including dynamic content rendering, TV remote event handling, and
          context-specific UI changes in React Native applications.
        </p>
        <p className="paragraph text-justify">
          In my recent projects, I have focused on integrating advanced features
          such as custom font size mappings, interactive components using
          TouchableOpacity, and managing navigation in TV apps using the
          useTVEventHandler hook. My proficiency in using Tailwind CSS for
          styling and my commitment to delivering user-friendly interfaces have
          consistently resulted in successful project outcomes.
        </p>
        <p className="paragraph text-justify">
          I am always eager to learn and stay updated with the latest
          technologies, and I am passionate about building efficient and
          scalable web applications. Whether you are looking for a skilled
          developer to join your team or need a reliable freelancer for your
          next project, I am here to help.
        </p>
        <div className="flex flex-row gap-4 items-center justify-center mt-4">
          <Link href={resume} className="button">
            Download CV
          </Link>
          <Link
            href="mailto:nsinghrajputx@gmail.com"
            className="button-opposite w-fit"
          >
            HIRE ME
          </Link>
        </div>
        <div className="flex justify-center mt-4">
          <FaGithub className="text-black text-2xl md:text-3xl mr-2" />
          <FaTwitter className="text-black text-2xl md:text-3xl mr-2" />
          <FaLinkedin className="text-black text-2xl md:text-3xl mr-2" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

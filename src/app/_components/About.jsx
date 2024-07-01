import React from "react";
import hero from "../../assets/images/hero.jpg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex min-h-[50vh]  flex-col md:flex-row items-start md:items-center justify-center my-[5vh] px-[5%] "
    >
      <h1 className="heading text-left md:text-normal flex w-[260px] items-start justify-start about_h1">
        About Me
      </h1>
      <div className="w-full  md:pl-8 flex flex-col justify-start items-start">
        <p className="paragraph text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero a orci tincidunt, vel fermentum lectus dapibus.
          Integer ut posuere libero. Nullam eget leo maximus, dictum eros vel,
          fermentum libero. Proin vitae semper metus. Aliquam erat volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero a orci tincidunt, vel fermentum lectus dapibus.
          Integer ut posuere libero. Nullam eget leo maximus, dictum eros vel,
          fermentum libero. Proin vitae semper metus. Aliquam erat volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero a orci tincidunt, vel fermentum lectus dapibus.
          Integer ut posuere libero. Nullam eget leo maximus, dictum eros vel,
          fermentum libero. Proin vitae semper metus. Aliquam erat volutpat.
        </p>
        <div className="flex flex-row gap-4 items-center justify-center mt-4">
          <button className="button">Download CV</button>
          <button className="button">Hire Me</button>
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

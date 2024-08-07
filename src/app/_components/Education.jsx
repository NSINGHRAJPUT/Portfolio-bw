"use client";

import React from "react";

const educationDetails = [
  {
    degree: "Class X",
    year: "(2012-2013)",
    major: "Computer Science",
    institution: "Gyan Ganga International Academy, Ratanpur, Bhopal (M.P.)",
    board: "CBSE",
  },
  {
    degree: "Class XII",
    year: "(2014-2015)",
    major: "Computer Science",
    institution: "Gyan Ganga International Academy, Ratanpur, Bhopal (M.P.)",
    board: "CBSE",
  },
  {
    degree: "B.Sc",
    year: "(2015-2018)",
    major: "Computer Science",
    institution: "CPS college Badagaon, Morena (M.P.)",
    university: "Jiwaji University",
  },
  {
    degree: "B.Ed",
    year: "(2019-2021)",
    institution: "SSBBSMP, Morena (M.P.)",
    university: "Jiwaji University",
  },
  {
    degree: "MCA",
    year: "(2023-Present)",
    institution: "GLA University, Mathura (U.P.)",
    university: "GLA University",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 bg-gray-800 text-white px-[5%]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Education</h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-400 text-center">
          My educational journey has provided me with a strong foundation in
          computer science and teaching, equipping me with the knowledge and
          skills to excel in my career.
        </p>
        <div className="relative">
          <div className="absolute h-full border border-yellow-500 left-1/2 transform -translate-x-1/2"></div>
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className={`mb-10 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? "flex-row-reverse left-timeline"
                  : "right-timeline"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-4 py-4 bg-gray-900 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-yellow-500 mb-1">{edu.year}</p>
                {edu.major && <p className="text-gray-400 mb-1">{edu.major}</p>}
                <p className="text-gray-400 mb-1">{edu.institution}</p>
                {edu.board && <p className="text-gray-400 mb-1">{edu.board}</p>}
                {edu.university && (
                  <p className="text-gray-400 mb-1">{edu.university}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

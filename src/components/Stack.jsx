import React from "react";
import img from "./typescript.svg";
// Icons (you can replace these with actual image paths or SVG imports)
const icons = {
  HTMLCSS: "/path-to-htmlcss-logo.svg",
  JavaScript: "/path-to-js-logo.svg",
  Bootstrap: "/path-to-bootstrap-logo.svg",
  XML: "/path-to-xml-logo.svg",
  TypeScript: img,
};

const Stack = () => {
  const skills = [
    {
      title: "HTML/CSS",
      description:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
      icon: icons.HTMLCSS,
    },
    {
      title: "JavaScript",
      description:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
      icon: icons.JavaScript,
    },
    {
      title: "Bootstrap",
      description:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
      icon: icons.Bootstrap,
    },
    {
      title: "XML",
      description:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
      icon: icons.XML,
    },
    {
      title: "TypeScript",
      description:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
      icon: icons.TypeScript,
    },
  ];

  return (
    <section className="bg-black text-[#afa18f] p-10 min-h-screen">
      {/* Stack Section */}
      <div className="max-w-[1065px] mx-auto p-2">
        <h2 className="text-5xl font-bold mb-8">STACK</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col justify-between items-center hover:bg-[#333333] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>

              {/* Description */}
              {/* <p className="text-gray-400 mb-4">{skill.description}</p> */}

              {/* Icon (hidden initially, shown on hover) */}
              <img
                src={skill.icon}
                alt={`${skill.title} logo`}
                className="absolute top-4 right-4 w-16 h-16 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

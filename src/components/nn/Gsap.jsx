import React from "react";

const Gsap = () => {
  const tools = [
    { name: "Logoipsum", image: "/./" },
    { name: "Docker", image: "../images/3.jpeg" },
    { name: "Python", image: "../images/3.jpeg" },
    { name: "Logoipsum", image: "../images/3.jpeg" },
    { name: "Logoipsum", image: "../images/3.jpeg" },
    { name: "Logoipsum", image: "../images/3.jpeg" },
  ];

  return (
    <section className="bg-[#0e191a] text-white py-12 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-300">Tools I work with</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-[#0f292e] p-6 rounded-lg shadow-lg flex justify-center items-center"
          >
            <img
              src={tool.image}
              alt={tool.name}
              className="h-16 w-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gsap;

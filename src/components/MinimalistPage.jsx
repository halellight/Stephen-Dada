import React from "react";

const MinimalistPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-[70vh] bg-black text-[#afa18f]">
      {/* Contact Information Section */}
      <div className="flex flex-col items-center justify-center my-10 text-center space-y-2">
        <p>stephendada@gmail.com</p>
        {/* <p>604.398.8822</p> */}
        <p>+234 907-522-2481</p>
        <p>MIATAMA, ABUJA, NIGERIA</p>
        <div className="space-x-4">
          <a href="#" className="underline">
            LinkedIn
          </a>
          <a href="#" className="underline">
            Instagram
          </a>
        </div>
      </div>

      {/* Large Text Section */}
      <div className="text-center">
        <h1 className="text-[350px] font-bold transform rotate-180">STEPHEN</h1>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-4">
        <p>©2024 Stephen, All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MinimalistPage;

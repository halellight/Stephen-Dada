import React, { useEffect, useState } from "react";
import image from "../images/5.jpg";

const Main = () => {
  const handleDownloadCV = () => {
    // Google Drive link to the CV file
    const cvUrl =
      "https://drive.google.com/file/d/18pPPBUCA-A9psg3JppCtehS_cDTH3Xbb/view?usp=sharing";
    window.open(cvUrl, "_blank"); // Opens the link in a new tab
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values
  const parallaxOffset1 = scrollY * 0.2; // Adjust multiplier for desired parallax effect
  const parallaxOffset2 = scrollY * 0.25;
  const parallaxOffset3 = scrollY * 0.3;

  return (
    <div className="relative h-screen bg-[#000000] flex justify-center items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap p-4 text-[#afa18f] lg:text-[128px] font-bold md:text-[82px] text-[64px] z-30">
        <div
          className="block "
          style={{
            transform: `translateX(-30%) translateY(${parallaxOffset2}px)`,
          }}
        >
          Dada
        </div>
        {/* <span
          className="block z-0 inset-0"
          style={{
            transform: `translateX(0%) translateY(${parallaxOffset1}px)`,
          }}
        >
          Dada
        </span> */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 h-[40vh] w-[40vw] max-w-[285px] max-h-[570px] flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-39 "
          id="image"
        >
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>

        <span
          className="block"
          style={{
            transform: `translateX(50%) translateY(${parallaxOffset3}px)`,
          }}
        >
          Stephen
        </span>
      </div>

      <div className="absolute bottom-0 justify-center items-center p-4 text-xs md:text-sm max-w-[1240px] text-[#afa18f] mx-auto">
        {/* <span className="text-center md:text-left text-[10px] md:text-xs">
          PRAISE IBE CHIDUMEBI
        </span> */}
        <span className="text-center md:text-left text-[10px] md:text-xs">
          ↓ SCROLL TO EXPLORE
        </span>
        {/* <span
          onClick={handleDownloadCV}
          className="cursor-pointer hover:text-[#00A699] text-center md:text-right text-[10px] md:text-xs"
        >
          READ MY CV
        </span> */}
      </div>
    </div>
  );
};

export default Main;

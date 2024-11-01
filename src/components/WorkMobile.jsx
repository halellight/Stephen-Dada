import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const WorkMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile && (
        <div className="bg-[#000000] text-[#ffffb9] py-12 px-12">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="text-[#afa18f] lg:text-[36px] md:text-[36px] text-[20px] font-bold">
              MY WORK
            </h2>

            <div className="space-y-12 mt-12">
              <ExperienceItem
                //   year="NOW"
                title="EASE"
                company="Development and Design"
                link="https://ease-beta.vercel.app/"
              />
              <ExperienceItem
                //   year="2022"
                title="MohGas"
                company="Design & Development"
                link="https://www.huawei.com/en/"
              />
              <ExperienceItem
                //   year="2022"
                title="Silenco"
                company="Design and Development"
                link="https://nnpcgroup.com/"
              />
              <ExperienceItem
                //   year="2021"
                title="BUSA App"
                company="Design & Development"
              />
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

const ExperienceItem = ({ year, title, company, link }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = title.split(" ");

  return (
    <div className="flex flex-col md:flex-row justify-between" ref={container}>
      <div className="lg:text-3xl md:text-[36px] text-[18px] font-semibold border-b-[1.5px] border-gray-400">
        {year}
      </div>
      <div className="text-right md:text-right mt-4 md:mt-0">
        <p className="lg:text-[64px] md:text-[48px] text-[40px] font-semibold flex">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-m md:text-lg lg:text-xl text-[rgb(78,82,90)] hover:text-[#ffffb9] transition-[2s]"
          >
            {company}
          </a>
        ) : (
          <p className="text-[18px] md:text-lg lg:text-xl text-[#4e525a]">
            {company}
          </p>
        )}
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default WorkMobile;

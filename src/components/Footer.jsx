import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <footer className="container mx-[300px] px-24 py-6 md:py-8 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="text-sm mb-4 md:mb-0 text-[#afa18f]">
            © 2023 Stephen. All rights reserved.
          </div>
          <div className="flex space-x-4 text-[#afa18f]">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <AiOutlineTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

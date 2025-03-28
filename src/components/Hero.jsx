import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    // Animate elements on page load
    const textElement = textRef.current;
    const imageElement = imageRef.current;
    const socialElement = socialRef.current;

    if (textElement && imageElement && socialElement) {
      textElement.style.opacity = "0";
      imageElement.style.opacity = "0";
      socialElement.style.opacity = "0";

      setTimeout(() => {
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
      }, 300);

      setTimeout(() => {
        imageElement.style.opacity = "1";
        imageElement.style.transform = "translateY(0)";
      }, 600);

      setTimeout(() => {
        socialElement.style.opacity = "1";
        socialElement.style.transform = "translateY(0)";
      }, 900);
    }
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-x-10 px-6 md:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-center md:text-left overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-700 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-red-300 dark:bg-red-700 blur-3xl"></div>
      </div>

      {/* Left Side - Text and Social Buttons */}
      <div 
        ref={textRef}
        className="max-w-xl z-10 transition-all duration-700 ease-out transform translate-y-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          Hello, I'm <span className="text-blue-500 relative inline-block">
            Kalp Patel
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2 tracking-tight">
          Frontend Developer Based in <span className="text-red-500 relative inline-block">India.</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a frontend developer with a passion for building user-friendly interfaces and seamless experiences.
          I specialize in modern web technologies and love bringing ideas to life through code.
        </p>

        {/* Social Media Buttons */}
        <div 
          ref={socialRef}
          className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-8 transition-all duration-700 ease-out transform translate-y-8"
        >
          <a
            href="https://github.com/kalp-cg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <FaGithub className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kalp-patel-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <FaLinkedin className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/kalp_._0/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-pink-600 hover:bg-pink-500 px-4 py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <FaInstagram className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">Instagram</span>
          </a>
          <a
            href="https://x.com/patel_kalp92111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-400 hover:bg-blue-300 px-4 py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <FaTwitter className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">Twitter</span>
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div 
        ref={imageRef}
        className="mt-12 md:mt-0 md:ml-auto z-10 transition-all duration-700 ease-out transform translate-y-8"
      >
        <div className="relative rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group">
          <img
            src="/api/placeholder/500/500"
            alt="Hero"
            className="w-60 sm:w-72 md:w-96 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
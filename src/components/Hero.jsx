// import React from 'react';

// function Hero() {
//   return (
//     <section className="pt-32 pb-20 px-6 text-center">
//       <div className="container mx-auto">
//         <h1 className="text-5xl font-bold mb-6">
//           Hello, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Kalp Patel</span>
//         </h1>
//         <p className="text-2xl text-gray-400 mb-8">
//           A Full Stack Developer passionate about crafting seamless digital experiences.
//         </p>
//         <div className="flex justify-center gap-4">
//           <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
//             Contact Me
//           </a>
//           <a href="#projects" className="border border-gray-700 hover:border-purple-500 px-6 py-3 rounded-lg transition-colors">
//             View Projects
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-x-10 px-6 md:px-8 py-16 md:py-20 bg-white dark:bg-black text-center md:text-left overflow-hidden">
      {/* Left Side - Text and Social Buttons */}
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
          Hello, I'm <span className="text-blue-500">Kalp Patel</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2">
          Frontend Developer Based in <span className="text-red-500">India.</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          I'm a frontend developer with a passion for building user-friendly interfaces and seamless experiences. 
          I specialize in modern web technologies and love bringing ideas to life through code.
        </p>

        {/* Social Media Buttons */}
        <div className="flex flex-wrap max-sm:gap-2 justify-center md:justify-start space-x-3 sm:space-x-4 mt-6 sm:mt-8">
          <a href="https://github.com/kalp-cg" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2">
            <FaGithub className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kalp-patel-/" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2">
            <FaLinkedin className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/kalp_._0/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white bg-pink-600 hover:bg-pink-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2">
            <FaInstagram className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">Instagram</span>
          </a>
          <a href="https://x.com/patel_kalp92111" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-400 hover:bg-blue-300 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-base sm:text-lg flex items-center space-x-2">
            <FaTwitter className="text-lg sm:text-xl" />
            <span className="max-sm:hidden">Twitter</span>
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="mt-8 md:mt-0 md:ml-auto">
        <img 
          src="https://images.unsplash.com/photo-1739698124907-32a5d9d497c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" 
          alt="Hero" 
          className="w-60 sm:w-72 md:w-96 rounded-lg mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default Hero;

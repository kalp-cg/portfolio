// import React from 'react';
// import { Moon, Sun } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// function Navbar() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Portfolio
//           </span>
//           <div className="flex items-center gap-6">
//             <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
//             <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</a>
//             <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Education</a>
//             <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//             >
//               {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black shadow-md">
      <div className="text-xl font-bold">Personal</div>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:underline">About Me</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact Me</a></li>
      </ul>
      <button className="px-4 py-2 bg-black text-white rounded-md">Resume</button>
    </nav>
  );
};

export default Navbar;

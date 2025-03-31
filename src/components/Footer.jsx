// import React from "react";

// function Footer() {
//   return (
//     <footer className="py-8 bg-black border-t border-gray-800 text-center text-gray-400">
//       <p>© 2024 Personal Portfolio. Made with ❤️</p>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-gray-100 text-center border-t border-gray-800">
      <p className="text-lg">&copy; {new Date().getFullYear()} Kalp Patel. All Rights Reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
          🔗 GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
          🔗 LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
          🔗 Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;

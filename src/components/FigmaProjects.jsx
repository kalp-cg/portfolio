// import React from "react";

// const FigmaProjects = () => {
//   const projects = [
//     { name: "TaskTurf Website", link: "https://www.figma.com/design/O6C4txrgb0K7uoY9dB4A2j/for-new-website?node-id=0-1&t=OXlgjbpZrGZunXhs-1" },
//     { name: "Snow Remover App Design", link: "https://www.figma.com/design/egha52vTStYzciRDsVdhzv/snow-removal-project?node-id=0-1&t=IM9mm6U7yfA6oZwx-1" },
//     { name: "Simple Login & Signup Page", link: "https://www.figma.com/design/ROOzR6BNOj6rkOFBR1q50R/Login-%26-SignUp-(Community)?node-id=0-1&t=oSR6cSBPOQDaN9tT-1" },
//     { name: "Ludo Game Design", link: "https://www.figma.com/design/9rRph3ee88Dl0U4mGiQido/Untitled?node-id=0-1&t=cdH0fgHm1N28qQsQ-1" },
//     { name: "Flipkart Home Page Clone", link: "https://www.figma.com/design/w3kn27mpfZmGt9C63Tqm7O/flipkart-exam-clone?node-id=0-1&t=SOA4wOsdrpBcgQLZ-1" },
//     { name: "Amazon Clone", link: "https://www.figma.com/design/oySNJWAJTzJrDCVrENwxTY/Untitled?node-id=0-1&t=xe4SxdtvyPBADPfB-1" },
//     { name: "Coding Gita Website Clone", link: "https://www.figma.com/design/WlGKiGQPUXvOHwlJKuCvnr/Untitled?node-id=0-1&t=db2KCw5Fbg06hyiX-1" },
//     { name: "Figma Tutorial", link: "https://www.figma.com/design/8Zo3UOWiRN57dsN0gFg4a7/ChaosHacks-2024%3A-Figma-Workshop-(Community)?node-id=42-8&t=Ib7DaaJgLnqyNxwx-1" },
//     { name: "Basic Chatting System", link: "https://www.figma.com/design/l2vmx2ZMt43b9dPML36D3G/Untitled?node-id=0-1&t=XFXNGoFvDE6wihR7-1" },
//   ];

//   return (
//   <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-10">
//     <h1 className="text-3xl font-bold mb-6">Figma Projects</h1>
//     <div className="w-full max-w-3xl">
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className="p-4 border border-gray-700 rounded-lg mb-4 hover:bg-gray-800 transition flex justify-between items-center"
//         >
//           <span className="text-lg font-medium">{project.name}</span>
//           <a
//             href={project.link}
//             className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded transition"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             See Figma
//           </a>
//         </div>
//       ))}
//     </div>
//   </div>
// );
// };
// export default FigmaProjects;


import React from "react";

const FigmaProjects = () => {
  const projects = [
    { name: "TaskTurf Website", link: "https://www.figma.com/design/O6C4txrgb0K7uoY9dB4A2j/for-new-website?node-id=0-1&t=OXlgjbpZrGZunXhs-1" },
    { name: "Snow Remover App Design", link: "https://www.figma.com/design/egha52vTStYzciRDsVdhzv/snow-removal-project?node-id=0-1&t=IM9mm6U7yfA6oZwx-1" },
    { name: "Simple Login & Signup Page", link: "https://www.figma.com/design/ROOzR6BNOj6rkOFBR1q50R/Login-%26-SignUp-(Community)?node-id=0-1&t=oSR6cSBPOQDaN9tT-1" },
    { name: "Ludo Game Design", link: "https://www.figma.com/design/9rRph3ee88Dl0U4mGiQido/Untitled?node-id=0-1&t=cdH0fgHm1N28qQsQ-1" },
    { name: "Flipkart Home Page Clone", link: "https://www.figma.com/design/w3kn27mpfZmGt9C63Tqm7O/flipkart-exam-clone?node-id=0-1&t=SOA4wOsdrpBcgQLZ-1" },
    { name: "Amazon Clone", link: "https://www.figma.com/design/oySNJWAJTzJrDCVrENwxTY/Untitled?node-id=0-1&t=xe4SxdtvyPBADPfB-1" },
    { name: "Coding Gita Website Clone", link: "https://www.figma.com/design/WlGKiGQPUXvOHwlJKuCvnr/Untitled?node-id=0-1&t=db2KCw5Fbg06hyiX-1" },
    { name: "Figma Tutorial", link: "https://www.figma.com/design/8Zo3UOWiRN57dsN0gFg4a7/ChaosHacks-2024%3A-Figma-Workshop-(Community)?node-id=42-8&t=Ib7DaaJgLnqyNxwx-1" },
    { name: "Basic Chatting System", link: "https://www.figma.com/design/l2vmx2ZMt43b9dPML36D3G/Untitled?node-id=0-1&t=XFXNGoFvDE6wihR7-1" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">
        Figma <span className="text-[var(--color-gold1)]">Projects</span>
      </h1>
      <div className="w-full max-w-3xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-700 rounded-lg mb-4 hover:bg-[var(--color-ui)] transition flex justify-between items-center"
          >
            <span className="text-lg font-medium">{project.name}</span>
            <a
              href={project.link}
              className="bg-gradient-to-r from-[var(--color-gold2)] to-[var(--color-gold3)] hover:from-[var(--color-gold1)] hover:to-[var(--color-gold2)] text-black px-4 py-2 rounded transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Figma
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FigmaProjects;
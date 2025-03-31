// // import React from "react";
// // import { Code, Github, ExternalLink } from "lucide-react";

// // const projects = [
// //   {
// //     id: 1,
// //     title: "Taskturf",
// //     description: "Task management web app built with React & Tailwind.",
// //     image: "https://source.unsplash.com/500x300/?technology,task",
// //     github: "https://github.com/your-repo",
// //     demo: "https://fabulous-syrniki-cc5671.netlify.app/",
// //   },
// //   {
// //     id: 2,
// //     title: "Oppo Clone",
// //     description: "Responsive UI clone of Oppo website using React & Tailwind.",
// //     image: "https://source.unsplash.com/500x300/?laptop,website",
// //     github: "#",
// //     demo: "https://regal-truffle-9575c2.netlify.app/",
// //   },
// //   {
// //     id: 3,
// //     title: "Video Player",
// //     description: "Custom video player with modern UI/UX design principles.",
// //     image: "https://source.unsplash.com/500x300/?video,media",
// //     github: "#",
// //     demo: "https://golden-lamington-80e47b.netlify.app/",
// //   },
// //   {
// //     id: 4,
// //     title: "SnowEase",
// //     description: "A service platform for snow removal in heavy snowfall areas.",
// //     image: "https://source.unsplash.com/500x300/?snow,mountain",
// //     github: "#",
// //     demo: "https://shimmering-scone-089ed6.netlify.app/",
// //   },
// //   {
// //     id: 5,
// //     title: "Portfolio Website",
// //     description: "My personal portfolio website with dark/light mode support.",
// //     image: "https://source.unsplash.com/500x300/?developer,portfolio",
// //     github: "https://github.com/your-portfolio",
// //     demo: "https://yourportfolio.netlify.app/",
// //   },
// // ];

// // function Projects() {
// //   return (
// //     <section id="projects" className="py-20">
// //       <div className="container mx-auto px-6">
// //         {/* Heading */}
// //         <div className="flex items-center gap-2 mb-12">
// //           <Code className="w-6 h-6 text-purple-500" />
// //           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
// //         </div>

// //         {/* Projects Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {projects.map((project) => (
// //             <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
// //               {/* Project Image */}
// //               <img
// //                 src={project.image}
// //                 alt={`Preview of ${project.title}`}
// //                 className="w-full h-48 object-cover"
// //               />
              
// //               {/* Project Details */}
// //               <div className="p-6">
// //                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// //                   {project.title}
// //                 </h3>
// //                 <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
// //                 {/* Buttons */}
// //                 <div className="flex gap-4">
// //                   {/* GitHub Button - Only Shows If Link Exists */}
// //                   {project.github !== "#" && (
// //                     <a
// //                       href={project.github}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="text-purple-500 hover:text-purple-400 flex items-center gap-1 transition-colors"
// //                     >
// //                       <Github className="w-4 h-4" /> Code
// //                     </a>
// //                   )}
                  
// //                   {/* Live Demo Button */}
// //                   <a
// //                     href={project.demo}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-purple-500 hover:text-purple-400 flex items-center gap-1 transition-colors"
// //                   >
// //                     <ExternalLink className="w-4 h-4" /> Live Demo
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }import React from "react";

// import React from "react";
// import { Github, ExternalLink } from "lucide-react";

// const projects = [
//   {
//     id: "01",
//     title: "Taskturf",
//     description:
//       "TaskTurf is a platform that connects users with skilled workers for essential home services. Built using the MERN stack, it features a seamless UI, worker profiles, and efficient user-worker interactions. This project highlights my expertise in full-stack development and API integration.",
//     image:
//       "https://res.cloudinary.com/dhyds3low/image/upload/v1740373339/zohc884vrcfjnvh5nv9e.png",
//     demo: "https://task-turf.vercel.app/",
//     video: "https://drive.google.com/file/d/18ronXsGwWFT858ppiCnk5cIyPfAio5DP/preview",
//   },
//   {
//     id: "02",
//     title: "Oppo Clone",
//     description:
//       "I created a pixel-perfect Oppo website clone using only HTML and CSS, focusing on clean design and responsiveness. The project showcases my skills in structuring web pages, styling with CSS, and ensuring a visually appealing layout.",
//     image:
//       "https://res.cloudinary.com/dhyds3low/image/upload/v1739974856/rdndxpdhogkhve9atuon.png",
//     demo: "https://regal-truffle-9575c2.netlify.app/",
//   },
//   {
//     id: "03",
//     title: "Video Player",
//     description:
//       "I developed a custom video player using the YouTube API, seamlessly integrating it with React and Tailwind CSS. This project allows users to search and play YouTube videos dynamically, showcasing my expertise in API integration, state management, and responsive UI design.",
//     image:
//       "https://res.cloudinary.com/dhyds3low/image/upload/v1739974859/e0qp0paodxmvecu52rck.png",
//     demo: "https://golden-lamington-80e47b.netlify.app/",
//   },
//   {
//     id: "04",
//     title: "SnowEase",
//     description:
//       "SnowEase is a platform designed to connect users with workers and equipment for efficient snow removal in heavy snowfall areas. Built with a clean and intuitive UI, it streamlines the process of hiring snow removal services. This project highlights my skills in UI/UX design, front-end development, and platform usability.",
//     image:
//       "https://res.cloudinary.com/dhyds3low/image/upload/v1739974854/e6uvr5d96v9hngyv45b2.png",
//     demo: "https://shimmering-scone-089ed6.netlify.app/",
//   },
//   {
//     id: "05",
//     title: "Portfolio Website",
//     description: "My personal portfolio website with dark/light mode support.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1673971706769-13a9499e3794?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     demo: "https://yourportfolio.netlify.app/",
//   },
// ];

// function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-6">
//         <h2 className="text-center text-4xl mb-12 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
//           My <span className="text-gray-200">Projects</span>
//         </h2>
  
//         <div className="space-y-16">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`group relative overflow-hidden rounded-2xl p-0.5 shadow-xl transition-all duration-300 ${
//                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//               }`}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
//               <div className="relative bg-gray-800 rounded-[calc(1rem-1px)] p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* ... rest of the component ... */}
//                 <button className="px-4 py-2 bg-amber-500 text-black rounded-lg flex items-center gap-2 hover:bg-amber-600 transition-colors">
//                   <ExternalLink className="w-5 h-5" /> Live Demo
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;


import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Taskturf",
    description:
      "TaskTurf is a platform that connects users with skilled workers for essential home services. Built using the MERN stack, it features a seamless UI, worker profiles, and efficient user-worker interactions. This project highlights my expertise in full-stack development and API integration.",
    image:
      "https://res.cloudinary.com/dhyds3low/image/upload/v1740373339/zohc884vrcfjnvh5nv9e.png",
    demo: "https://task-turf.vercel.app/",
    video: "https://drive.google.com/file/d/18ronXsGwWFT858ppiCnk5cIyPfAio5DP/preview",
  },
  {
    id: "02",
    title: "Oppo Clone",
    description:
      "I created a pixel-perfect Oppo website clone using only HTML and CSS, focusing on clean design and responsiveness. The project showcases my skills in structuring web pages, styling with CSS, and ensuring a visually appealing layout.",
    image:
      "https://res.cloudinary.com/dhyds3low/image/upload/v1739974856/rdndxpdhogkhve9atuon.png",
    demo: "https://regal-truffle-9575c2.netlify.app/",
  },
  {
    id: "03",
    title: "Video Player",
    description:
      "I developed a custom video player using the YouTube API, seamlessly integrating it with React and Tailwind CSS. This project allows users to search and play YouTube videos dynamically, showcasing my expertise in API integration, state management, and responsive UI design.",
    image:
      "https://res.cloudinary.com/dhyds3low/image/upload/v1739974859/e0qp0paodxmvecu52rck.png",
    demo: "https://golden-lamington-80e47b.netlify.app/",
  },
  {
    id: "04",
    title: "SnowEase",
    description:
      "SnowEase is a platform designed to connect users with workers and equipment for efficient snow removal in heavy snowfall areas. Built with a clean and intuitive UI, it streamlines the process of hiring snow removal services. This project highlights my skills in UI/UX design, front-end development, and platform usability.",
    image:
      "https://res.cloudinary.com/dhyds3low/image/upload/v1739974854/e6uvr5d96v9hngyv45b2.png",
    demo: "https://shimmering-scone-089ed6.netlify.app/",
  },
  {
    id: "05",
    title: "Portfolio Website",
    description: "My personal portfolio website with dark/light mode support.",
    image:
      "https://plus.unsplash.com/premium_photo-1673971706769-13a9499e3794?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demo: "https://yourportfolio.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl mb-12 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-gold1)] to-[var(--color-gold3)]">
          My <span className="text-gray-200">Projects</span>
        </h2>
  
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl p-0.5 shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold2)] to-[var(--color-gold3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-[var(--color-ui)] rounded-[calc(1rem-1px)] p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[var(--color-gold1)] text-sm font-mono">{project.id}</span>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-[var(--color-gold2)] to-[var(--color-gold3)] text-black rounded-lg flex items-center gap-2 hover:from-[var(--color-gold1)] hover:to-[var(--color-gold2)] transition-colors w-fit"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
                
                <div className="relative group h-64 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
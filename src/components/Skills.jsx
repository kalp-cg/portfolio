// // import React from 'react';
// // import { Code2 } from 'lucide-react';

// // const skillCategories = [
// //   {
// //     title: 'Frontend',
// //     skills: [
// //       { name: 'HTML', level: 90 },
// //       { name: 'CSS', level: 85 },
// //       { name: 'JavaScript', level: 60 },
// //       { name: 'React', level: 60 },
// //       { name: 'TailwindCSS', level: 50 },
// //       { name: 'Chakra UI', level: 30 },
// //     ],
// //   },
// //   {
// //     title: 'Backend',
// //     skills: [
// //       { name: 'Node.js', level: 60 },
// //       { name: 'Express.js', level: 45 },
// //       { name: 'MongoDB', level: 50 },
// //       { name: 'Mongoose', level: 40 },
// //     ],
// //   },
// //   {
// //     title: 'Programming Languages',
// //     skills: [
// //       { name: 'C++', level: 50 },
// //       { name: 'C', level: 40 },
// //     ],
// //   },
// // ];

// // function Skills() {
// //   return (
// //     <section id="skills" className="py-20">
// //       <div className="container mx-auto px-6">
// //         {/* Heading */}
// //         <div className="flex items-center gap-2 mb-12">
// //           <Code2 className="w-6 h-6 text-purple-500" />
// //           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
// //         </div>

// //         {/* Skills Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {skillCategories.map((category) => (
// //             <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
// //               <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
// //               <div className="space-y-4">
// //                 {category.skills.map((skill) => (
// //                   <div key={skill.name}>
// //                     <div className="flex justify-between items-center mb-1">
// //                       <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
// //                       <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{skill.level}%</span>
// //                     </div>
// //                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative">
// //                       <div
// //                         className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
// //                         style={{ width: `${skill.level}%` }}
// //                       ></div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Skills;



// import React from "react";
// import { Code2 } from "lucide-react";

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "HTML", level: 90 },
//       { name: "CSS", level: 85 },
//       { name: "JavaScript", level: 60 },
//       { name: "React", level: 60 },
//       { name: "TailwindCSS", level: 50 },
//       { name: "Chakra UI", level: 30 },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", level: 60 },
//       { name: "Express.js", level: 45 },
//       { name: "MongoDB", level: 50 },
//       { name: "Mongoose", level: 40 },
//     ],
//   },
//   {
//     title: "Programming Languages",
//     skills: [
//       { name: "C++", level: 40 },
//       { name: "C", level: 30 },
//     ],
//   },
// ];

// function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center gap-2 mb-12 justify-center">
//           <Code2 className="w-6 h-6 text-amber-400" />
//           <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
//             Skills & Technologies
//           </h2>
//         </div>
  
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillCategories.map((category) => (
//             <div
//               key={category.title}
//               className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-amber-400"></div>
//                 {category.title}
//               </h3>
//               <div className="space-y-4">
//                 {category.skills.map((skill) => (
//                   <div key={skill.name} className="group">
//                     {/* ... rest of the skill bars ... */}
//                     <div className="w-full bg-gray-700 rounded-full h-2.5 relative overflow-hidden">
//                       <div
//                         className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Skills;


import React from "react";
import { Code, Server, Database, Globe, Terminal, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-[var(--color-gold1)]" />,
    skills: ["React.js", "JavaScript"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-[var(--color-gold1)]" />,
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-[var(--color-gold1)]" />,
    skills: ["MongoDB"]
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6 text-[var(--color-gold1)]" />,
    skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="w-6 h-6 text-[var(--color-gold1)]" />,
    skills: ["Git", "GitHub", "Vercel", "Netlify"]
  },
  {
    title: "UI/UX",
    icon: <Palette className="w-6 h-6 text-[var(--color-gold1)]" />,
    skills: ["Tailwind CSS", "Figma"]
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[var(--color-ui)]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow hover:border-[var(--color-gold2)]/30"
            >
              <div className="flex items-center gap-3 mb-8">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-100">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-gray-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
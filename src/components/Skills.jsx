// import React from 'react';
// import { Code2 } from 'lucide-react';

// const skillCategories = [
//   {
//     title: 'Frontend',
//     skills: [
//       { name: 'HTML', level: 90 },
//       { name: 'CSS', level: 85 },
//       { name: 'JavaScript', level: 60 },
//       { name: 'React', level: 60 },
//       { name: 'TailwindCSS', level: 50 },
//       { name: 'Chakra UI', level: 30 },
//     ],
//   },
//   {
//     title: 'Backend',
//     skills: [
//       { name: 'Node.js', level: 60 },
//       { name: 'Express.js', level: 45 },
//       { name: 'MongoDB', level: 50 },
//       { name: 'Mongoose', level: 40 },
//     ],
//   },
//   {
//     title: 'Programming Languages',
//     skills: [
//       { name: 'C++', level: 50 },
//       { name: 'C', level: 40 },
//     ],
//   },
// ];

// function Skills() {
//   return (
//     <section id="skills" className="py-20">
//       <div className="container mx-auto px-6">
//         {/* Heading */}
//         <div className="flex items-center gap-2 mb-12">
//           <Code2 className="w-6 h-6 text-purple-500" />
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category) => (
//             <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
//               <div className="space-y-4">
//                 {category.skills.map((skill) => (
//                   <div key={skill.name}>
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
//                       <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative">
//                       <div
//                         className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
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
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 60 },
      { name: "TailwindCSS", level: 50 },
      { name: "Chakra UI", level: 30 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 45 },
      { name: "MongoDB", level: 50 },
      { name: "Mongoose", level: 40 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: 40 },
      { name: "C", level: 30 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-12">
          <Code2 className="w-6 h-6 text-black" />
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-black p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-white h-3 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
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

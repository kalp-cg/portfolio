// import React from "react";

// function About() {
//   return (
//     <section id="about" className="py-20 bg-black text-white px-6 md:px-16">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-white">
//           About <span className="text-gray-400">Me</span>
//         </h2>
//       </div>

//       <div className="max-w-4xl mx-auto text-center space-y-6">
//         <p className="text-gray-400 text-lg leading-relaxed">
//           I'm a passionate developer skilled in building modern web applications. 
//           I specialize in frontend and backend technologies to create seamless digital experiences. 
//           Additionally, I have a keen eye for UI/UX, ensuring that the designs I implement are both 
//           visually appealing and user-friendly.
//         </p>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { title: "Frontend", skills: "React, Tailwind" },
//             { title: "Backend", skills: "Node.js, Express" },
//             { title: "Database", skills: "MongoDB" },
//             { title: "UI/UX", skills: "Figma, ShadeCN, Chakra UI" }
//           ].map((skill, index) => (
//             <div key={index} className="p-4 bg-gray-900 border border-gray-700 rounded-lg text-center">
//               <h3 className="font-medium text-white text-lg">{skill.title}</h3>
//               <p className="text-gray-400">{skill.skills}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white text-center font-mono">
      <h2 className="text-5xl font-extrabold mb-8 tracking-wide">
        About <span className="text-blue-500">Me</span>
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1738847400430-de5eabe7e6f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt="About Me"
          className="w-64 h-64 object-cover rounded-lg shadow-lg mx-auto md:mr-10 transition-transform transform hover:scale-105"
        />
        <div className="text-left mt-6 md:mt-0 px-[24px]">
          <p className="text-lg leading-relaxed">
            I'm a passionate and creative <span className="text-blue-400 font-semibold">Frontend Developer</span> 
             with a keen interest in building interactive and user-friendly web applications. My expertise includes 
            modern frontend technologies, UI/UX design, and responsive web development.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I enjoy solving complex problems and bringing innovative ideas to life. My goal is to create 
            seamless digital experiences that leave a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

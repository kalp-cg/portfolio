import React from "react";

const experiences = [
  {
    role: "Lead Software Engineer",
    company: "Google",
    duration: "Nov 2019 - Present",
    description:
      "Leading the frontend team at Google, focusing on developing innovative solutions for scalable applications.",
    icon: "🔴",
  },
  {
    role: "Software Engineer",
    company: "YouTube",
    duration: "Jan 2017 - Oct 2019",
    description:
      "Worked on YouTube's UI, optimizing video streaming performance and enhancing user engagement.",
    icon: "🔺",
  },
  {
    role: "Junior Software Engineer",
    company: "Apple",
    duration: "Jan 2016 - Dec 2017",
    description:
      "Developed UI components for Apple's ecosystem, ensuring smooth user experiences across devices.",
    icon: "🍏",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black text-center">
      <h2 className="text-4xl font-bold mb-8">
        My <span className="text-blue-500">Experience</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg text-left"
          >
            <h3 className="text-2xl font-semibold flex items-center">
              <span className="mr-2">{exp.icon}</span> {exp.role} at {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.duration}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

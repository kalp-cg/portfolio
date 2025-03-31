import React from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    level: "B.Tech First Semester",
    score: "9.62 CGPA",
    year: "2023",
  },
  {
    level: "12th Grade",
    score: "63%",
    year: "2023",
  },
  {
    level: "10th Grade",
    score: "92%",
    year: "2021",
  },
];

function Education() {
  return (
    <section id="education" className="py-20 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          My <span className="text-[var(--color-gold1)]">Education</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-12 space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-[var(--color-ui)] p-6 rounded-lg border border-gray-700 hover:border-[var(--color-gold2)]/30 transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">{edu.level}</h3>
              <span className="text-[var(--color-gold1)]">{edu.year}</span>
            </div>
            <p className="text-[var(--color-gold2)] mt-2">Score: {edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
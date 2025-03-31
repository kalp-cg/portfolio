import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[var(--color-bg)] text-[var(--color-text)] text-center">
      <h2 className="text-5xl font-extrabold mb-8 tracking-wide">
        About <span className="text-[var(--color-gold1)]">Me</span>
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="relative group">
          <div 
            className="absolute -inset-2 bg-gradient-to-r from-[var(--color-gold1)] to-[var(--color-gold3)] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"
          ></div>
          <img
            src="https://res.cloudinary.com/dhyds3low/image/upload/v1739980245/wwp4erdalqmdm9uhhahl.jpg"
            alt="About Me"
            className="relative w-64 h-64 object-cover rounded-lg shadow-lg mx-auto md:mr-10 transition-transform group-hover:scale-105 border-2 border-[var(--color-gold2)/20]"
          />
        </div>
        <div className="text-left mt-6 md:mt-0 px-6">
          <p className="text-lg leading-relaxed text-[var(--color-text)]">
            I'm a passionate and creative <span className="text-[var(--color-gold2)] font-semibold">Frontend Developer and Backend developer</span> 
            with a keen interest in building interactive and user-friendly web applications. My expertise includes 
            modern frontend technologies, UI/UX design, and responsive web development.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text)]">
            I enjoy solving complex problems and bringing innovative ideas to life. My goal is to create 
            seamless digital experiences that leave a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
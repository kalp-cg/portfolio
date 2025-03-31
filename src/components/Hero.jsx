import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaRocket } from "react-icons/fa";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Color variables
  const colors = {
    black: "#000000",
    darkGray1: "#1A1A1A",
    darkGray2: "#333333",
    gold1: "#F5C16C",
    gold2: "#E6B35A",
    gold3: "#D9A049"
  };

  useEffect(() => {
    // Apply colors as CSS variables
    document.documentElement.style.setProperty('--color-bg', colors.black);
    document.documentElement.style.setProperty('--color-text', colors.darkGray2);
    document.documentElement.style.setProperty('--color-ui', colors.darkGray1);
    document.documentElement.style.setProperty('--color-gold1', colors.gold1);
    document.documentElement.style.setProperty('--color-gold2', colors.gold2);
    document.documentElement.style.setProperty('--color-gold3', colors.gold3);

    // Entrance animations
    [textRef.current, imageRef.current].forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 300 * (i + 1));
    });
  }, []);

  // Floating particles
  const particles = Array(50).fill(0).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.8 + 0.2
  }));

  return (
    <section 
      className="min-h-screen overflow-hidden flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)]"
      onMouseMove={(e) => {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        });
      }}
    >
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Golden Gradient Glow (Right Side) */}
        <div 
          className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[var(--color-gold1)/30] via-[var(--color-gold2)/20] to-transparent"
          style={{
            animation: "glowPulse 8s ease infinite alternate",
            maskImage: "linear-gradient(to left, black, transparent 70%)"
          }}
        />

        {/* Floating Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
              animation: `particleFloat ${p.speed}s ease-in-out infinite both`,
              animationDelay: `${p.delay}s`,
              transform: `translate(
                ${mousePosition.x * 10 - 5}px, 
                ${mousePosition.y * 10 - 5}px
              )`
            }}
          />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text */}
        <div 
          ref={textRef}
          className="opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[var(--color-gold2)] animate-pulse"></div>
            <span className="font-mono text-[var(--color-gold2)] tracking-widest">WEB DEVELOPER</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span>Kalp </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold1)] to-[var(--color-gold3)]">
              Patel
            </span>
          </h1>

          <p className="text-xl text-[var(--color-text)] mb-8 leading-relaxed">
            Building elegant web experiences with modern technologies and
            <span className="text-[var(--color-gold1)]"> precision animations</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-[var(--color-gold2)] to-[var(--color-gold3)] text-[var(--color-bg)] rounded-full font-medium flex items-center gap-2 hover:scale-[1.03] transition-transform duration-300"
            >
              <FaRocket /> Launch Project
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-[var(--color-gold2)/50] rounded-full font-medium hover:bg-[var(--color-gold2)/10] transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div 
          ref={imageRef}
          className="opacity-0 transform translate-y-10 transition-all duration-700 flex justify-center"
        >
          <div className="relative group w-full max-w-md">
            {/* Golden Frame */}
            <div 
              className="absolute -inset-1 rounded-xl border border-[var(--color-gold2)/30] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(45deg, transparent, var(--color-gold2)/10, transparent)`,
                animation: "borderGlow 6s ease infinite"
              }}
            />

            {/* Profile Image */}
            <div className="relative z-10 rounded-lg overflow-hidden border border-[var(--color-ui)] bg-[var(--color-ui)]">
              <img
                src="/profile-dark.jpg"
                alt="Kalp Patel"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Golden Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--color-gold1)/10, transparent 70%)`
                }}
              />
            </div>

            {/* Tech Tags */}
            <div className="absolute -bottom-4 -left-4 bg-[var(--color-ui)] px-4 py-2 rounded-full border border-[var(--color-gold2)/30] text-sm font-mono animate-float">
              React.js
            </div>
            <div className="absolute -top-4 -right-4 bg-[var(--color-ui)] px-4 py-2 rounded-full border border-[var(--color-gold1)/30] text-sm font-mono animate-float-delay">
              Next.js
            </div>
          </div>
        </div>
      </div>

      {/* ===== GLOBAL STYLES ===== */}
      <style jsx global>{`
        :root {
          --color-bg: #000000;
          --color-text: #333333;
          --color-ui: #1A1A1A;
          --color-gold1: #F5C16C;
          --color-gold2: #E6B35A;
          --color-gold3: #D9A049;
        }

        @keyframes glowPulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { opacity: 0.3; }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -8px); }
        }

        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 10px 0 var(--color-gold2)/10; }
          50% { box-shadow: 0 0 20px 5px var(--color-gold2)/20; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(-4px); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 border-b border-[var(--color-gold2)/20] shadow-lg" 
          : "bg-black/80 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with golden gradient */}
          <a 
            href="#home" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-gold1)] to-[var(--color-gold3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold2)] rounded"
            aria-label="Home"
          >
            Kalp Patel
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-[var(--color-gold2)] hover:text-[var(--color-gold1)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-gold2)] rounded"
                aria-label={`Navigate to ${item}`}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-4 ml-4">
              {[
                { icon: <FaGithub aria-hidden="true" />, href: "https://github.com/kalp-cg", label: "GitHub" },
                { icon: <FaLinkedin aria-hidden="true" />, href: "https://linkedin.com/in/kalp-patel-", label: "LinkedIn" },
                { icon: <FaTwitter aria-hidden="true" />, href: "https://x.com/patel_kalp92111", label: "Twitter" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--color-gold2)] hover:text-[var(--color-gold1)] transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-gold2)]"
                  aria-label={`Visit ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="/images/Black and White Clean Professional A4 Resume.pdf"
              download
              className="px-4 py-2 bg-gradient-to-r from-[var(--color-gold2)] to-[var(--color-gold3)] text-black font-medium rounded-lg hover:shadow-lg hover:shadow-[var(--color-gold2)/30] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-gold2)]"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold2)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={24} className="text-[var(--color-gold1)]" />
            ) : (
              <Menu size={24} className="text-[var(--color-gold1)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-4 pb-6 space-y-3">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-[var(--color-gold2)] hover:text-[var(--color-gold1)] hover:bg-[var(--color-gold2)/10] rounded transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label={`Navigate to ${item}`}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-4 px-4 pt-2">
              {[
                { icon: <FaGithub aria-hidden="true" />, href: "https://github.com/kalp-cg", label: "GitHub" },
                { icon: <FaLinkedin aria-hidden="true" />, href: "https://linkedin.com/in/kalp-patel-", label: "LinkedIn" },
                { icon: <FaTwitter aria-hidden="true" />, href: "https://x.com/patel_kalp92111", label: "Twitter" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--color-gold2)] hover:text-[var(--color-gold1)] transition-colors rounded-full"
                  aria-label={`Visit ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="/images/Black and White Clean Professional A4 Resume.pdf"
              download
              className="block mx-4 mt-4 px-4 py-2 bg-gradient-to-r from-[var(--color-gold2)] to-[var(--color-gold3)] text-black text-center font-medium rounded-lg hover:shadow-lg hover:shadow-[var(--color-gold2)/30] transition-all"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
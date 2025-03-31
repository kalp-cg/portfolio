

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">
        Let's <span className="text-amber-400">Talk</span> for Something Special
      </h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out to me for collaborations, design queries, or any exciting projects!
      </p>
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-amber-400 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-amber-400 text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-amber-400 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-3 rounded-md font-semibold hover:from-amber-400 hover:to-amber-500 transition"
          >
            Get in Touch
          </button>
        </form>
      </div>
      <p className="mt-6 text-gray-300">
        📧 kalp.patel.codinggita@gmail.com 
      </p>
    </section>
  );
};

export default Contact;

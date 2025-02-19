// import React from "react";
// import { Mail, Github, Linkedin } from "lucide-react";

// function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-black text-white">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-white">
//           Let's <span className="text-gray-400">Talk</span> for Something Special
//         </h2>
//         <p className="text-gray-400 mt-4">
//           Have a project in mind or just want to say hi? Feel free to reach out!
//         </p>
//       </div>

//       <div className="max-w-2xl mx-auto mt-10">
//         <form className="space-y-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500"
//           />
//           <textarea
//             rows="4"
//             placeholder="Your Message"
//             className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors text-white"
//           >
//             Get in Touch
//           </button>
//         </form>
//       </div>

//       <div className="flex justify-center gap-6 mt-10">
//         <a href="#" className="text-gray-400 hover:text-white">
//           <Github className="w-6 h-6" />
//         </a>
//         <a href="#" className="text-gray-400 hover:text-white">
//           <Linkedin className="w-6 h-6" />
//         </a>
//         <a href="#" className="text-gray-400 hover:text-white">
//           <Mail className="w-6 h-6" />
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black text-center">
      <h2 className="text-4xl font-bold mb-8">
        Let's <span className="text-blue-500">Talk</span> for Something Special
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Feel free to reach out to me for collaborations, design queries, or any exciting projects!
      </p>
      <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border dark:border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border dark:border-gray-700 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border dark:border-gray-700 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Get in Touch
          </button>
        </form>
      </div>
      <p className="mt-6 text-gray-600 dark:text-gray-300">
        📧 Youremail@gmail.com | 📞 123-456-7890
      </p>
    </section>
  );
};

export default Contact;

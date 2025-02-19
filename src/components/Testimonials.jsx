import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Evren Shah",
    role: "Designer",
    feedback: "I recently had the pleasure of collaborating with Evren, and I must say he exceeded my expectations!",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "Flora Sheen",
    role: "Developer",
    feedback: "Evren's attention to detail and commitment to delivering high-quality work are truly commendable!",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Evren Shah",
    role: "Designer",
    feedback: "The project was executed flawlessly, and I look forward to working together again in the future.",
    image: "/user3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-black text-center">
      <h2 className="text-4xl font-bold mb-8">
        My <span className="text-blue-500">Testimonials</span>
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="mt-4 italic text-gray-700 dark:text-gray-300">
              "{testimonial.feedback}"
            </p>
            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

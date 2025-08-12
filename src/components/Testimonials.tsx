"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Ryan Jeffery",
    company: "KPI Mystery Shopping",
    role: "Founder",
    text: "Infynno's experience and dedication are exceptional. They always deliver high-quality work on schedule, often beyond my expectations. Their technological expertise and web app development knowledge have helped my projects succeed. Ronak and his crew are a fantastic web app development partner.",
    rating: 5,
  },
  {
    name: "Altaf Zagade",
    company: "Quadtec Solutions",
    role: "Solution Architect",
    text: "We were using an outdated time management process. It was cumbersome and painful for the employees. Ronak and Infynno Solutions developers team gathered our requirements and build a new platform for us. The process is simple and easy to use.",
    rating: 5,
  },
  {
    name: "Marty Sloan",
    company: "Karmatek Consulting",
    role: "Founder",
    text: "I have been working with Ronak and Infynno for many years. They are a top-tier development firm that values attention to detail and delivering a superior product on time and on budget. Their team has a wide area of expertise and their communication is always prompt.",
    rating: 5,
  },
  {
    name: "Rick Pinkerman",
    company: "NoticeNinja",
    role: "Chief Product Officer",
    text: "Everyone is very impressed with the functionality and the usability. Infynno Solutions' work meets all client expectations. The team delivers high-quality work, and all stakeholders are impressed. They're organized, efficient, and diligent at completing project-related tasks.",
    rating: 5,
  },
  {
    name: "Linda Kroll",
    company: "Compassionate Communication Academy",
    role: "Founder",
    text: "Bhavdip is a very talented graphic designer who goes above and beyond to meet the needs of my business. He offers variations on themes and works with me patiently until it is just right. I would recommend him to everyone looking for a designer who is talented, patient and excellent!",
    rating: 5,
  },
  {
    name: "Geetika Sinha",
    company: "SitByCare",
    role: "Founder & CEO",
    text: "Bhavdip is an immensely talented backend developer with great work ethics. He worked as a team lead for my start up SitByCare. Bhavdip is a powerhouse of knowledge and hard work. He never has a no for an answer and very eager to take up whatever comes his way.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="pointer-events-none absolute top-20 left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.4),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            We turned our client&apos;s ideas into successful web and mobile app
            digital platforms. Our knowledge of Laravel, React, Node.js and AWS
            was key to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
            >
              <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_60%)] blur-2xl opacity-0 transition group-hover:opacity-100" />

              <div className="relative">
                <FaQuoteLeft className="text-2xl text-white/40 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FaStar key={j} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-white/50">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

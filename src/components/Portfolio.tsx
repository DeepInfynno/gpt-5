"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cases = [
  {
    title: "Tax Notice Compliance",
    text: "Comprehensive tax compliance platform for businesses to manage tax notices and regulatory requirements efficiently.",
    tag: "Finance",
  },
  {
    title: "KPI Mystery Shopping",
    text: "Advanced mystery shopping platform for retail businesses to monitor and improve customer service quality.",
    tag: "Mystery Shopping",
  },
  {
    title: "MedEntry",
    text: "Educational technology platform designed for medical entrance exam preparation and student assessment.",
    tag: "EdTech",
  },
  {
    title: "Guest Brief",
    text: "Hospitality management system streamlining guest communication and service delivery for hotels and resorts.",
    tag: "Hospitality",
  },
  {
    title: "FMT News Platform",
    text: "Modern news and media platform delivering real-time content management and publishing capabilities.",
    tag: "News & Media",
  },
  {
    title: "Linkko Advertising",
    text: "Digital advertising platform connecting brands with their target audience through innovative marketing solutions.",
    tag: "Advertising",
  },
  {
    title: "TailwindTap Components",
    text: "Free open-source starter components & templates in Plain HTML, React, VueJs & Laravel for SaaS and landing pages.",
    tag: "Open Source",
  },
  {
    title: "HRMS Platform",
    text: "Task management system organizing projects, planning, and delivery through timeline management for teams.",
    tag: "Enterprise",
  },
  {
    title: "AI Title Generator",
    text: "AI-powered tagline generator producing catchy and memorable phrases using natural language processing algorithms.",
    tag: "AI/ML",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create sticky effect with right-to-left movement
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);

  return (
    <section ref={sectionRef} id="portfolio" className="relative h-[800vh]">
      <div className="sticky top-0 h-screen flex items-center py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 w-full scrollbar-hide">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Turning Ideas into Digital Success Stories
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl">
                Recent project portfolio speaks about the quality of our work
                and our commitment to delivering results. Take a look at some of
                our amazing work.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Start a project
            </a>
          </div>

          <div className="">
            <motion.div style={{ x }} className="flex gap-6 w-max">
              {cases.map((c, idx) => (
                <motion.div
                  key={c.title}
                  // initial={{ y: 20 }}
                  // whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.2, delay: idx * 0.1 }}
                  className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[420px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                    {c.tag}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-white/70 text-sm">{c.text}</p>
                  <div className="mt-6 h-36 rounded-xl bg-[radial-gradient(500px_160px_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

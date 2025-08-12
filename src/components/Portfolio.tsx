"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cases = [
  {
    title: "AI Sales Copilot",
    text: "LLM agent that automates prep and follow‑ups for enterprise SDR teams.",
    tag: "AI/LLM",
  },
  {
    title: "Cloud Cost Optimizer",
    text: "FinOps dashboards and policy as code that cut spend by 28%.",
    tag: "Cloud",
  },
  {
    title: "Real‑time Fraud Edge",
    text: "Streaming analytics on the edge with sub‑50ms decisions.",
    tag: "Data/Edge",
  },
  {
    title: "Dev Portal & Golden Paths",
    text: "Accelerated onboarding and paved roads for 120+ microservices.",
    tag: "DevEx",
  },
  {
    title: "Smart IoT Platform",
    text: "Edge computing solution managing 50K+ devices with real‑time analytics.",
    tag: "IoT/Edge",
  },
  {
    title: "Blockchain Trading Bot",
    text: "Automated DeFi arbitrage system with MEV protection and yield optimization.",
    tag: "Web3/DeFi",
  },
  {
    title: "Video Streaming CDN",
    text: "Global content delivery network handling 10M+ concurrent streams.",
    tag: "Media/CDN",
  },
  {
    title: "ML Recommendation Engine",
    text: "Personalization system increasing conversion rates by 35% across e‑commerce.",
    tag: "ML/Personalization",
  },
  {
    title: "Cybersecurity SOC Platform",
    text: "AI‑powered security operations center with automated threat response.",
    tag: "Security/AI",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create sticky effect with right-to-left movement
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-120%"]);

  return (
    <section ref={sectionRef} id="portfolio" className="relative h-[800vh]">
      <div className="sticky top-0 h-screen flex items-center py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 w-full scrollbar-hide">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Selected work
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl">
                A snapshot of platforms and products we&apos;ve shipped with our
                partners.
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

"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaBrain,
  FaCode,
  FaLock,
  FaRocket,
  FaCubes,
} from "react-icons/fa6";

const services = [
  {
    icon: FaCloud,
    title: "Cloud & Platform",
    text: "Design, migrate and operate cloud-native stacks on AWS, Azure, and GCP.",
  },
  {
    icon: FaBrain,
    title: "AI & Data",
    text: "LLM apps, MLOps, vector search, analytics pipelines and real-time insights.",
  },
  {
    icon: FaCode,
    title: "Product Engineering",
    text: "Type-safe frontends, resilient backends, mobile and edge with CI/CD built-in.",
  },
  {
    icon: FaLock,
    title: "Security & Compliance",
    text: "Zero-trust, IAM, SOC2-ready workflows, secrets & policy automation.",
  },
  {
    icon: FaRocket,
    title: "DevEx & SRE",
    text: "Developer portals, golden paths, observability and performance tuning.",
  },
  {
    icon: FaCubes,
    title: "Microservices & APIs",
    text: "Event-driven systems, GraphQL/gRPC, contract testing and reliability engineering.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            What we do
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Impact-first services for modern software, cloud and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
              >
                <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22),transparent_60%)] blur-2xl opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3 text-2xl text-white">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{s.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

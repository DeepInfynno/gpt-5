"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.4),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-xl"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight"
              >
                We architect platforms that scale
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-white/70">
                From cloud-native microservices to edge AI and real-time
                analytics, our teams ship production systems with speed and
                rigor. We blend developer experience, platform reliability and
                AI-first thinking to unlock compounding impact.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-8 grid grid-cols-2 gap-6"
              >
                <div>
                  <div className="text-3xl font-bold text-white">250+ </div>
                  <div className="text-sm text-white/60">
                    projects delivered
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">98% </div>
                  <div className="text-sm text-white/60">client retention</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[560px] rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/window.svg"
                  alt="Dashboard preview"
                  fill
                  className="object-contain p-10 dark:invert opacity-90"
                />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(700px_250px_at_50%_0%,rgba(139,92,246,0.18),transparent_70%)]"
                  animate={{ backgroundPosition: ["0% 0%", "80% 0%", "0% 0%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 16,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

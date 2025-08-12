"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute inset-0 bg-[linear-gradient(120deg,#0ea5e9_0%,#6366f1_30%,#a855f7_60%,#06b6d4_100%)] opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Ready to build what’s next?
            </h3>
            <p className="mt-3 text-white/70">
              Let’s co‑design a roadmap and start shipping within weeks, not
              months.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href="mailto:hello@example.com"
              className="relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white"
            >
              <span className="absolute inset-0 rounded-xl bg-[linear-gradient(135deg,#22d3ee_0%,#6366f1_50%,#a855f7_100%)]" />
              <span className="absolute -inset-[1px] rounded-xl bg-white/30 opacity-30 blur-sm" />
              <span className="relative">Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

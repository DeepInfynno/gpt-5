"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgLayer1Ref = useRef<HTMLDivElement | null>(null);
  const bgLayer2Ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (bgLayer1Ref.current) {
            gsap.to(bgLayer1Ref.current, {
              y: progress * 120,
              overwrite: true,
            });
          }
          if (bgLayer2Ref.current) {
            gsap.to(bgLayer2Ref.current, {
              y: progress * 180,
              overwrite: true,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate overflow-hidden min-h-[92vh] flex items-center"
    >
      {/* Background gradient field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          ref={bgLayer1Ref}
          style={{ y: y1 }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[1200px] rounded-[50%] blur-3xl opacity-60"
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.35)_0%,rgba(17,24,39,0.4)_60%,transparent_70%)]" />
        </motion.div>
        <motion.div
          ref={bgLayer2Ref}
          style={{ y: y2 }}
          className="absolute -bottom-40 left-1/3 h-[700px] w-[900px] rounded-[50%] blur-3xl opacity-70"
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35)_0%,rgba(17,24,39,0.35)_60%,transparent_70%)]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
              data-hero-fade
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              6+ Years of Excellence in Digital Solutions
            </div>
            <h1
              data-hero-fade
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight text-white"
            >
              Empowering Startups with Scalable Web and Mobile App Solutions
            </h1>
            <p
              data-hero-fade
              className="mt-5 max-w-2xl text-base sm:text-lg text-white/70"
            >
              Transform your ideas into powerful digital products with our
              expert development team. We&apos;re committed to your long-term
              success with comprehensive support and scalable architecture.
            </p>
            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              data-hero-fade
            >
              <a
                href="#portfolio"
                className="cursor-pointer relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
              >
                <span className="absolute inset-0 rounded-xl bg-[linear-gradient(135deg,#6366f1_0%,#8b5cf6_50%,#06b6d4_100%)]" />
                <span className="absolute -inset-[1px] rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,#60a5fa_0deg,transparent_60deg,transparent_300deg,#a78bfa_360deg)] opacity-40 blur-sm" />
                <span className="relative">Start Your Digital Journey</span>
              </a>
              <a
                href="#contact"
                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Get A Quote
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative mx-auto w-full max-w-[520px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/globe.svg"
                  alt="Abstract globe"
                  fill
                  className="object-contain p-10 dark:invert opacity-90"
                  priority
                />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{ repeat: Infinity, duration: 12 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

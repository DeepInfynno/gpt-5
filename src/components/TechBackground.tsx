"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function TechBackground() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const dots = ref.current!.querySelectorAll("[data-dot]");
      gsap.fromTo(
        dots,
        { opacity: 0, y: 8 },
        {
          opacity: 0.25,
          y: 0,
          duration: 1,
          stagger: { each: 0.02, from: "random" },
          ease: "power2.out",
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {mounted && (
        <div className="absolute inset-0">
          {Array.from({ length: 120 }).map((_, i) => (
            <span
              key={i}
              data-dot
              className="absolute h-[2px] w-[2px] rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  stagger?: number;
  from?: { opacity?: number; y?: number; x?: number; scale?: number };
};

export default function ScrollReveal({
  children,
  stagger = 0.12,
  from = { opacity: 0, y: 20 },
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const items = ref.current!.querySelectorAll("[data-sr]");
      gsap.set(items, from);
      ScrollTrigger.batch(items, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            ...{ opacity: 1, y: 0, x: 0, scale: 1 },
            stagger,
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [from, stagger]);

  return <div ref={ref}>{children}</div>;
}


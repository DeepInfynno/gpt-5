"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-white/10 bg-black/40 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <Link href="#home" className="cursor-pointer flex items-center gap-2">
          <Image
            src="/infynno-logo.svg"
            alt="Infynno Solutions"
            width={140}
            height={32}
            className="text-white"
          />
        </Link>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <Link href="#about" className="cursor-pointer hover:text-white">
            About
          </Link>
          <Link href="#services" className="cursor-pointer hover:text-white">
            Services
          </Link>
          <Link href="#portfolio" className="cursor-pointer hover:text-white">
            Work
          </Link>
          <Link href="#contact" className="cursor-pointer hover:text-white">
            Contact
          </Link>
        </nav>
        <a
          href="#contact"
          className="cursor-pointer hidden md:inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}

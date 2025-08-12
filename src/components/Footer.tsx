"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div>
            <Image
              src="/infynno-logo.svg"
              alt="Infynno Solutions"
              width={140}
              height={32}
              className="text-white mb-3"
            />
            <p className="mt-3 text-sm text-white/70 max-w-xs">
              Empowering startups with scalable web and mobile app solutions.
              Transform your ideas into powerful digital products.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#portfolio">Work</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">
              Our Offices
            </div>
            <div className="mt-3 space-y-4 text-sm text-white/70">
              <div>
                <div className="font-medium text-white/80">India</div>
                <div>E-720 Ganesh Glory 11</div>
                <div>Gota, Ahmedabad - 382481</div>
              </div>
              <div>
                <div className="font-medium text-white/80">USA</div>
                <div>505 Valley Brooke Rd</div>
                <div>Venetia, PA 15367</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>info@infynno.com</li>
              <li>+91 79 40031525</li>
              <li>Get A Quote</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Follow</div>
            <div className="mt-3 flex gap-3 text-white/80">
              <a
                href="https://github.com"
                className="rounded-lg border border-white/10 p-2 hover:bg-white/10"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                className="rounded-lg border border-white/10 p-2 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com"
                className="rounded-lg border border-white/10 p-2 hover:bg-white/10"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Infynno. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

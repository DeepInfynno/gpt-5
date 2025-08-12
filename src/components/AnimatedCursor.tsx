"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Motion values for cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring animation for follower with glass effect
  const followerX = useSpring(cursorX, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });
  const followerY = useSpring(cursorY, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    // Mouse enter/leave handlers for hover effects
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Mouse down/up handlers for click effects
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Glass morphism follower ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998]"
        style={{
          x: followerX,
          y: followerY,
          marginLeft: -24,
          marginTop: -24,
        }}
        animate={{
          scale: isHovering ? 1.4 : isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
      >
        {/* Glass effect container */}
        <div
          className="w-full h-full rounded-full border border-white/20"
          style={{
            background: isHovering
              ? "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(6, 182, 212, 0.08) 100%)"
              : "rgba(255, 255, 255, 0.05)",
            boxShadow: isHovering
              ? `
                0 0 30px rgba(99, 102, 241, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                inset 0 -1px 0 rgba(255, 255, 255, 0.1)
              `
              : `
                0 0 15px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                inset 0 -1px 0 rgba(255, 255, 255, 0.05)
              `,
            borderImage: isHovering
              ? "linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.4), rgba(6, 182, 212, 0.3)) 1"
              : "none",
          }}
        >
          {/* Inner glass highlight */}
          <div
            className="absolute inset-1 rounded-full"
            style={{
              background: isHovering
                ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
            }}
          />

          {/* Animated glow ring */}
          {isHovering && (
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
                filter: "blur(2px)",
              }}
            />
          )}
        </div>
      </motion.div>
    </>
  );
}

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const SIZE = 600;

function Sandwich() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Changed offset to better trigger animation
  });

  // Transform scroll progress to Y position (in pixels)
  const firstYPos = useTransform(
    scrollYProgress,
    [0.1, 0.7, 0.9, 1],
    [0, 1020, 1280, 1350]
  );
  const textYPos = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.9, 1],
    [0, 20, 890, 890, 930]
  );
  const secondYPos = useTransform(
    scrollYProgress,
    [0.2, 0.7, 0.9, 1],
    [0, 450, 570, 615]
  );
  const thirdYPos = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.95, 1],
    [0, 100, 180, 180]
  );

  const textScale = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.85, 0.87, 1],
    [1, 0.8, 0.7, 0.4, 0.4]
  );
  const textOpacity = useTransform(scrollYProgress, [0.9, 0.91, 1], [1, 0, 0]);
  const imageGlowOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.8, 0.9, 1.1],
    [0.2, 1, 1, 0]
  );
  const textGlowOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.75],
    [0, 1, 1, 0]
  );

  // Smooth out the animation
  const firstY = useSpring(firstYPos, {
    stiffness: 100,
    damping: 60,
  });
  const secondY = useSpring(secondYPos, {
    stiffness: 80,
    damping: 70,
  });
  const textY = useSpring(textYPos, {
    stiffness: 70,
    damping: 70,
  });
  const thirdY = useSpring(thirdYPos, {
    stiffness: 70,
    damping: 70,
  });

  return (
    <div ref={containerRef} className="mt-32 h-[1600px]">
      <motion.div
        className="z-50"
        style={{
          y: firstY,
          zIndex: 30,
          position: "relative",
        }}
      >
        <Image
          src="https://fundingpips.com/_next/image?url=%2Fimgs%2Fcapital%2F0.png&w=750&q=75"
          width={SIZE}
          height={SIZE}
          alt=""
        />
      </motion.div>
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          scale: textScale,
          zIndex: 25,
          position: "relative",
        }}
        className="flex justify-center items-center relative mt-20"
      >
        {/* Glow effect container - positioned behind text */}
        <motion.div
          style={{
            opacity: textGlowOpacity,
          }}
          className="absolute inset-0 w-full h-[500px] overflow-visible"
        >
          {/* Left blob */}
          <div
            className="absolute left-[20%] top-[30%] -translate-y-1/2 h-96 w-96 rounded-full mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(189, 255, 37, 0.4) 0%, 
                rgba(50, 255, 37, 0.3) 30%, 
                transparent 80%
              )`,
              filter: "blur(80px) brightness(1.5)",
              transform: "translateZ(0)",
              boxShadow: "0 0 100px 20px rgba(189, 255, 37, 0.15)",
            }}
          />

          {/* Center blob */}
          <div
            className="absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(189, 255, 37, 0.5) 0%, 
                rgba(50, 255, 37, 0.4) 40%, 
                transparent 85%
              )`,
              filter: "blur(100px) brightness(1.7)",
              transform: "translateZ(0)",
              boxShadow: "0 0 120px 40px rgba(189, 255, 37, 0.2)",
            }}
          />

          {/* Right blob */}
          <div
            className="absolute right-[20%] top-[30%] -translate-y-1/2 h-96 w-96 rounded-full mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(189, 255, 37, 0.4) 0%, 
                rgba(50, 255, 37, 0.3) 30%, 
                transparent 80%
              )`,
              filter: "blur(80px) brightness(1.5)",
              transform: "translateZ(0)",
              boxShadow: "0 0 100px 20px rgba(189, 255, 37, 0.15)",
            }}
          />
        </motion.div>

        {/* Text on top of glow */}
        <h3 className="text-8xl font-semibold max-w-xl text-center relative z-10">
          Your skill is our capital.
        </h3>
      </motion.div>
      <motion.div
        className="z-40 mt-20"
        style={{
          y: secondY,
          zIndex: 20,
          position: "relative",
        }}
      >
        <Image
          src="/home/sb.svg"
          className="opacity-70 fill-zinc-200"
          width={SIZE}
          height={SIZE}
          alt=""
        />
      </motion.div>
      <motion.div
        className="z-30 mt-20 relative"
        style={{
          y: thirdY,
          zIndex: 10,
          position: "relative",
        }}
      >
        {/* Glow effect container - positioned behind image */}
        <motion.div
          style={{ opacity: imageGlowOpacity }}
          className="absolute inset-0 w-full h-[500px] z-0 overflow-visible"
        >
          {/* Left blob */}
          <div
            className="absolute left-[20%] top-[40%] -translate-y-1/2 h-96 w-96 rounded-full mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(189, 255, 37, 0.4) 0%, 
                rgba(50, 255, 37, 0.3) 30%, 
                transparent 80%
              )`,
              filter: "blur(80px) brightness(1.5)",
              transform: "translateZ(0)",
              boxShadow: "0 0 100px 20px rgba(189, 255, 37, 0.15)",
            }}
          />

          {/* Center blob */}
          <div
            className="absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(189, 255, 37, 0.5) 0%, 
                rgba(50, 255, 37, 0.4) 40%, 
                transparent 85%
              )`,
              filter: "blur(100px) brightness(1.7)",
              transform: "translateZ(0)",
              boxShadow: "0 0 120px 40px rgba(189, 255, 37, 0.2)",
            }}
          />

          {/* Right blob */}
          <div
            className="absolute right-[20%] top-[40%] -translate-y-1/2 h-96 w-96 rounded-full mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(189, 255, 37, 0.4) 0%, 
                rgba(50, 255, 37, 0.3) 30%, 
                transparent 80%
              )`,
              filter: "blur(80px) brightness(1.5)",
              transform: "translateZ(0)",
              boxShadow: "0 0 100px 20px rgba(189, 255, 37, 0.15)",
            }}
          />
        </motion.div>

        <div className="relative z-10">
          {/* Wrapper for image with higher z-index */}
          <Image
            src="https://fundingpips.com/_next/image?url=%2Fimgs%2Fcapital%2F2.png&w=750&q=75"
            width={SIZE}
            height={SIZE}
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Sandwich;

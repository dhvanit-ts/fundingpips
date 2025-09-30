"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import HomeCard from "@/components/HomeCard";
import Header from "@/components/Header";
import MiddleContent from "@/components/home/MiddleContent";
import StickyBanner from "@/components/home/StickyBanner";
import "swiper/css";
import UpperMiddleContent from "@/components/home/UpperMiddleContent";
import Sandwich from "@/components/home/Sandwich";
import BottomContent from "@/components/home/BottomContent";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 → 1) to scale (1 → 1.2)
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.3]);

  // Apply a spring for smooth, slow animation
  const smoothScale = useSpring(rawScale, {
    stiffness: 50, // lower = slower
    damping: 50, // more damping = less bouncy
  });

  return (
    <div ref={containerRef} className="font-segoe-ui text-foreground">
      <StickyBanner>
        Haven&apos;t purchased yet? Use code HELLO & Get 20% OFF now on your
        first purchase!
      </StickyBanner>

      {/* Hero section */}
      <div className="relative min-h-screen w-full">
        {/* Video Background */}
        <div className="absolute max-w-screen overflow-hidden top-0 left-0 w-full h-full">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ scale: smoothScale }}
            className="h-[435px] md:h-[870px] w-full object-cover filter blur-[2px] brightness-[1.1] contrast-[1.3] saturate-[1.4]"
          >
            <source src="hero/output.webm" type="video/webm" />
          </motion.video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0px,transparent_200px,#000042_400px,#000042_100%)] md:bg-[linear-gradient(180deg,transparent_0px,transparent_500px,#000042_800px,#000042_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative w-full flex flex-col justify-center items-center pb-8">
          <Header />
          <div className="space-y-8 mt-52 flex flex-col justify-center items-center">
            <h3 className="text-[7rem] leading-28 font-semibold flex flex-col justify-center items-center">
              <span className="text-nowrap">Built by traders</span>
              <span>➔ for traders.</span>
            </h3>
            <p className="text-center max-w-2xl px-4">
              Join over 1,000,000 traders in the world&apos;s leading firm.
              Trade in a fully simulated environment and earn up to 100%
              rewards.
            </p>
            <div className="flex space-x-3">
              <Button>Buy challenge</Button>
              <Button variant="outline">Join Competition</Button>
            </div>
          </div>
          <div className="mb-10 mt-20">
            <h3 className="text-2xl text-center my-4 font-semibold">
              Why FundingPips?
            </h3>
            <div className="flex space-x-4 w-full max-w-7xl">
              <HomeCard />
              <HomeCard />
              <HomeCard />
              <HomeCard />
            </div>
          </div>
        </div>
        <div className="w-full relative flex flex-col justify-center items-center">
          <UpperMiddleContent />
        </div>
        <div className="w-full relative flex flex-col justify-center items-center bg-gradient-to-b from-[#000143] to-[#2336b2]">
          <MiddleContent />
          <Sandwich />
          <BottomContent />
        </div>
      </div>
    </div>
  );
}
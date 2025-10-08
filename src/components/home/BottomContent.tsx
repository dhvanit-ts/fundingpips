import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { Marquee } from "../ui/marquee";
import Footer from "../footer/Footer";

function BottomContent() {
  return (
    <>
      <div className="mt-40 sm:mt-80 w-full max-w-7xl">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h2 className="text-5xl sm:text-8xl max-w-2xl font-extrabold">
            <span className="text-zinc-100">Made in Dubai.</span>{" "}
            <span className="text-zinc-400">
              Testimonials from all around the world.
            </span>
          </h2>
          <div className="mt-auto flex justify-center gap-3 z-20 relative">
            <button className="p-3 text-lg cursor-pointer border border-gray-500 text-zinc-300 rounded-full hover:bg-zinc-300 hover:text-blue-800">
              <FaAngleLeft />
            </button>
            <button className="p-3 text-lg cursor-pointer border border-gray-500 text-zinc-300 rounded-full hover:bg-zinc-300 hover:text-blue-800">
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="mt-20 relative">
          <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
            <div className="w-24 bg-gradient-to-r from-[#0e1c7f] to-transparent" />
            <div className="w-24 bg-gradient-to-l from-[#0e1c7f] to-transparent" />
          </div>
          <Marquee pauseOnHover className="[--duration:40s]">
            {Array.from({ length: 11 }).map((_, idx) => (
              <Image
                key={idx}
                width={412}
                height={412}
                alt="Testimonial"
                className="rounded-3xl"
                src={`/testimonials/${idx + 1}.webp`}
              />
            ))}
          </Marquee>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BottomContent;

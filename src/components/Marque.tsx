"use client";

import "swiper/css";
import Image from "next/image";
import { Marquee } from "./ui/marquee";

const data = [
  {
    link: "https://fundingpips.com/_next/image?url=%2Fimgs%2Ficon-carousels%2F5.png&w=64&q=75",
  },
  {
    link: "https://fundingpips.com/_next/image?url=%2Fimgs%2Ficon-carousels%2F0.png&w=96&q=75",
  },
  {
    link: "https://fundingpips.com/_next/image?url=%2Fimgs%2Ficon-carousels%2F1.png&w=64&q=75",
  },
  {
    link: "https://fundingpips.com/_next/image?url=%2Fimgs%2Ficon-carousels%2F4.png&w=96&q=75",
  },
];

// Double the data array to make the loop smoother
const duplicatedData = [...data, ...data, ...data];

export default function Marque() {
  return (
    <div className="text-zinc-100 pb-24 sm:pb-32 pt-32 sm:pt-48 space-y-8 max-w-7xl overflow-hidden">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
          <div className="w-60 bg-gradient-to-l from-transparent to-background" />
          <div className="w-60 bg-gradient-to-r from-transparent to-background" />
        </div>

        <Marquee pauseOnHover className="[--duration:20s]">
          {duplicatedData.map((item, idx) => (
            <ImageWrapper key={idx} idx={idx} link={item.link} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {duplicatedData.map((item, idx) => (
            <ImageWrapper key={idx} idx={idx} link={item.link} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const ImageWrapper = ({ idx, link }: { idx: number; link: string }) => {
  return (
    <Image
      src={link}
      alt="brand logo"
      width={104}
      height={104}
      className="p-6 m-1 bg-blue-950 
             shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] 
             rounded-xl 
             hover:bg-zinc-700 
             transition-colors"
      loading="eager"
      priority={idx < 4}
      onError={() => {
        console.error(`Error loading image: ${link}`);
      }}
    />
  );
};

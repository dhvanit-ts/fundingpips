import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { ReactNode } from "react";
import { BsStars } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";

const cards = [
  {
    image: <IoCalendarSharp size={32} />,
    title: "Delivery",
    description: "Fast, transparent with integrity",
  },
  {
    image: <BsStars size={32} />,
    title: "Excellence",
    description: "Not average, we are the best",
  },
  {
    image: <IoIosPeople size={32} />,
    title: "Commitment",
    description: "Providing, enhancing and scaling",
  },
];

function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-5xl mt-40 space-x-12">
        <h1 className="text-7xl font-semibold text-center">
          Fueling Global Traders with Innovation and Success
        </h1>
        <p className="text-center mt-8 max-w-3xl mx-auto text-zinc-300">
          The team behind FundingPips consists of experienced traders and
          industry professionals who fully comprehend the complexities of the
          trading world and are committed to enhancing the trading experience by
          offering top-notch products, trader-friendly rules, and skill
          development, with the ultimate goal of cultivating consistent and
          profitable traders.
        </p>
        <div className="relative w-full mt-20 flex justify-end">
          <Image
            src="/about/hero.webp"
            className=""
            alt="hero"
            width={850}
            height={850}
          />
          <div className="absolute left-0 bottom-0 rounded-2xl px-8 py-6 backdrop-blur-sm bg-[#17175e]/60">
            <h3 className="text-lg font-semibold mb-12">Our Mission</h3>
            <p className="max-w-72">
              Enabling widespread access to trading while upholding
              transparency, integrity, and consistency.
            </p>
          </div>
        </div>
        <div className="py-44">
          <h3 className="text-blue-800 text-4xl font-semibold">Our Vision</h3>
          <p className="text-4xl font-semibold mt-6">
            To become the world’s most trusted firm by providing unparalleled
            support, education, and growth opportunities to traders of all
            levels.
          </p>
        </div>
      </div>
      <div className="max-w-7xl w-full mt-8">
        <h3 className="text-6xl mb-16">Our core values</h3>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((i) => (
            <Card key={i.title} {...i} />
          ))}
        </div>
        <div className="w-full mt-52 px-8">
          <h3 className="text-7xl mb-6 max-w-xl">
            Team where Creative Minds Innovate
          </h3>
          <div className="flex justify-center items-center h-96 rounded-md border-2 border-dashed border-blue-900 bg-blue-950">
            <p>Team members here</p>
          </div>
        </div>
        <div className="mb-8 mt-24 space-y-12">
          <Separator />
          <div className="flex flex-col justify-center items-center space-y-8 h-96">
            <h1 className="text-5xl font-semibold">Join us on our journey</h1>
            <p className="text-lg max-w-3xl text-center">
              From humble beginnings to a leading global firm, FundingPips has
              grown by empowering over 1,000,000 traders worldwide. We&apos;ve
              continually evolved, offering innovative tools educational
              resources, and unmatched opportunities to help traders succeed in
              the ever-changing financial markets.
            </p>
            <Button className="rounded-full text-lg px-12 py-3 font-semibold">Get started</Button>
          </div>
          <Separator />
        </div>
      </div>
    </>
  );
}

const Card = ({
  image,
  title,
  description,
}: {
  image: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex-1 w-full px-6 py-10 bg-blue-900 group rounded-xl">
      <div className="h-20 mb-16 ml-3 flex items-center">{image}</div>
      <h2 className="font-semibold leading-6 text-4xl">{title}</h2>
      <h3 className="text-zinc-200 leading-6 my-4">{description}</h3>
    </div>
  );
};

export default page;

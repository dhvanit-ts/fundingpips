import React from "react";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Link from "next/link";
import Image from "next/image";
import Marque from "../Marque";

function UpperMiddleContent() {
  return (
    <>
      <div className="my-8 sm:my-14 md:my-20 w-full px-4">
        <div className="mt-4 mb-10">
          <h3 className="text-3xl sm:text-5xl text-center font-semibold">
            Buckle Up, Your Journey Starts Here!
          </h3>
          <p className="mx-auto max-w-xl w-full text-sm sm:text-base text-center text-zinc-400 pt-4">
            We evaluate according to objectives that best fit your style. From
            beginners to experts, traders from 195+ countries trust our
            platform.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Pricing />
        </div>
        <div className="w-full flex justify-center items-center pt-10">
          <p className="text-zinc-400 text-sm">
            Please check{" "}
            <Link
              className="underline underline-offset-4 hover:text-zinc-100"
              href="/terms"
            >
              Terms of Use
            </Link>{" "}
            for detailed info
          </p>
        </div>
      </div>
      <div className="mx-4 overflow-hidden">
        <div className="flex justify-center items-center relative mt-40 sm:mt-32 w-full max-w-7xl rounded-2xl mx-auto bg-blue-800">
          <div className="-mt-40 sm:-mt-52 pb-80 sm:pb-24">
            <Image
              src="/hero/earth.webp"
              className="h-[450px] md:h-[700px] w-full object-cover"
              width={500}
              height={500}
              alt="earth"
            />
          </div>
          <div className="absolute top-40 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-7xl font-semibold text-white mb-1 text-shadow-zinc-700">
              $120+ Million
            </h1>
            <p className="text-zinc-200 sm:text-lg sm:font-semibold">
              Earned by Traders Globally at FundingPips
            </p>
            <p className="text-zinc-400 mt-10">
              Quick and reliable. Zero reward denials.
            </p>
            <Testimonials />
          </div>
        </div>
      </div>
      <Marque />
    </>
  );
}

export default UpperMiddleContent;

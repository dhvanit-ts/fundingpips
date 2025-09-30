import Socials from "@/components/footer/Socials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function ContactUs() {
  return (
    <div className="max-w-7xl">
      <div className="flex mt-32 space-x-12">
        <div>
          <h1 className="text-8xl max-w-xl font-semibold">
            How can we help you?
          </h1>
          <p className="text-[#0026ff] text-lg mt-12">Our location</p>
          <p className="flex flex-col text-2xl leading-relaxed mt-6">
            <span>Registered Address:</span>
            <span>Bonovo Road, Fomboni Island of Mohéli, Comoros</span>
          </p>
          <p className="flex flex-col text-2xl leading-relaxed mt-6">
            <span>Physical Address:</span>
            <span>Bay View Tower, Business Bay, Dubai, UAE</span>
          </p>
          <p className="text-[#0026ff] text-lg mt-12">Stay in touch</p>
          <div className="space-y-6 my-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Email or team</h3>
                <p className="text-zinc-300">We are here to help!</p>
              </div>
              <Button className="w-52">support@fundingpips.com</Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Join our Discord</h3>
                <p className="text-zinc-300">Join community of traders</p>
              </div>
              <Button className="w-52">Open Discord</Button>
            </div>
          </div>
          <p className="text-[#0026ff] text-lg mt-12">Follow us</p>
          <div className="flex my-6">
            <Socials className="space-x-8 text-zinc-300" />
          </div>
        </div>
        <div>
          <Image
            src="/contact/map.webp"
            className="rounded-2xl"
            alt="Map"
            height={512}
            width={512}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

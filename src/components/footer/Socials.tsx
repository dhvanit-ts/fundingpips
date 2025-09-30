import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  {
    icon: <FaDiscord />,
    link: "#",
  },
  {
    icon: <FaInstagram />,
    link: "#",
  },
  {
    icon: <FaLinkedin />,
    link: "#",
  },
  {
    icon: <FaYoutube />,
    link: "#",
  },
  {
    icon: <FaFacebook />,
    link: "#",
  },
  {
    icon: <FaXTwitter />,
    link: "#",
  },
];

function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-4", className)}>
      {socials.map(({ link, icon }, idx) => (
        <Link className="text-xl" key={idx} href={link}>
          {icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import Image from "next/image";

interface Data {
  priceAmount: string;
  country: string;
  flag: string;
}

const data: Data[] = [
  {
    priceAmount: "46,646",
    country: "India",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg",
  },
  {
    priceAmount: "45,312",
    country: "Kazakhstan",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kz.svg",
  },
  {
    priceAmount: "43,335",
    country: "United States",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg",
  },
  {
    priceAmount: "41,678",
    country: "Netherlands",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/nl.svg",
  },
  {
    priceAmount: "41,106",
    country: "Lithuania",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lt.svg",
  },
  {
    priceAmount: "40,286",
    country: "Nigeria",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ng.svg",
  },
  {
    priceAmount: "40,000",
    country: "Canada",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ca.svg",
  },
  {
    priceAmount: "38,103",
    country: "Argentina",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ar.svg",
  },
  {
    priceAmount: "37,494",
    country: "Indonesia",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/id.svg",
  },
  {
    priceAmount: "36,407",
    country: "Italy",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/it.svg",
  },
  {
    priceAmount: "36,400",
    country: "Mali",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ml.svg",
  },
  {
    priceAmount: "140,354",
    country: "Germany",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gm.svg",
  },
  {
    priceAmount: "50,197",
    country: "Thailand",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/th.svg",
  },
];

function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
          <div className="w-24 bg-gradient-to-r from-blue-800 to-transparent" />
          <div className="w-24 bg-gradient-to-l from-blue-800 to-transparent" />
        </div>

        {swiperReady && (
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            pagination={{ clickable: true }}
            a11y={{ enabled: true }}
            freeMode={true}
            loop={true}
            speed={15000}
            autoplay={{
              delay: 0,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Card data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="flex justify-center mt-8 gap-3 z-20 relative">
        <button
          ref={prevRef}
          className="p-2.5 cursor-pointer border border-zinc-300 text-zinc-300 rounded-full hover:bg-zinc-300 hover:text-blue-800"
        >
          <FaAngleLeft />
        </button>
        <button
          ref={nextRef}
          className="p-2.5 cursor-pointer border border-zinc-300 text-zinc-300 rounded-full hover:bg-zinc-300 hover:text-blue-800"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

const Card = ({ data }: { data: Data }) => {
  return (
    <div className="p-6 select-none bg-blue-700/50 border border-zinc-200 rounded-xl shadow-lg">
      <div className="flex space-x-3">
        <Image
          className="rounded-full size-6 object-cover"
          src={data.flag}
          alt={data.country}
          width={24}
          height={24}
        />
        <p className="font-medium">{data.country}</p>
      </div>
      <p className="text-2xl mt-4 font-semibold">${data.priceAmount}</p>
    </div>
  );
};

export default Testimonials;

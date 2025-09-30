import React from "react";

function HomeCard({
  image,
  blueText,
  whiteText,
}: {
  image: React.ReactNode;
  blueText: string;
  whiteText: string;
}) {
  return (
    <div className="flex-1 w-full p-6 bg-background group hover:bg-blue-800 border border-zinc-700 rounded-md">
      <div className="h-20">
        {image}
      </div>
      <h2 className="text-blue-700 group-hover:text-zinc-200 font-semibold leading-6 text-2xl">
        {blueText}
      </h2>
      <h3 className="text-zinc-200 text-2xl font-semibold leading-6 mb-4">
        {whiteText}
      </h3>
    </div>
  );
}

export default HomeCard;

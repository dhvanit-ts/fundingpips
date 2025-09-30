import React from "react";

function StickyBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 h-11 w-full flex justify-center items-center bg-gradient-to-r from-[#6566f2] via-[#a654f7] to-[#457ff6] z-50">
      <span className="text-center cursor-pointer text-sm font-semibold text-white">
        {children}
      </span>
    </div>
  );
}

export default StickyBanner;

import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-[#000143] to-[#2336b2]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default layout;

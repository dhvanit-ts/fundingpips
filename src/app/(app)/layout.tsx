import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default layout;

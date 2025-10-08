"use client";

import FullChart from "@/components/markets/FullChart";
import MiniCharts from "@/components/markets/MiniCharts";
import SymbolInfo from "@/components/markets/SymbolInfo";
import TradingTickerTape from "@/components/markets/TradingTickerTape";
import React from "react";

function page() {
  return (
    <div className="w-7xl mx-auto space-y-4">
      <TradingTickerTape />
      <div className="h-72">
      <SymbolInfo />
      </div>
      <div className="h-72">
        <MiniCharts />
      </div>
      <div className="h-screen py-12">
        <FullChart />
      </div>
    </div>
  );
}

export default page;

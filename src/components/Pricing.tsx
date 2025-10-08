"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

type PlanData = {
  profitTarget: string;
  maxLoss: string;
  maxDailyLoss: string;
  minDays: string;
  leverage: string;
  accountSize: string;
  price: string;
};
type StepPlans = {
  student?: PlanData;
  practitioner?: PlanData;
  master: PlanData;
};
type HeroCard = { title: string; description: string };
type HeroData = { cards: HeroCard[]; rewards: string[] };

export default function FundingTabs() {
  const [step, setStep] = React.useState("0");
  const [product, setProduct] = React.useState("fundingpipe");
  const [price, setPrice] = React.useState("5");

  const heroData: Record<string, HeroData> = {
    "0-fundingpipe": {
      cards: [{ title: "Master Stage", description: "Student" }],
      rewards: ["Bi-weekly 95%"],
    },
    "1-fundingpipe": {
      cards: [
        { title: "Evaluation Stage", description: "Student" },
        { title: "Master Stage", description: "Master" },
      ],
      rewards: [
        "Tuesday 60%",
        "Bi-weekly 80%",
        "On Demand 90%",
        "Monthly 100%",
      ],
    },
    "2-fundingpipe": {
      cards: [
        { title: "Evaluation Stage", description: "student & practitioner" },
        { title: "Master Stage", description: "Master" },
      ],
      rewards: [
        "Tuesday 60%",
        "Bi-weekly 80%",
        "On Demand 90%",
        "Monthly 100%",
      ],
    },
    "2-pro": {
      cards: [
        { title: "Evaluation Stage", description: "student & practitioner" },
        { title: "Master Stage", description: "Master" },
      ],
      rewards: ["Weekly 80%", "Daily 80% (Beta)"],
    },
  };

  const priceData: Record<string, StepPlans> = {
    "5": {
      student: {
        profitTarget: "$8,000 (8%)",
        maxLoss: "10%",
        maxDailyLoss: "5%",
        minDays: "3 days",
        leverage: "1:100",
        accountSize: "100k",
        price: "$529",
      },
      practitioner: {
        profitTarget: "$5,000 (5%)",
        maxLoss: "10%",
        maxDailyLoss: "5%",
        minDays: "3 days",
        leverage: "1:100",
        accountSize: "100k",
        price: "$529",
      },
      master: {
        profitTarget: "–",
        maxLoss: "10%",
        maxDailyLoss: "5%",
        minDays: "–",
        leverage: "1:100",
        accountSize: "100k",
        price: "$529",
      },
    },
    "10": {
      student: {
        profitTarget: "$10,000 (10%)",
        maxLoss: "12%",
        maxDailyLoss: "6%",
        minDays: "5 days",
        leverage: "1:100",
        accountSize: "100k",
        price: "$699",
      },
      practitioner: {
        profitTarget: "$7,500 (7.5%)",
        maxLoss: "12%",
        maxDailyLoss: "6%",
        minDays: "5 days",
        leverage: "1:100",
        accountSize: "100k",
        price: "$699",
      },
      master: {
        profitTarget: "–",
        maxLoss: "12%",
        maxDailyLoss: "6%",
        minDays: "–",
        leverage: "1:100",
        accountSize: "100k",
        price: "$699",
      },
    },
  };

  const currentPlans = priceData[price];
  const key = `${step}-${
    step !== "2" && product === "pro" ? "fundingpipe" : product
  }`;
  const data = heroData[key] || {
    cards: [{ title: "Default Plan", description: "Details coming soon..." }],
    rewards: ["Standard payouts", "Basic support"],
  };

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0.8, 1]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4">
        {/* Step Selector */}
        <Tabs value={step} onValueChange={setStep}>
          <TabsList className="flex flex-wrap justify-center">
            <TabsTrigger value="0">0 Step</TabsTrigger>
            <TabsTrigger value="1">1 Step</TabsTrigger>
            <TabsTrigger value="2">2 Step</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Product Selector - Only for 2 step */}
        {step === "2" && (
          <Tabs value={product} onValueChange={setProduct}>
            <TabsList className="flex flex-wrap justify-center">
              <TabsTrigger value="fundingpipe">FundingPipe</TabsTrigger>
              <TabsTrigger value="pro">FundingPipe Pro</TabsTrigger>
            </TabsList>
          </Tabs>
        )}

        {/* Price Selector */}
        <Tabs value={price} onValueChange={setPrice}>
          <TabsList className="flex flex-wrap justify-center">
            {Object.keys(priceData).map((p) => (
              <TabsTrigger key={p} value={p}>
                ${p}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div ref={containerRef} className="w-full rounded-2xl overflow-hidden">
        <div className="flex flex-col relative w-full gap-6 z-40 rounded-2xl mt-12 sm:mt-24 pb-6 px-4 sm:px-6">
          {/* Background layer */}
          <motion.div
            className="absolute -z-10 inset-0 rounded-2xl bg-[#191755]"
            style={{ opacity: bgOpacity }}
          />

          {/* Hero Section */}
          <div className="space-y-6 mx-auto z-10 -mt-12 sm:-mt-24 w-full max-w-3xl flex flex-col justify-center items-center bg-gradient-to-b from-blue-800 to-violet-600 px-4 sm:px-8 py-6 rounded-xl">
            {/* Section 1: Dynamic Cards */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-full gap-4 sm:gap-6">
              {data.cards.map((c, i) => (
                <div
                  key={i}
                  className="bg-transparent text-zinc-100 flex justify-center items-center flex-col text-center"
                >
                  <h4 className="text-lg sm:text-xl font-semibold">
                    {c.title}
                  </h4>
                  <span className="text-xs sm:text-sm text-zinc-400">
                    ({c.description})
                  </span>
                </div>
              ))}
            </div>

            {/* Section 2: Rewards */}
            <div className="space-y-2 flex flex-col justify-center items-center text-center">
              <span className="text-zinc-300 text-sm sm:text-base">
                Rewards cycles
              </span>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {data.rewards.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-zinc-900/40"
                  >
                    <div className="bg-zinc-800 text-zinc-300 p-1 rounded-full">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="overflow-x-auto w-full px-2">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-3 font-medium"></th>
                  {(step === "1" || step === "2") && (
                    <th className="p-3 text-center font-semibold text-base sm:text-lg">
                      Student
                    </th>
                  )}
                  {step === "2" && (
                    <th className="p-3 text-center font-semibold text-base sm:text-lg">
                      Practitioner
                    </th>
                  )}
                  <th className="p-3 text-center font-semibold text-base sm:text-lg">
                    Master
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Profit Target", key: "profitTarget" },
                  { label: "Maximum Loss", key: "maxLoss" },
                  { label: "Maximum Daily Loss", key: "maxDailyLoss" },
                  { label: "Minimum Trading Days", key: "minDays" },
                  { label: "Leverage", key: "leverage" },
                ].map((row) => (
                  <tr key={row.key} className="border-b border-zinc-700">
                    <td className="p-3 font-medium text-zinc-400 whitespace-nowrap">
                      {row.label}
                    </td>
                    {(step === "1" || step === "2") && (
                      <td className="p-3 text-center font-medium">
                        {currentPlans.student?.[row.key as keyof PlanData] ||
                          "–"}
                      </td>
                    )}
                    {step === "2" && (
                      <td className="p-3 text-center font-medium">
                        {currentPlans.practitioner?.[
                          row.key as keyof PlanData
                        ] || "–"}
                      </td>
                    )}
                    <td className="p-3 text-center font-medium">
                      {currentPlans.master?.[row.key as keyof PlanData] || "–"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total stats: Account size + Price */}
            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8 text-sm px-2 sm:px-4 text-center sm:text-left">
              <p className="text-lg sm:text-2xl font-semibold">
                <span className="text-zinc-400 text-sm sm:text-base">
                  Account Size:
                </span>
                <span className="ml-2">
                  {currentPlans.student?.accountSize || "–"}
                </span>
              </p>
              <p className="text-lg sm:text-2xl font-semibold">
                <span className="text-zinc-400 text-sm sm:text-base">
                  Price:
                </span>
                <span className="ml-2">
                  {currentPlans.student?.price || "–"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

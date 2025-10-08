import EconomicCalender from "@/components/tools/EconomicCalender";
import PipCalculator from "@/components/tools/PipCalculator";
import { Separator } from "@/components/ui/separator";
import React from "react";

function PipCalculatorPage() {
  return (
    <div className="max-w-7xl w-full mx-auto space-y-36">
      <div>
        <div className="h-screen my-12 px-4 flex justify-center items-center bg-blue-950 rounded-lg overflow-hidden">
          <EconomicCalender />
        </div>
        <PipCalculator />
      </div>
      <Separator />
    </div>
  );
}

export default PipCalculatorPage;

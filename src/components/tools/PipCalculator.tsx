"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pairs = [
  { value: "xauusd", label: "XAUUSD", type: "commodity" },
  { value: "gbpusd", label: "GBPUSD", type: "forex" },
  { value: "eurusd", label: "EURUSD", type: "forex" },
  { value: "gbpjpy", label: "GBPJPY", type: "forex" },
  { value: "usdjpy", label: "USDJPY", type: "forex" },
  { value: "eurjpy", label: "EURJPY", type: "forex" },
  { value: "btcusd", label: "BTCUSD", type: "crypto" },
  { value: "us30", label: "US30", type: "index" },
];

// Approx pip/point values per lot (for demo; adjust based on broker)
const pipValues = {
  forex: 10, // $10 per pip standard lot
  jpy: 9, // $9 per pip standard lot
  commodity: 100, // Gold per lot approximation
  crypto: 1, // BTC
  index: 1, // US30 points
};

export default function PipCalculator() {
  const [pair, setPair] = useState("gbpusd");
  const [balance, setBalance] = useState("");
  const [risk, setRisk] = useState("");
  const [entry, setEntry] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [result, setResult] = useState<null | {
    lotSize: string;
    pipDiff: string;
    riskAmount: string;
  }>(null);
  const [error, setError] = useState("");

  const handleCalculate = async () => {
    setError("");
    setResult(null);

    const b = parseFloat(balance);
    const r = parseFloat(risk);
    const e = parseFloat(entry);
    const s = parseFloat(stopLoss);

    if ([b, r, e, s].some((v) => isNaN(v) || v <= 0)) {
      setError("All inputs must be positive numbers.");
      return;
    }
    if (e === s) {
      setError("Entry and Stop Loss cannot be the same.");
      return;
    }

    const selectedPair = pairs.find((p) => p.value === pair);
    let pipSize = 0.0001;
    let pipValue = pipValues.forex;

    
    if (selectedPair?.type === "forex" && pair.endsWith("JPY")) {
      pipSize = 0.01;
      pipValue = pipValues.jpy;
    } else if (selectedPair?.type === "commodity") {
      pipSize = 0.1;
      pipValue = pipValues.commodity;
    } else if (selectedPair?.type === "crypto") {
      pipSize = 1;
      pipValue = pipValues.crypto;
    } else if (selectedPair?.type === "index") {
      pipSize = 1;
      pipValue = pipValues.index;   
    }

    const pipDiff = Math.abs(e - s) / pipSize;
    const riskAmount = (b * r) / 100;
    const lotSize = riskAmount / (pipDiff * pipValue);

    setResult({
      pipDiff: pipDiff.toFixed(2),
      riskAmount: riskAmount.toFixed(2),
      lotSize: lotSize.toFixed(2),
    });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-blue-950 text-zinc-100 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Lot Size & PIP Calculator</h2>

      <Select value={pair} onValueChange={setPair}>
        <SelectTrigger className="border-zinc-500 w-full">
          <SelectValue placeholder="Select currency pair" />
        </SelectTrigger>
        <SelectContent className="bg-blue-800/90 text-zinc-100 border-0 backdrop-blur-md">
          {pairs.map((p) => (
            <SelectItem key={p.value} value={p.value}>
              {p.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="number"
        placeholder="Account Balance ($)"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        className="mt-3 border-zinc-500"
      />
      <Input
        type="number"
        placeholder="Risk %"
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
        className="mt-3 border-zinc-500"
      />
      <Input
        type="number"
        placeholder="Entry Price"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="mt-3 border-zinc-500"
      />
      <Input
        type="number"
        placeholder="Stop Loss Price"
        value={stopLoss}
        onChange={(e) => setStopLoss(e.target.value)}
        className="mt-3 border-zinc-500"
      />

      <Button
        variant="secondary"
        className="mt-4 w-full hover:bg-blue-700"
        onClick={handleCalculate}
      >
        Calculate
      </Button>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {result && (
        <div className="mt-4 p-4 bg-blue-900/50 grid grid-cols-2 justify-center items-center rounded-md">
          <span className="text-zinc-400 text-xs uppercase">Pips</span>
          <span className="text-zinc-100 text-lg">{result.pipDiff}</span>
          <span className="text-zinc-400 text-xs uppercase">Risk Amount</span>
          <span className="text-zinc-100 text-lg">${result.riskAmount}</span>
          <span className="text-zinc-400 text-xs uppercase">
            Recommended Lot Size
          </span>
          <span className="text-zinc-100 text-lg">{result.lotSize}</span>
        </div>
      )}
    </div>
  );
}

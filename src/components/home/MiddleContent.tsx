import React from "react";
import { Button } from "../ui/button";

function MiddleContent() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-8xl max-w-7xl text-center font-extrabold">
          Empowering your Success on All Major Trading Platforms
        </h2>
        <p className="mt-10 text-center max-w-7xl">
          FundingPips provides its users with tools, rules and trading platforms
          needed to succeed in evaluations!
        </p>
        <Button className="mt-8">Start Trading Now</Button>
      </div>
    </>
  );
}

export default MiddleContent;

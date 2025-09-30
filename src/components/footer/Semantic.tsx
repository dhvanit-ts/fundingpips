import React from "react";

function H1({ children }: { children: React.ReactNode }) {
  return <h3 className="uppercase font-semibold my-4">{children}</h3>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h4 className="my-3 text-sm uppercase">{children}</h4>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="my-1 text-xs text-zinc-400">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc list-inside text-xs my-2 text-zinc-400">{children}</ul>;
}

export { H1, H2, P, UL };

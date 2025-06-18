"use client";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export function Providers({ children }: any) {
  return (
    //@ts-ignore
    <ReactLenis root options={{ smooth: true }}>
      {children}
    </ReactLenis>
  );
}

"use client";

import { ReactNode } from "react";
import { WorkoutProvider } from "@/context/WorkoutContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return <WorkoutProvider>{children}</WorkoutProvider>;
};

export default Providers;
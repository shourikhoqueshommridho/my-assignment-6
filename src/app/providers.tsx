"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { WorkoutProvider } from "@/context/WorkoutContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WorkoutProvider>
      {children}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </WorkoutProvider>
  );
};

export default Providers;
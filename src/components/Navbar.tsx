"use client";

import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";

const Navbar = () => {
  const { todayPlan, savedWorkouts } = useWorkout();

  return (
    <div className="navbar border-b border-[#1b1d21] bg-[#0b0c0e] px-4 lg:px-8">

      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/image/logo.png"
            alt="FitLog Logo"
            width={30}
            height={30}
          />

          <span className="font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2">

          {/* Workouts */}
          <li>
            <Link
              href="/"
              className="rounded-full bg-[#17200c] px-5 text-[#b7ff00]"
            >
              Workouts
            </Link>
          </li>

          {/* My Plan */}
          <li>
            <Link
              href="/my-plan?tab=today"
              className="text-gray-400 hover:text-white"
            >
              My Plan
            </Link>
          </li>

        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">

        <div className="hidden items-center gap-5 text-sm sm:flex">

          {/* ================= PLAN ================= */}
          <Link
            href="/my-plan?tab=today"
            className="flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            <span>Plan</span>

            <span className="badge border-none bg-[#b7ff00] font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          {/* ================= SAVED ================= */}
          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            <span>Saved</span>

            <span className="badge badge-outline border-gray-700 text-gray-400">
              {savedWorkouts.length}
            </span>
          </Link>

        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className="dropdown dropdown-end md:hidden">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-44 rounded-box bg-[#15171c] p-2 shadow"
          >

            <li>
              <Link href="/">
                Workouts
              </Link>
            </li>

            <li>
              <Link href="/my-plan?tab=today">
                My Plan
              </Link>
            </li>

            <li>
              <Link href="/my-plan?tab=saved">
                Saved
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

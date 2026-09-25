"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaFire,
  FaRegClock,
} from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

import { useWorkout } from "@/context/WorkoutContext";

const MyPlan = () => {
  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeAllFromPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // Which data should be displayed
  const currentWorkouts =
    activeTab === "plan" ? todayPlan : savedWorkouts;

  // Total duration
  const totalMinutes = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) =>
        total + Number(workout.duration || 0),
      0
    );
  }, [currentWorkouts]);

  // Total calories
  const totalCalories = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) =>
        total + Number(workout.caloriesBurned || 0),
      0
    );
  }, [currentWorkouts]);

  // Remove workout
  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">

      {/* ================= HERO ================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b7ff00]">
                FITLOG
              </p>

              <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                MY PLAN
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                Cap of five lifts for today. Finish them, then load more.
              </p>
            </div>

            {/* Remove All */}
            {todayPlan.length > 0 && activeTab === "plan" && (
              <button
                onClick={removeAllFromPlan}
                className="btn btn-outline w-fit border-white/15 bg-transparent text-white hover:border-[#b7ff00] hover:bg-[#b7ff00] hover:text-black"
              >
                <FiTrash2 />
                Remove All
              </button>
            )}

          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Exercises */}
          <div className="rounded-2xl border border-white/10 bg-[#111316] p-5">

            <div className="flex items-center justify-between">

              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Exercises
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b7ff00]/10 text-[#b7ff00]">
                <FaCheck />
              </span>

            </div>

            <p className="mt-4 text-3xl font-black">
              {todayPlan.length}

              <span className="ml-1 text-base font-medium text-gray-500">
                / 5
              </span>
            </p>

          </div>


          {/* Minutes */}
          <div className="rounded-2xl border border-white/10 bg-[#111316] p-5">

            <div className="flex items-center justify-between">

              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Minutes
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b7ff00]/10 text-[#b7ff00]">
                <FaRegClock />
              </span>

            </div>

            <p className="mt-4 text-3xl font-black">
              {totalMinutes}

              <span className="ml-1 text-base font-medium text-gray-500">
                min
              </span>
            </p>

          </div>


          {/* Calories */}
          <div className="rounded-2xl border border-white/10 bg-[#111316] p-5">

            <div className="flex items-center justify-between">

              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Calories
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b7ff00]/10 text-[#b7ff00]">
                <FaFire />
              </span>

            </div>

            <p className="mt-4 text-3xl font-black">
              {totalCalories}

              <span className="ml-1 text-base font-medium text-gray-500">
                kcal
              </span>
            </p>

          </div>

        </div>

      </section>


      {/* ================= TABS ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between border-b border-white/10">

          <div className="flex gap-8">

            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("plan")}
              className={`relative py-4 text-sm font-bold uppercase tracking-wider ${
                activeTab === "plan"
                  ? "text-[#b7ff00]"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan

              {activeTab === "plan" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#b7ff00]" />
              )}
            </button>


            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`relative py-4 text-sm font-bold uppercase tracking-wider ${
                activeTab === "saved"
                  ? "text-[#b7ff00]"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved

              {activeTab === "saved" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#b7ff00]" />
              )}
            </button>

          </div>


          <span className="hidden text-xs font-bold uppercase tracking-widest text-gray-600 sm:block">
            {currentWorkouts.length} items
          </span>

        </div>

      </section>


      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {currentWorkouts.length === 0 ? (

          /* ================= EMPTY STATE ================= */
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111316] px-6 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
              <FaCheck className="text-2xl text-gray-600" />
            </div>


            <h2 className="text-2xl font-black uppercase">
              NOTHING HERE YET
            </h2>


            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              {activeTab === "plan"
                ? "You haven't added any workouts to today's plan. Browse the library and pick your next lift."
                : "You haven't saved any workouts yet. Save your favorite lifts to find them here."}
            </p>


            {/* Go To Workouts */}
            <Link
              href="/"
              className="btn mt-6 border-none bg-[#b7ff00] px-6 font-bold text-black hover:bg-[#c7ff33]"
            >
              Go to workouts
              <FaArrowRight />
            </Link>

          </div>

        ) : (

          /* ================= WORKOUT CARDS ================= */
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {currentWorkouts.map((workout) => (

              <article
                key={workout.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111316] transition duration-300 hover:-translate-y-1 hover:border-[#b7ff00]/40"
              >

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">

                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />


                  {/* Muscle Group */}
                  <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-[#b7ff00] backdrop-blur">
                    {workout.muscleGroups?.join(" / ")}
                  </div>


                  {/* Remove */}
                  <button
                    onClick={() => handleRemove(workout.id)}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-gray-300 backdrop-blur transition hover:bg-red-500 hover:text-white"
                    aria-label={`Remove ${workout.name}`}
                  >
                    <FiTrash2 />
                  </button>

                </div>


                {/* Card Body */}
                <div className="p-5">

                  <h2 className="line-clamp-1 text-xl font-black uppercase">
                    {workout.name}
                  </h2>


                  <p className="mt-1 text-sm text-gray-500">
                    {workout.equipment}
                  </p>


                  {/* Information */}
                  <div className="mt-5 grid grid-cols-3 gap-2 border-y border-white/10 py-4">

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                        Duration
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {workout.duration} min
                      </p>
                    </div>


                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                        Calories
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {workout.caloriesBurned} kcal
                      </p>
                    </div>


                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                        Rating
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#b7ff00]">
                        ★ {workout.rating}
                      </p>
                    </div>

                  </div>


                  {/* Buttons */}
                  <div className="mt-5 flex gap-2">

                    {/* View Details */}
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="btn btn-sm flex-1 border-white/10 bg-white/5 text-white hover:border-[#b7ff00] hover:bg-[#b7ff00] hover:text-black"
                    >
                      View Details
                    </Link>


                    {/* Done */}
                    {activeTab === "plan" && (
                      <button
                        onClick={() => markAsDone(workout.id)}
                        className="btn btn-sm border-none bg-[#b7ff00] text-black hover:bg-[#c7ff33]"
                      >
                        <FaCheck />
                        Done
                      </button>
                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
};

export default MyPlan;

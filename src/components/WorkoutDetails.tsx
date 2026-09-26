"use client";

import Image from "next/image";
import {
  FaCalendarPlus,
  FaClock,
  FaFire,
  FaStar,
} from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";

import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

type WorkoutDetailsProps = {
  workout: Workout;
};

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useWorkout();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
         <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
            <Image
              src={workout.image}
              alt={workout.name}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
         <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[#c6ff00]/30 bg-[#c6ff00]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#c6ff00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-4 leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-[#111] p-4">
                <FaClock className="mb-2 text-[#c6ff00]" />
                <p className="text-xs uppercase text-gray-500">
                  Duration
                </p>
                <p className="mt-1 font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111] p-4">
                <FaFire className="mb-2 text-[#c6ff00]" />
                <p className="text-xs uppercase text-gray-500">
                  Calories
                </p>
                <p className="mt-1 font-bold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111] p-4">
                <p className="mb-2 text-[#c6ff00]">SET</p>
                <p className="text-xs uppercase text-gray-500">
                  Sets
                </p>
                <p className="mt-1 font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111] p-4">
                <p className="mb-2 text-[#c6ff00]">REP</p>
                <p className="text-xs uppercase text-gray-500">
                  Reps
                </p>
                <p className="mt-1 font-bold">
                  {workout.reps}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-2">
              <FaStar className="text-[#c6ff00]" />
              <span className="font-bold">{workout.rating}</span>
              <span className="text-gray-500">/ 5</span>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => addToPlan(workout)}
                disabled={alreadyInPlan}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition ${
                  alreadyInPlan
                    ? "cursor-not-allowed bg-gray-700 text-gray-400"
                    : "bg-[#c6ff00] text-black hover:bg-[#b7ef00]"
                }`}
              >
                <FaCalendarPlus aria-hidden="true" />
                {alreadyInPlan
                  ? "Already in today's plan"
                  : "Add to today's plan"}
              </button>

              <button
                type="button"
                onClick={() => saveWorkout(workout)}
                disabled={alreadySaved}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-5 py-3 font-bold transition ${
                  alreadySaved
                    ? "cursor-not-allowed border-gray-700 text-gray-500"
                    : "border-[#c6ff00] text-[#c6ff00] hover:bg-[#c6ff00] hover:text-black"
                }`}
              >
                <FiBookmark aria-hidden="true" />
                {alreadySaved ? "Saved" : "Save for later"}
              </button>
            </div>
          </div>
        </div>

        {/* Equipment */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#111] p-6">
          <h2 className="text-xl font-black uppercase">
            Equipment
          </h2>
          <p className="mt-2 text-gray-400">
            {workout.equipment}
          </p>
        </div>

        {/* Instructions */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#111] p-6">
          <h2 className="text-xl font-black uppercase">
            Instructions
          </h2>

          <ol className="mt-5 space-y-4">
            {workout.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex gap-4 text-gray-300"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c6ff00] text-sm font-black text-black">
                  {index + 1}
                </span>

                <span className="leading-7">
                  {instruction}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetails;
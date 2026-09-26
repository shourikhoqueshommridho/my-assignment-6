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
  const { addToPlan, saveWorkout, isInPlan, isSaved } = useWorkout();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ================= IMAGE ================= */}
          <div className="relative overflow-hidden rounded-2xl border border-[#242932]">
            <Image
              src={workout.image}
              alt={`${workout.name} workout`}
              width={700}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="h-[320px] w-full object-cover sm:h-[550px] lg:h-[700px]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#c6ff00]">
                Workout Library
              </p>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex flex-col justify-center">
            {/* Muscle Groups */}
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#c6ff00] px-4 py-1.5 text-xs font-bold uppercase text-black"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* ================= KEY SPECS ================= */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#292e37] bg-[#15181e]">
              {/* Equipment */}
              <div className="flex items-center justify-between gap-6 border-b border-[#292e37] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-right text-sm text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between gap-6 border-b border-[#292e37] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-sm text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between gap-6 border-b border-[#292e37] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-sm text-gray-200">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between gap-6 border-b border-[#292e37] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-sm text-gray-200">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between gap-6 border-b border-[#292e37] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Duration
                </span>

                <span className="flex items-center gap-2 text-sm text-gray-200">
                  <FaClock
                    className="text-[#c6ff00]"
                    aria-hidden="true"
                  />
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between gap-6 border-b border-[#292e37] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Calories
                </span>

                <span className="flex items-center gap-2 text-sm text-gray-200">
                  <FaFire
                    className="text-[#c6ff00]"
                    aria-hidden="true"
                  />
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between gap-6 px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Rating
                </span>

                <span className="flex items-center gap-2 text-sm text-gray-200">
                  <FaStar
                    className="text-[#c6ff00]"
                    aria-hidden="true"
                  />
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <section className="mt-9">
              <h2 className="text-lg font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
                {workout.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span
                      className="shrink-0 font-semibold text-[#c6ff00]"
                      aria-hidden="true"
                    >
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="mt-9 flex flex-wrap gap-4">
              {/* Add To Plan */}
              <button
                type="button"
                onClick={() => addToPlan(workout)}
                disabled={alreadyInPlan}
                className={`inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-sm font-bold transition ${
                  alreadyInPlan
                    ? "cursor-not-allowed bg-[#30351f] text-[#c6ff00]"
                    : "bg-[#c6ff00] text-black hover:bg-[#b5ed00]"
                }`}
              >
                <FaCalendarPlus aria-hidden="true" />

                {alreadyInPlan
                  ? "Already in today's plan"
                  : "Add to today's plan"}
              </button>

              {/* Save */}
              <button
                type="button"
                onClick={() => saveWorkout(workout)}
                disabled={alreadySaved}
                className={`inline-flex items-center justify-center gap-3 rounded-xl border px-6 py-3.5 text-sm font-semibold transition ${
                  alreadySaved
                    ? "cursor-not-allowed border-[#c6ff00] text-[#c6ff00]"
                    : "border-[#343b47] text-gray-300 hover:border-[#c6ff00] hover:text-[#c6ff00]"
                }`}
              >
                <FiBookmark aria-hidden="true" />

                {alreadySaved ? "Saved" : "Save for later"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;

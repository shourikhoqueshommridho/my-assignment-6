"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaFire,
  FaRegClock,
} from "react-icons/fa";
import { useWorkout } from "@/context/WorkoutContext";
type SortOption = "duration" | "calories" | "rating";
const MyPlan = () => {
  const searchParams = useSearchParams();

  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
 const [sortBy, setSortBy] = useState<SortOption>("duration");
useEffect(() => {
    const tab = searchParams.get("tab");

    if (tab === "saved") {
      setActiveTab("saved");
    } else {
      setActiveTab("plan");
    }
  }, [searchParams]);

  const currentWorkouts =
    activeTab === "plan" ? todayPlan : savedWorkouts;
  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

 if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }
if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [currentWorkouts, sortBy]);

  const totalMinutes = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) => total + Number(workout.duration || 0),
      0
    );
  }, [currentWorkouts]);
 const totalCalories = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) =>
        total + Number(workout.caloriesBurned || 0),
      0
    );
  }, [currentWorkouts]);

 const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };
return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">
  <section>
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#b7ff00]">
            FITLOG
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>

        </div>
      </section>

    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#252a33] bg-[#111318] sm:grid-cols-3">
          <div className="px-6 py-6 sm:border-r sm:border-[#252a33]">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-4xl font-black">
              <span className="text-[#b7ff00]">
                {currentWorkouts.length}
              </span>

              {activeTab === "plan" && (
                <span className="text-white">
                  /5
                </span>
              )}
            </p>
          </div>
          <div className="px-6 py-6 sm:border-r sm:border-[#252a33]">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-4xl font-black">
              {totalMinutes}
            </p>
          </div>
          <div className="px-6 py-6">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-4xl font-black">
              {totalCalories}
            </p>
          </div>

        </div>

      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-4 border-b border-[#252a33] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-fit rounded-xl border border-[#252a33] bg-[#15181e] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-lg px-5 py-2 text-xs font-bold transition ${
                activeTab === "plan"
                  ? "bg-[#252a33] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
          <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-xs font-bold transition ${
                activeTab === "saved"
                  ? "bg-[#252a33] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <div className="relative">

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="appearance-none rounded-xl border border-[#252a33] bg-[#111318] py-2 pl-4 pr-9 text-xs font-medium text-white outline-none transition focus:border-[#b7ff00]"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              <FaChevronDown
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-500"
              />

            </div>
          </div>

        </div>

      </section>
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {currentWorkouts.length === 0 ? (

          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#252a33] bg-[#111318] px-6 text-center">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
              <FaCheck className="text-xl text-gray-600" />
            </div>

            <h2 className="text-2xl font-black uppercase">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              {activeTab === "plan"
                ? "You haven't added any workouts to today's plan. Browse the library and pick your next lift."
                : "You haven't saved any workouts yet. Save your favorite lifts to find them here."}
            </p>

            <Link
              href="/"
              className="btn mt-6 border-none bg-[#b7ff00] px-6 font-bold text-black hover:bg-[#c7ff33]"
            >
              Go to workouts
              <FaArrowRight />
            </Link>

          </div>

        ) : (
          <div className="space-y-4">

            {sortedWorkouts.map((workout) => (

              <article
                key={workout.id}
                className="group flex flex-col gap-5 rounded-2xl border border-[#252a33] bg-[#111318] p-4 transition duration-300 hover:border-[#b7ff00]/40 sm:flex-row sm:items-center"
              >
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-36">

                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>
                <div className="min-w-0 flex-1">

                  <h2 className="truncate text-lg font-black uppercase text-white">
                    {workout.name}
                  </h2>

                  <p className="mt-0.5 text-sm text-gray-500">
                    {workout.equipment}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <FaRegClock className="text-[#b7ff00]" />
                      <span>
                        {workout.duration} min
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaFire className="text-[#b7ff00]" />
                      <span>
                        {workout.caloriesBurned} kcal
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#b7ff00]">
                        ☆
                      </span>

                      <span>
                        {workout.rating}
                      </span>
                    </div>

                  </div>

                </div>
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="btn btn-sm rounded-full border border-[#39404c] bg-transparent px-4 text-xs font-medium text-white hover:border-[#b7ff00] hover:bg-transparent hover:text-[#b7ff00] sm:px-5"
                  >
                    View Details
                  </Link>
                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => markAsDone(workout.id)}
                      className="btn btn-sm rounded-full border-none bg-[#b7ff00] px-4 text-xs font-bold text-black hover:bg-[#c7ff33] sm:px-5"
                    >
                      <FaCheck />
                      <span className="hidden xs:inline">
                        Mark as Done
                      </span>

                      <span className="xs:hidden">
                        Done
                      </span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemove(workout.id)}
                    aria-label={`Remove ${workout.name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-gray-600 transition hover:bg-white/5 hover:text-white"
                  >
                    ×
                  </button>

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

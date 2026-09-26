"use client";

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar, FaPlus } from "react-icons/fa";

import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const { addToPlan, isInPlan } = useWorkout();

  const alreadyInPlan = isInPlan(workout.id);

  const handleAddToPlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    addToPlan(workout);
  };

  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block h-full"
      aria-label={`View details for ${workout.name}`}
    >
      <div className="card h-full overflow-hidden rounded-xl border border-[#24272d] bg-[#15171c] shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-[#b7ff00]/50">
        <figure className="overflow-hidden">
          <Image
            src={workout.image}
            alt={`${workout.name} workout`}
            width={500}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="card-body flex flex-col p-5">
          <div className="flex min-h-6 flex-wrap gap-2">
            {workout.muscleGroups.map((item) => (
              <span
                key={item}
                className="badge border-none bg-[#b7ff00] text-[10px] font-bold text-black"
              >
                {item}
              </span>
            ))}
          </div>

          <h2 className="card-title mt-1 text-lg font-black uppercase leading-tight text-white transition-colors duration-300 group-hover:text-[#b7ff00]">
            {workout.name}
          </h2>

          <p className="mt-1 min-h-5 text-sm text-gray-500">
            {workout.equipment}
          </p>

          <div className="my-2 h-px w-full bg-[#24272d]" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <FaClock aria-hidden="true" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaFire aria-hidden="true" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaStar aria-hidden="true" />
              <span>{workout.rating}</span>
            </div>
          </div>

         
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
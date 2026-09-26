import WorkoutCard from "./WorkoutCard";
import type { Workout } from "@/types/workout";

const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }

  const result = await res.json();

  console.log("Workout API response:", result);

  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result.data)) {
    return result.data;
  }

  throw new Error("Workout data is not an array");
};

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-4 py-12"
    >
      <div className="mb-7">
        <h2 className="text-3xl font-black uppercase text-white md:text-4xl">
          The Library
        </h2>

        <p className="mt-1 text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;

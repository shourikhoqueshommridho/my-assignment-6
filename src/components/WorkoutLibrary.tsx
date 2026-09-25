import WorkoutCard from "./WorkoutCard";
type Workout = {
  id: number;
  name: string;
  equipment: string;
  image: string;
  muscle: string[];
  duration: string;
  calories: string;
  rating: string;
};
const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("http://localhost:3000/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      {/* Heading */}
      <div className="mb-7">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
          The Library
        </h2>

        <p className="text-gray-500 mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {workouts.map((workout:Workout ) => (
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
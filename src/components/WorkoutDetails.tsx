
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaClock,
  FaDumbbell,
  FaFire,
  FaStar,
  FaLayerGroup,
} from "react-icons/fa";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

type WorkoutDetailsProps = {
  workout: Workout;
};

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#b7ff00] transition mb-8 text-sm font-semibold"
      >
        <FaArrowLeft />
        Back to Workouts
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-[#24272d] bg-[#15171c]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={600}
            className="w-full h-87.5 lg:h-125 object-cover"
          />
        </div>

        {/* Details */}
        <div className="bg-[#15171c] border border-[#24272d] rounded-2xl p-6 lg:p-8">

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mb-4">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge bg-[#b7ff00] text-black border-none font-bold text-xs"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
            {workout.name}
          </h1>

          {/* Difficulty */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-gray-500 text-sm">
              Difficulty:
            </span>

            <span className="text-[#b7ff00] font-bold uppercase text-sm">
              {workout.difficulty}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-7 mt-6">
            {workout.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-7">

            <div className="bg-[#0d0f12] rounded-lg p-4">
              <FaClock className="text-[#b7ff00] mb-2" />
              <p className="text-gray-500 text-xs">Duration</p>
              <p className="text-white font-bold">
                {workout.duration} min
              </p>
            </div>

            <div className="bg-[#0d0f12] rounded-lg p-4">
              <FaFire className="text-[#b7ff00] mb-2" />
              <p className="text-gray-500 text-xs">Calories</p>
              <p className="text-white font-bold">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="bg-[#0d0f12] rounded-lg p-4">
              <FaLayerGroup className="text-[#b7ff00] mb-2" />
              <p className="text-gray-500 text-xs">Sets</p>
              <p className="text-white font-bold">
                {workout.sets}
              </p>
            </div>

            <div className="bg-[#0d0f12] rounded-lg p-4">
              <FaStar className="text-[#b7ff00] mb-2" />
              <p className="text-gray-500 text-xs">Rating</p>
              <p className="text-white font-bold">
                {workout.rating}
              </p>
            </div>

          </div>

          {/* Equipment */}
          <div className="flex items-center gap-3 mt-7">
            <FaDumbbell className="text-[#b7ff00]" />

            <div>
              <p className="text-gray-500 text-xs">
                Equipment
              </p>

              <p className="text-white font-semibold">
                {workout.equipment}
              </p>
            </div>
          </div>

          {/* Reps */}
          <div className="mt-5">
            <p className="text-gray-500 text-xs">
              Recommended Reps
            </p>

            <p className="text-white font-bold text-lg">
              {workout.reps}
            </p>
          </div>

        </div>
      </div>

      {/* Instructions */}
      <div className="mt-10 bg-[#15171c] border border-[#24272d] rounded-2xl p-6 lg:p-8">

        <h2 className="text-2xl font-black text-white uppercase mb-6">
          How To Perform
        </h2>

        <div className="space-y-4">
          {workout.instructions.map((instruction, index) => (
            <div
              key={index}
              className="flex gap-4 items-start"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#b7ff00] text-black flex items-center justify-center font-black text-sm">
                {index + 1}
              </span>

              <p className="text-gray-400 leading-7 pt-1">
                {instruction}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default WorkoutDetails;


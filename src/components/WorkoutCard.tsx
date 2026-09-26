import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";



type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block cursor-pointer group"
    >
      <div className="card bg-[#15171c] border border-[#24272d] shadow-none overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b7ff00]/50">

        {/* Image */}
        <figure className="overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-5">

          {/* Muscle Tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((item) => (
              <span
                key={item}
                className="badge bg-[#b7ff00] text-black border-none font-bold text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="card-title text-white uppercase text-lg font-black group-hover:text-[#b7ff00] transition-colors duration-300">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="text-gray-500 text-sm">
            {workout.equipment}
          </p>

          <div className="divider my-1 border-[#24272d]"></div>

          {/* Bottom Info */}
          <div className="flex items-center gap-4 text-gray-500 text-xs">

            {/* Duration */}
            <div className="flex items-center gap-1">
              <FaClock />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <FaFire />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <FaStar />
              <span>{workout.rating}</span>
            </div>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;


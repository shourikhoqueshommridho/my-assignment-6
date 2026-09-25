import WorkoutDetails from "@/components/WorkoutDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json");

  const workouts = await res.json();

  const workout = workouts.find(
    (item: { id: number }) => item.id === Number(id)
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;
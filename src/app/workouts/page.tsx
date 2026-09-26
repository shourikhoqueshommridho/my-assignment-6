import WorkoutDetails from "@/components/WorkoutDetails";
import { notFound } from "next/navigation";
import type { Workout } from "@/types/workout";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!res.ok) {
    notFound();
  }

  const result = await res.json();

  const workout: Workout = result.data;

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;

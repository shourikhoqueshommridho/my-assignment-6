"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Workout = {
  id: number;
  name: string;
  equipment: string;
  image: string;
  muscleGroups: string[];
  duration: number;
  caloriesBurned: number;
  rating: number;
};

type WorkoutContextType = {
  todayPlan: Workout[];
  savedWorkouts: Workout[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeAllFromPlan: () => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  // Load data from localStorage
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setTodayPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSavedWorkouts(JSON.parse(storedSaved));
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(todayPlan));
  }, [todayPlan]);

  // Save saved workouts
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(savedWorkouts));
  }, [savedWorkouts]);

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    setTodayPlan((previous) => {
      // Already exists
      const alreadyExists = previous.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return previous;
      }

      // Maximum 5 workouts
      if (previous.length >= 5) {
        alert("You can add maximum 5 workouts to today's plan.");
        return previous;
      }

      return [...previous, workout];
    });
  };

  // Remove one workout from today's plan
  const removeFromPlan = (id: number) => {
    setTodayPlan((previous) =>
      previous.filter((workout) => workout.id !== id)
    );
  };

  // Remove all workouts
  const removeAllFromPlan = () => {
    setTodayPlan([]);
  };

  // Save workout
  const saveWorkout = (workout: Workout) => {
    setSavedWorkouts((previous) => {
      const alreadySaved = previous.some(
        (item) => item.id === workout.id
      );

      if (alreadySaved) {
        return previous;
      }

      return [...previous, workout];
    });
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    setSavedWorkouts((previous) =>
      previous.filter((workout) => workout.id !== id)
    );
  };

  // Mark workout as done
  const markAsDone = (id: number) => {
    setTodayPlan((previous) =>
      previous.filter((workout) => workout.id !== id)
    );
  };

  // Check workout in plan
  const isInPlan = (id: number) => {
    return todayPlan.some((workout) => workout.id === id);
  };

  // Check workout saved
  const isSaved = (id: number) => {
    return savedWorkouts.some((workout) => workout.id === id);
  };

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        removeFromPlan,
        removeAllFromPlan,
        saveWorkout,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

// Custom hook
export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
};
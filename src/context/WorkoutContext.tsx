"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { toast } from "react-toastify";

import type { Workout } from "@/types/workout";

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

export const WorkoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

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

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(todayPlan));
  }, [todayPlan]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts]);

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    const alreadyExists = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      return;
    }

    if (todayPlan.length >= 5) {
      toast.error(
        "You can add maximum 5 workouts to today's plan."
      );
      return;
    }

    setTodayPlan((previous) => [...previous, workout]);

    toast.success("Workout added to today's plan!");
  };

  // Remove workout from today's plan
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
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      return;
    }

    setSavedWorkouts((previous) => [...previous, workout]);

    toast.success("Workout saved for later!");
  };

  // Remove saved workout
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

  // Check if workout is in plan
  const isInPlan = (id: number) => {
    return todayPlan.some((workout) => workout.id === id);
  };

  // Check if workout is saved
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

export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
};
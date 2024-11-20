import { Workout } from "../types";
import { WorkoutDetails } from "./workout-details";
import { 
  beginnerWorkouts15, intermediateWorkouts15, expertWorkouts15 
} from "../data/15-minute-workouts";
import { 
  beginnerWorkouts, intermediateWorkouts, expertWorkouts 
} from "../data/20-minute-workouts";
import {
  beginnerWorkouts30, intermediateWorkouts30, expertWorkouts30
} from "../data/30-minute-workouts";
import {
  beginnerWorkouts45, intermediateWorkouts45, expertWorkouts45
} from "../data/45-minute-workouts";
import {
  beginnerWorkouts60, intermediateWorkouts60, expertWorkouts60
} from "../data/60-minute-workouts";

// Combine all workouts into a single array
const allWorkouts = [
  ...beginnerWorkouts15, ...intermediateWorkouts15, ...expertWorkouts15,
  ...beginnerWorkouts, ...intermediateWorkouts, ...expertWorkouts,
  ...beginnerWorkouts30, ...intermediateWorkouts30, ...expertWorkouts30,
  ...beginnerWorkouts45, ...intermediateWorkouts45, ...expertWorkouts45,
  ...beginnerWorkouts60, ...intermediateWorkouts60, ...expertWorkouts60
];

// Generate static params for all workout IDs
export function generateStaticParams() {
  return allWorkouts.map((workout) => ({
    id: workout.id.toString(),
  }));
}

export default function WorkoutPage({ params }: { params: { id: string } }) {
  const workoutId = Number(params.id);
  const workout = allWorkouts.find(w => w.id === workoutId);

  if (!workout) {
    return (
      <div className="min-h-screen bg-muted pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Workout not found</h1>
        </div>
      </div>
    );
  }

  return <WorkoutDetails workout={workout} />;
}
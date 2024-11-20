export interface Exercise {
  name: string;
  duration: string;
  description: string[];
}

export interface Workout {
  id: number;
  title: string;
  duration: string;
  intensity: string;
  calories: string;
  description: string;
  exercises: Exercise[];
  restInfo: string;
}
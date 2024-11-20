"use client";

import { Card } from "@/components/ui/card";
import { Clock, Dumbbell, Flame } from "lucide-react";
import type { Workout } from "../types";

export function WorkoutDetails({ workout }: { workout: Workout }) {
  return (
    <div className="min-h-screen bg-muted pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{workout.title}</h1>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{workout.duration}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center">
                <Dumbbell className="h-5 w-5 mr-2 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Intensity</p>
                  <p className="font-medium">{workout.intensity}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center">
                <Flame className="h-5 w-5 mr-2 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="font-medium">{workout.calories} cal</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground">{workout.description}</p>
            </div>
          </Card>

          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Exercises</h2>
              <div className="space-y-8">
                {workout.exercises.map((exercise, index) => (
                  <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">{exercise.name}</h3>
                      <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {exercise.duration}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exercise.description.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Rest Periods</h2>
              <p className="text-muted-foreground">{workout.restInfo}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
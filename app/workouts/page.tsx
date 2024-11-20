"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutCard } from "./components/workout-card";
import {
  beginnerWorkouts,
  intermediateWorkouts,
  expertWorkouts,
} from "./data/20-minute-workouts";
import {
  beginnerWorkouts15,
  intermediateWorkouts15,
  expertWorkouts15,
} from "./data/15-minute-workouts";
import {
  beginnerWorkouts30,
  intermediateWorkouts30,
  expertWorkouts30,
} from "./data/30-minute-workouts";
import {
  beginnerWorkouts45,
  intermediateWorkouts45,
  expertWorkouts45,
} from "./data/45-minute-workouts";
import {
  beginnerWorkouts60,
  intermediateWorkouts60,
  expertWorkouts60,
} from "./data/60-minute-workouts";

export default function Workouts() {
  const [duration, setDuration] = useState<"15" | "20" | "30" | "45" | "60">("20");
  
  const getWorkouts = (intensity: string) => {
    switch (duration) {
      case "15":
        switch (intensity) {
          case "beginner": return beginnerWorkouts15;
          case "intermediate": return intermediateWorkouts15;
          case "expert": return expertWorkouts15;
          default: return [];
        }
      case "20":
        switch (intensity) {
          case "beginner": return beginnerWorkouts;
          case "intermediate": return intermediateWorkouts;
          case "expert": return expertWorkouts;
          default: return [];
        }
      case "30":
        switch (intensity) {
          case "beginner": return beginnerWorkouts30;
          case "intermediate": return intermediateWorkouts30;
          case "expert": return expertWorkouts30;
          default: return [];
        }
      case "45":
        switch (intensity) {
          case "beginner": return beginnerWorkouts45;
          case "intermediate": return intermediateWorkouts45;
          case "expert": return expertWorkouts45;
          default: return [];
        }
      case "60":
        switch (intensity) {
          case "beginner": return beginnerWorkouts60;
          case "intermediate": return intermediateWorkouts60;
          case "expert": return expertWorkouts60;
          default: return [];
        }
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-muted pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Quick Dumbbell Workouts</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Efficient, effective workouts designed for busy dads. Choose your level and get started.
        </p>

        <div className="flex justify-center mb-8">
          <Tabs 
            value={duration} 
            onValueChange={(v) => setDuration(v as "15" | "20" | "30" | "45" | "60")} 
            className="w-full max-w-2xl"
          >
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="15">15 Min</TabsTrigger>
              <TabsTrigger value="20">20 Min</TabsTrigger>
              <TabsTrigger value="30">30 Min</TabsTrigger>
              <TabsTrigger value="45">45 Min</TabsTrigger>
              <TabsTrigger value="60">60 Min</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Tabs defaultValue="beginner" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="expert">Expert</TabsTrigger>
          </TabsList>

          <TabsContent value="beginner" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {getWorkouts("beginner").map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {getWorkouts("intermediate").map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="expert" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {getWorkouts("expert").map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
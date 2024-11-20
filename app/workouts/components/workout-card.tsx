import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Dumbbell, Flame, ArrowRight } from "lucide-react";
import type { Workout } from "../types";

export function WorkoutCard({ workout }: { workout: Workout }) {
  const router = useRouter();

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">{workout.title}</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{workout.duration}</span>
          </div>
          <div className="flex items-center">
            <Dumbbell className="h-4 w-4 mr-2" />
            <span className="text-sm">{workout.intensity}</span>
          </div>
          <div className="flex items-center">
            <Flame className="h-4 w-4 mr-2" />
            <span className="text-sm">{workout.calories} cal</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{workout.description}</p>
        <Button 
          className="w-full"
          onClick={() => router.push(`/workouts/${workout.id}`)}
        >
          View Workout <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
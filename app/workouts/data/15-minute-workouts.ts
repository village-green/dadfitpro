import { Workout } from "../types";

// 15-minute Beginner Workouts
export const beginnerWorkouts15: Workout[] = [
  {
    id: 101,
    title: "Total Body Starter",
    duration: "15 min",
    intensity: "Beginner",
    calories: "90",
    description: "Quick, effective full-body workout for beginners",
    exercises: [
      {
        name: "Dumbbell Goblet Squats",
        duration: "3 minutes",
        description: [
          "Hold a dumbbell vertically in front of your chest with both hands",
          "Lower into a squat until thighs are parallel to the floor",
          "Push back to standing while engaging glutes"
        ]
      },
      {
        name: "Dumbbell Rows",
        duration: "2 minutes per arm",
        description: [
          "With one hand and knee on a surface, pull a dumbbell toward your torso",
          "Keep your back straight and lower slowly"
        ]
      },
      {
        name: "Dumbbell Shoulder Press",
        duration: "3 minutes",
        description: [
          "Hold dumbbells at shoulder height and press overhead",
          "Lower to starting position"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (5 minutes total rest)"
  },
  {
    id: 102,
    title: "Cardio Starter",
    duration: "15 min",
    intensity: "Beginner",
    calories: "90",
    description: "Quick cardio workout with dumbbells",
    exercises: [
      {
        name: "Dumbbell High Knees",
        duration: "2 minutes",
        description: [
          "Jog in place, lifting knees high while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Step-Back Lunges",
        duration: "3 minutes",
        description: [
          "Step back into a lunge with a dumbbell in each hand",
          "Alternate legs"
        ]
      },
      {
        name: "Dumbbell Curls",
        duration: "3 minutes",
        description: [
          "Curl dumbbells up to shoulders with elbows stationary"
        ]
      },
      {
        name: "Dumbbell Shadow Boxing",
        duration: "2 minutes",
        description: [
          "Throw punches while holding light dumbbells"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (5 minutes total rest)"
  }
];

// 15-minute Intermediate Workouts
export const intermediateWorkouts15: Workout[] = [
  {
    id: 103,
    title: "Strength Builder",
    duration: "15 min",
    intensity: "Intermediate",
    calories: "120",
    description: "Quick strength-focused workout",
    exercises: [
      {
        name: "Dumbbell Deadlift to Press",
        duration: "3 minutes",
        description: [
          "Perform a deadlift, then press dumbbells overhead"
        ]
      },
      {
        name: "Dumbbell Bent-Over Rows",
        duration: "3 minutes",
        description: [
          "Hinge at the hips and pull dumbbells toward your waist"
        ]
      },
      {
        name: "Dumbbell Bulgarian Split Squats",
        duration: "3 minutes per leg",
        description: [
          "With one foot elevated, perform a lunge holding dumbbells"
        ]
      }
    ],
    restInfo: "Rest for 1 minute and repeat the circuit once (3 minutes total rest)"
  },
  {
    id: 104,
    title: "Power Circuit",
    duration: "15 min",
    intensity: "Intermediate",
    calories: "120",
    description: "Quick power-focused circuit training",
    exercises: [
      {
        name: "Dumbbell Thrusters",
        duration: "3 minutes",
        description: [
          "Squat with dumbbells and press overhead as you stand"
        ]
      },
      {
        name: "Dumbbell Forward Lunges with Twist",
        duration: "3 minutes",
        description: [
          "Step forward into a lunge and twist torso with a dumbbell"
        ]
      },
      {
        name: "Dumbbell Russian Twists",
        duration: "3 minutes",
        description: [
          "Seated, twist torso side-to-side holding a dumbbell"
        ]
      }
    ],
    restInfo: "Rest for 1 minute and repeat the circuit once (3 minutes total rest)"
  }
];

// 15-minute Expert Workouts
export const expertWorkouts15: Workout[] = [
  {
    id: 105,
    title: "High-Intensity Blast",
    duration: "15 min",
    intensity: "Expert",
    calories: "150",
    description: "Intense, quick workout for maximum results",
    exercises: [
      {
        name: "Dumbbell Burpees with Press",
        duration: "3 minutes",
        description: [
          "Perform burpees holding dumbbells, pressing overhead at the top"
        ]
      },
      {
        name: "Alternating Dumbbell Snatches",
        duration: "2 minutes per arm",
        description: [
          "Explosively lift a dumbbell overhead, alternating arms"
        ]
      },
      {
        name: "Dumbbell Push Press",
        duration: "3 minutes",
        description: [
          "Use a slight knee bend to press dumbbells overhead"
        ]
      }
    ],
    restInfo: "Rest for 1 minute and repeat the circuit once (3 minutes total rest)"
  },
  {
    id: 106,
    title: "Functional Strength",
    duration: "15 min",
    intensity: "Expert",
    calories: "150",
    description: "Quick functional strength workout",
    exercises: [
      {
        name: "Dumbbell Deadlift to High Pull",
        duration: "3 minutes",
        description: [
          "Perform a deadlift, then pull dumbbells to your chest"
        ]
      },
      {
        name: "Dumbbell Single-Leg Romanian Deadlifts",
        duration: "2 minutes per leg",
        description: [
          "Hinge forward while lifting one leg, holding a dumbbell"
        ]
      },
      {
        name: "Dumbbell Push-Up Rows",
        duration: "3 minutes",
        description: [
          "Perform a push-up on dumbbells, then row one dumbbell toward your torso"
        ]
      }
    ],
    restInfo: "Rest for 1 minute and repeat the circuit once (3 minutes total rest)"
  }
];
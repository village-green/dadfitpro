import { Workout } from "../types";

// 30-minute Beginner Workouts
export const beginnerWorkouts30: Workout[] = [
  {
    id: 201,
    title: "Total Body Circuit",
    duration: "30 min",
    intensity: "Beginner",
    calories: "180",
    description: "A comprehensive full-body workout for beginners",
    exercises: [
      {
        name: "Dumbbell Goblet Squats",
        duration: "4 minutes",
        description: [
          "Hold a dumbbell in front of your chest and squat deeply"
        ]
      },
      {
        name: "Dumbbell Rows",
        duration: "4 minutes per arm",
        description: [
          "Pull a dumbbell towards your torso with your back straight"
        ]
      },
      {
        name: "Dumbbell Shoulder Press",
        duration: "4 minutes",
        description: [
          "Press dumbbells overhead from shoulder height"
        ]
      },
      {
        name: "Dumbbell Romanian Deadlifts",
        duration: "5 minutes",
        description: [
          "Hinge at the hips, lowering dumbbells to mid-shin level"
        ]
      },
      {
        name: "Dumbbell Side Steps",
        duration: "3 minutes",
        description: [
          "Step side-to-side holding dumbbells, keeping your core engaged"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (10 minutes total rest)"
  },
  {
    id: 202,
    title: "Strength and Cardio Mix",
    duration: "30 min",
    intensity: "Beginner",
    calories: "180",
    description: "A balanced workout combining strength and cardio exercises",
    exercises: [
      {
        name: "Dumbbell High Knees",
        duration: "3 minutes",
        description: [
          "Jog in place, lifting knees high while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Step-Back Lunges",
        duration: "5 minutes",
        description: [
          "Step back into lunges, alternating legs while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Bicep Curls",
        duration: "4 minutes",
        description: [
          "Curl dumbbells up to shoulders while keeping your elbows stationary"
        ]
      },
      {
        name: "Dumbbell Shadow Boxing",
        duration: "3 minutes",
        description: [
          "Perform controlled punches while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Thrusters",
        duration: "5 minutes",
        description: [
          "Squat and press dumbbells overhead as you return to standing"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (10 minutes total rest)"
  }
];

// 30-minute Intermediate Workouts
export const intermediateWorkouts30: Workout[] = [
  {
    id: 203,
    title: "Full-Body Strength Builder",
    duration: "30 min",
    intensity: "Intermediate",
    calories: "240",
    description: "An intense strength-focused full-body workout",
    exercises: [
      {
        name: "Dumbbell Deadlift to Press",
        duration: "5 minutes",
        description: [
          "Perform a deadlift, then press dumbbells overhead"
        ]
      },
      {
        name: "Dumbbell Bent-Over Rows",
        duration: "4 minutes",
        description: [
          "Pull dumbbells toward your waist in a bent-over position"
        ]
      },
      {
        name: "Dumbbell Bulgarian Split Squats",
        duration: "6 minutes",
        description: [
          "Alternate legs with one foot elevated, performing split squats"
        ]
      },
      {
        name: "Dumbbell Lateral Raises",
        duration: "4 minutes",
        description: [
          "Lift dumbbells to shoulder height with controlled movement"
        ]
      },
      {
        name: "Dumbbell Farmers' Walk",
        duration: "3 minutes",
        description: [
          "Walk holding heavy dumbbells at your sides"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (8 minutes total rest)"
  },
  {
    id: 204,
    title: "Cardio and Power Circuit",
    duration: "30 min",
    intensity: "Intermediate",
    calories: "240",
    description: "A high-energy workout combining cardio and power exercises",
    exercises: [
      {
        name: "Dumbbell Thrusters",
        duration: "4 minutes",
        description: [
          "Squat and press dumbbells overhead as you stand up"
        ]
      },
      {
        name: "Dumbbell Forward Lunges with Twist",
        duration: "5 minutes",
        description: [
          "Step forward into a lunge and twist torso with a dumbbell"
        ]
      },
      {
        name: "Alternating Dumbbell Snatches",
        duration: "5 minutes",
        description: [
          "Explosively lift a dumbbell overhead, alternating arms"
        ]
      },
      {
        name: "Dumbbell Russian Twists",
        duration: "4 minutes",
        description: [
          "Twist side-to-side holding a dumbbell while seated"
        ]
      },
      {
        name: "Dumbbell Jump Squats",
        duration: "4 minutes",
        description: [
          "Squat and jump explosively while holding dumbbells"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (8 minutes total rest)"
  }
];

// 30-minute Expert Workouts
export const expertWorkouts30: Workout[] = [
  {
    id: 205,
    title: "High-Intensity Full-Body Blast",
    duration: "30 min",
    intensity: "Expert",
    calories: "300",
    description: "An intense, advanced full-body workout",
    exercises: [
      {
        name: "Dumbbell Burpees with Press",
        duration: "5 minutes",
        description: [
          "Perform a burpee and press dumbbells overhead at the top"
        ]
      },
      {
        name: "Alternating Dumbbell Snatches",
        duration: "4 minutes",
        description: [
          "Explosively lift dumbbells overhead, alternating arms"
        ]
      },
      {
        name: "Dumbbell Push Press",
        duration: "4 minutes",
        description: [
          "Use leg drive to press dumbbells overhead"
        ]
      },
      {
        name: "Dumbbell Bulgarian Split Squats",
        duration: "6 minutes",
        description: [
          "Perform split squats with one foot elevated, alternating legs"
        ]
      },
      {
        name: "Dumbbell Farmers' Walk",
        duration: "3 minutes",
        description: [
          "Walk while holding heavy dumbbells at your sides"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (8 minutes total rest)"
  },
  {
    id: 206,
    title: "Functional Strength Challenge",
    duration: "30 min",
    intensity: "Expert",
    calories: "300",
    description: "A challenging functional strength workout",
    exercises: [
      {
        name: "Dumbbell Deadlift to High Pull",
        duration: "5 minutes",
        description: [
          "Perform a deadlift, then pull dumbbells to chest height"
        ]
      },
      {
        name: "Dumbbell Single-Leg Romanian Deadlifts",
        duration: "4 minutes per leg",
        description: [
          "Perform a Romanian deadlift on one leg while holding a dumbbell"
        ]
      },
      {
        name: "Dumbbell Push-Up Rows",
        duration: "5 minutes",
        description: [
          "Perform push-ups on dumbbells, followed by a row"
        ]
      },
      {
        name: "Dumbbell Clean and Press",
        duration: "5 minutes",
        description: [
          "Explosively lift dumbbells to shoulder height, then press overhead"
        ]
      },
      {
        name: "Dumbbell Thrusters",
        duration: "4 minutes",
        description: [
          "Combine a squat with an overhead press"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (7 minutes total rest)"
  }
];
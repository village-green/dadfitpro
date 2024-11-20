import { Workout } from "../types";

// 60-minute Beginner Workouts
export const beginnerWorkouts60: Workout[] = [
  {
    id: 401,
    title: "Total Body Starter",
    duration: "60 min",
    intensity: "Beginner",
    calories: "360",
    description: "A comprehensive full-body workout for beginners",
    exercises: [
      {
        name: "Dumbbell Goblet Squats",
        duration: "6 minutes",
        description: [
          "Hold a dumbbell in front of your chest and perform squats"
        ]
      },
      {
        name: "Dumbbell Rows",
        duration: "6 minutes per arm",
        description: [
          "Pull a dumbbell toward your torso while keeping your back straight"
        ]
      },
      {
        name: "Dumbbell Shoulder Press",
        duration: "6 minutes",
        description: [
          "Press dumbbells overhead from shoulder height"
        ]
      },
      {
        name: "Dumbbell Romanian Deadlifts",
        duration: "6 minutes",
        description: [
          "Hinge at the hips to lower dumbbells to mid-shin level"
        ]
      },
      {
        name: "Dumbbell High Knees",
        duration: "5 minutes",
        description: [
          "Jog in place, lifting knees high while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Bicep Curls",
        duration: "5 minutes",
        description: [
          "Curl dumbbells to your shoulders while keeping elbows stationary"
        ]
      },
      {
        name: "Dumbbell Shadow Boxing",
        duration: "6 minutes",
        description: [
          "Throw controlled punches with dumbbells in a rhythmic manner"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (20 minutes total rest)"
  },
  {
    id: 402,
    title: "Cardio and Core Starter",
    duration: "60 min",
    intensity: "Beginner",
    calories: "360",
    description: "A balanced workout focusing on cardio and core strength",
    exercises: [
      {
        name: "Dumbbell Step-Back Lunges",
        duration: "6 minutes",
        description: [
          "Step back into lunges with dumbbells, alternating legs"
        ]
      },
      {
        name: "Dumbbell Thrusters",
        duration: "6 minutes",
        description: [
          "Combine a squat with an overhead press"
        ]
      },
      {
        name: "Dumbbell Russian Twists",
        duration: "6 minutes",
        description: [
          "Twist side-to-side with a dumbbell while seated"
        ]
      },
      {
        name: "Dumbbell Farmers' Walk",
        duration: "5 minutes",
        description: [
          "Walk holding heavy dumbbells at your sides"
        ]
      },
      {
        name: "Dumbbell Side Steps",
        duration: "5 minutes",
        description: [
          "Step side-to-side holding dumbbells, keeping your core engaged"
        ]
      },
      {
        name: "Dumbbell Deadlifts",
        duration: "6 minutes",
        description: [
          "Perform controlled deadlifts with dumbbells"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (20 minutes total rest)"
  }
];

// 60-minute Intermediate Workouts
export const intermediateWorkouts60: Workout[] = [
  {
    id: 403,
    title: "Strength and Cardio Mix",
    duration: "60 min",
    intensity: "Intermediate",
    calories: "480",
    description: "An intense workout combining strength training and cardio",
    exercises: [
      {
        name: "Dumbbell Deadlift to Press",
        duration: "6 minutes",
        description: [
          "Perform a deadlift and press dumbbells overhead"
        ]
      },
      {
        name: "Dumbbell Forward Lunges with Twist",
        duration: "6 minutes",
        description: [
          "Step forward into a lunge and twist torso with a dumbbell"
        ]
      },
      {
        name: "Alternating Dumbbell Snatches",
        duration: "6 minutes",
        description: [
          "Explosively lift dumbbells overhead, alternating arms"
        ]
      },
      {
        name: "Dumbbell Push Press",
        duration: "6 minutes",
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
        name: "Dumbbell Thrusters",
        duration: "6 minutes",
        description: [
          "Combine a squat with an overhead press"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (24 minutes total rest)"
  },
  {
    id: 404,
    title: "Full-Body Strength Builder",
    duration: "60 min",
    intensity: "Intermediate",
    calories: "480",
    description: "A comprehensive strength-focused full-body workout",
    exercises: [
      {
        name: "Dumbbell Bent-Over Rows",
        duration: "6 minutes",
        description: [
          "Pull dumbbells toward your waist in a bent-over position"
        ]
      },
      {
        name: "Dumbbell Jump Squats",
        duration: "5 minutes",
        description: [
          "Squat and jump explosively while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Russian Twists",
        duration: "6 minutes",
        description: [
          "Twist side-to-side holding a dumbbell while seated"
        ]
      },
      {
        name: "Dumbbell Shadow Boxing",
        duration: "6 minutes",
        description: [
          "Throw controlled punches with dumbbells"
        ]
      },
      {
        name: "Dumbbell Deadlift to High Pull",
        duration: "6 minutes",
        description: [
          "Perform a deadlift, then pull dumbbells to chest height"
        ]
      },
      {
        name: "Dumbbell Farmers' Walk",
        duration: "5 minutes",
        description: [
          "Walk while holding heavy dumbbells at your sides"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (24 minutes total rest)"
  }
];

// 60-minute Expert Workouts
export const expertWorkouts60: Workout[] = [
  {
    id: 405,
    title: "High-Intensity Full-Body Circuit",
    duration: "60 min",
    intensity: "Expert",
    calories: "600",
    description: "An advanced full-body workout designed for maximum intensity",
    exercises: [
      {
        name: "Dumbbell Burpees with Press",
        duration: "6 minutes",
        description: [
          "Perform burpees and press dumbbells overhead at the top"
        ]
      },
      {
        name: "Dumbbell Deadlift to High Pull",
        duration: "6 minutes",
        description: [
          "Perform a deadlift, then pull dumbbells to chest height"
        ]
      },
      {
        name: "Dumbbell Push-Up Rows",
        duration: "6 minutes",
        description: [
          "Perform push-ups on dumbbells, followed by a row"
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
        name: "Alternating Dumbbell Snatches",
        duration: "6 minutes",
        description: [
          "Explosively lift dumbbells overhead, alternating arms"
        ]
      },
      {
        name: "Dumbbell Thrusters",
        duration: "6 minutes",
        description: [
          "Combine a squat with an overhead press"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (24 minutes total rest)"
  },
  {
    id: 406,
    title: "Functional Strength and Power",
    duration: "60 min",
    intensity: "Expert",
    calories: "600",
    description: "An advanced workout focusing on functional movements and power development",
    exercises: [
      {
        name: "Dumbbell Clean and Press",
        duration: "6 minutes",
        description: [
          "Explosively lift dumbbells to shoulder height, then press overhead"
        ]
      },
      {
        name: "Dumbbell Single-Leg Romanian Deadlifts",
        duration: "5 minutes per leg",
        description: [
          "Perform a Romanian deadlift on one leg while holding a dumbbell"
        ]
      },
      {
        name: "Dumbbell Jump Squats",
        duration: "6 minutes",
        description: [
          "Squat and jump explosively while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Push Press",
        duration: "6 minutes",
        description: [
          "Use leg drive to press dumbbells overhead"
        ]
      },
      {
        name: "Dumbbell Russian Twists",
        duration: "6 minutes",
        description: [
          "Twist side-to-side holding a dumbbell while seated"
        ]
      },
      {
        name: "Dumbbell Farmers' Walk",
        duration: "5 minutes",
        description: [
          "Walk holding heavy dumbbells at your sides"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (24 minutes total rest)"
  }
];
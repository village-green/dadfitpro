import { Workout } from "../types";

// 45-minute Beginner Workouts
export const beginnerWorkouts45: Workout[] = [
  {
    id: 301,
    title: "Strength and Endurance Mix",
    duration: "45 min",
    intensity: "Beginner",
    calories: "270",
    description: "A comprehensive workout combining strength and endurance training",
    exercises: [
      {
        name: "Dumbbell Goblet Squats",
        duration: "5 minutes",
        description: [
          "Hold a dumbbell in front of your chest and perform squats"
        ]
      },
      {
        name: "Dumbbell Rows",
        duration: "5 minutes per arm",
        description: [
          "Pull a dumbbell toward your torso while supporting yourself on a surface"
        ]
      },
      {
        name: "Dumbbell Shoulder Press",
        duration: "5 minutes",
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
        name: "Dumbbell Shadow Boxing",
        duration: "4 minutes",
        description: [
          "Throw punches with dumbbells in a controlled, rhythmic motion"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (10 minutes total rest)"
  },
  {
    id: 302,
    title: "Cardio and Core",
    duration: "45 min",
    intensity: "Beginner",
    calories: "270",
    description: "A balanced workout focusing on cardiovascular fitness and core strength",
    exercises: [
      {
        name: "Dumbbell Step-Back Lunges",
        duration: "5 minutes",
        description: [
          "Step back into lunges with dumbbells, alternating legs"
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
        name: "Dumbbell Thrusters",
        duration: "6 minutes",
        description: [
          "Combine a squat with an overhead press"
        ]
      },
      {
        name: "Dumbbell Russian Twists",
        duration: "5 minutes",
        description: [
          "Twist side-to-side with a dumbbell while seated"
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
        name: "Dumbbell Farmers' Walk",
        duration: "4 minutes",
        description: [
          "Walk holding heavy dumbbells at your sides"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (10 minutes total rest)"
  }
];

// 45-minute Intermediate Workouts
export const intermediateWorkouts45: Workout[] = [
  {
    id: 303,
    title: "Strength and Cardio Blast",
    duration: "45 min",
    intensity: "Intermediate",
    calories: "360",
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
        name: "Dumbbell Jump Squats",
        duration: "5 minutes",
        description: [
          "Squat and jump explosively while holding dumbbells"
        ]
      },
      {
        name: "Dumbbell Farmers' Walk",
        duration: "4 minutes",
        description: [
          "Walk while holding heavy dumbbells at your sides"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (12 minutes total rest)"
  },
  {
    id: 304,
    title: "Power and Core Focus",
    duration: "45 min",
    intensity: "Intermediate",
    calories: "360",
    description: "A challenging workout emphasizing power development and core strength",
    exercises: [
      {
        name: "Dumbbell Thrusters",
        duration: "6 minutes",
        description: [
          "Squat and press dumbbells overhead as you stand up"
        ]
      },
      {
        name: "Dumbbell Bent-Over Rows",
        duration: "5 minutes",
        description: [
          "Pull dumbbells toward your waist in a bent-over position"
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
        name: "Dumbbell Bulgarian Split Squats",
        duration: "6 minutes",
        description: [
          "Perform split squats with one foot elevated, alternating legs"
        ]
      },
      {
        name: "Dumbbell Shadow Boxing",
        duration: "5 minutes",
        description: [
          "Throw controlled punches with dumbbells"
        ]
      },
      {
        name: "Dumbbell Side Steps",
        duration: "5 minutes",
        description: [
          "Step side-to-side holding dumbbells, keeping your core engaged"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (12 minutes total rest)"
  }
];

// 45-minute Expert Workouts
export const expertWorkouts45: Workout[] = [
  {
    id: 305,
    title: "High-Intensity Full-Body Circuit",
    duration: "45 min",
    intensity: "Expert",
    calories: "450",
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
        duration: "5 minutes",
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
        duration: "5 minutes",
        description: [
          "Combine a squat with an overhead press"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (11 minutes total rest)"
  },
  {
    id: 306,
    title: "Functional Strength and Power",
    duration: "45 min",
    intensity: "Expert",
    calories: "450",
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
        name: "Dumbbell Push Press",
        duration: "5 minutes",
        description: [
          "Use leg drive to press dumbbells overhead"
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
        duration: "5 minutes",
        description: [
          "Twist side-to-side holding a dumbbell while seated"
        ]
      },
      {
        name: "Dumbbell Farmers' Walk",
        duration: "4 minutes",
        description: [
          "Walk holding heavy dumbbells at your sides"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and complete the circuit twice (10 minutes total rest)"
  }
];
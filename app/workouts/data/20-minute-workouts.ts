import { Workout } from "../types";

// 20-minute Beginner Workouts
export const beginnerWorkouts: Workout[] = [
  {
    id: 1,
    title: "Full-Body Basics",
    duration: "20 min",
    intensity: "Beginner",
    calories: "120",
    description: "A complete full-body workout for beginners",
    exercises: [
      {
        name: "Dumbbell Goblet Squats",
        duration: "3 minutes",
        description: [
          "Hold a dumbbell vertically in front of your chest with both hands",
          "Keep your feet shoulder-width apart",
          "Lower your body into a squat until your thighs are parallel to the floor",
          "Push back up to standing, engaging your glutes"
        ]
      },
      {
        name: "Dumbbell Rows",
        duration: "3 minutes per arm",
        description: [
          "Hold a dumbbell in your right hand, with your left knee and hand on a sturdy surface for support",
          "Keep your back straight and pull the dumbbell towards your torso",
          "Lower the dumbbell slowly and repeat"
        ]
      },
      {
        name: "Dumbbell Shoulder Press",
        duration: "4 minutes",
        description: [
          "Hold a dumbbell in each hand at shoulder height with palms facing forward",
          "Press the dumbbells overhead until your arms are fully extended",
          "Lower back to shoulder height and repeat"
        ]
      },
      {
        name: "Dumbbell Romanian Deadlifts",
        duration: "4 minutes",
        description: [
          "Hold a dumbbell in each hand in front of your thighs",
          "Keep your back straight and hinge at your hips, lowering the dumbbells to mid-shin level",
          "Squeeze your glutes and return to the starting position"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and repeat the circuit once (6 minutes total rest)"
  },
  {
    id: 2,
    title: "Cardio and Strength Mix",
    duration: "20 min",
    intensity: "Beginner",
    calories: "120",
    description: "A balanced workout combining cardio and strength training",
    exercises: [
      {
        name: "Dumbbell High Knees",
        duration: "2 minutes",
        description: [
          "Hold a dumbbell in each hand at your sides",
          "Jog in place, lifting your knees as high as possible",
          "Keep your arms steady and core engaged"
        ]
      },
      {
        name: "Dumbbell Curls",
        duration: "3 minutes",
        description: [
          "Hold a dumbbell in each hand with palms facing forward",
          "Curl the dumbbells up to your shoulders while keeping your elbows stationary",
          "Lower them back slowly and repeat"
        ]
      },
      {
        name: "Dumbbell Step-Back Lunges",
        duration: "4 minutes",
        description: [
          "Hold a dumbbell in each hand at your sides",
          "Step one foot back into a lunge position, lowering your back knee towards the floor",
          "Push through your front heel to return to standing and alternate legs"
        ]
      },
      {
        name: "Dumbbell Shadow Boxing",
        duration: "3 minutes",
        description: [
          "Hold light dumbbells in each hand",
          "Perform jabs, hooks, and uppercuts in a controlled, rhythmic manner",
          "Keep your core tight and movements fluid"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and repeat the circuit once (8 minutes total rest)"
  }
];

// 20-minute Intermediate Workouts
export const intermediateWorkouts: Workout[] = [
  {
    id: 3,
    title: "Strength Circuit",
    duration: "20 min",
    intensity: "Intermediate",
    calories: "160",
    description: "Focused strength training circuit",
    exercises: [
      {
        name: "Dumbbell Deadlift to Press",
        duration: "4 minutes",
        description: [
          "Perform a deadlift by lowering the dumbbells to mid-shin level",
          "Stand up and immediately press the dumbbells overhead",
          "Lower the dumbbells back to the starting position and repeat"
        ]
      },
      {
        name: "Dumbbell Bent-Over Rows",
        duration: "3 minutes",
        description: [
          "Hold a dumbbell in each hand with a slight bend in your knees",
          "Hinge forward at the hips and pull the dumbbells towards your waist",
          "Lower them slowly and repeat"
        ]
      },
      {
        name: "Dumbbell Lateral Raises",
        duration: "3 minutes",
        description: [
          "Hold a dumbbell in each hand at your sides",
          "Lift your arms out to the sides until they are parallel to the floor",
          "Lower back down slowly and repeat"
        ]
      },
      {
        name: "Dumbbell Bulgarian Split Squats",
        duration: "5 minutes",
        description: [
          "Hold a dumbbell in each hand",
          "Place one foot behind you on a low surface and lower into a lunge position",
          "Return to standing and repeat for each leg"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and repeat the circuit once (5 minutes total rest)"
  },
  {
    id: 4,
    title: "Power Burn",
    duration: "20 min",
    intensity: "Intermediate",
    calories: "160",
    description: "High-intensity power workout",
    exercises: [
      {
        name: "Dumbbell Thrusters",
        duration: "4 minutes",
        description: [
          "Hold a dumbbell in each hand at shoulder height",
          "Perform a squat and press the dumbbells overhead as you return to standing",
          "Lower the dumbbells and repeat"
        ]
      },
      {
        name: "Dumbbell Forward Lunges with Twist",
        duration: "4 minutes",
        description: [
          "Hold one dumbbell with both hands at chest height",
          "Step forward into a lunge and twist your torso towards your front leg",
          "Return to standing and alternate legs"
        ]
      },
      {
        name: "Dumbbell Clean and Press",
        duration: "4 minutes",
        description: [
          "Start with dumbbells at your sides",
          "Lift the dumbbells to shoulder height in one motion and press overhead",
          "Lower them back to your sides and repeat"
        ]
      },
      {
        name: "Dumbbell Russian Twists",
        duration: "3 minutes",
        description: [
          "Sit on the floor holding one dumbbell with both hands",
          "Lean back slightly and twist your torso side to side",
          "Tap the dumbbell on the floor with each twist"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and repeat the circuit once (5 minutes total rest)"
  }
];

// 20-minute Expert Workouts
export const expertWorkouts: Workout[] = [
  {
    id: 5,
    title: "High-Intensity Dumbbell Training",
    duration: "20 min",
    intensity: "Expert",
    calories: "200",
    description: "Advanced high-intensity workout",
    exercises: [
      {
        name: "Dumbbell Burpees with Press",
        duration: "4 minutes",
        description: [
          "Hold a dumbbell in each hand",
          "Perform a burpee by jumping back into a plank, jumping forward, and pressing the dumbbells overhead",
          "Repeat continuously"
        ]
      },
      {
        name: "Alternating Dumbbell Snatches",
        duration: "3 minutes per arm",
        description: [
          "Place a dumbbell on the floor between your feet",
          "Explosively lift it overhead with one arm while keeping the other arm at your side",
          "Alternate arms"
        ]
      },
      {
        name: "Dumbbell Step-Ups",
        duration: "4 minutes",
        description: [
          "Step onto a sturdy surface holding dumbbells at your sides",
          "Drive through your leading leg and step back down",
          "Alternate legs"
        ]
      },
      {
        name: "Dumbbell Push Press",
        duration: "3 minutes",
        description: [
          "Hold dumbbells at shoulder height",
          "Use a slight bend in your knees to generate power and press the dumbbells overhead",
          "Lower them and repeat"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and repeat the circuit once (6 minutes total rest)"
  },
  {
    id: 6,
    title: "Functional Strength",
    duration: "20 min",
    intensity: "Expert",
    calories: "200",
    description: "Advanced functional strength workout",
    exercises: [
      {
        name: "Dumbbell Deadlift to High Pull",
        duration: "4 minutes",
        description: [
          "Perform a deadlift, then pull the dumbbells up to your chest in a high pull motion",
          "Lower back down and repeat"
        ]
      },
      {
        name: "Dumbbell Single-Leg Romanian Deadlifts",
        duration: "3 minutes per leg",
        description: [
          "Hold a dumbbell in one hand",
          "Hinge forward at the hips while lifting one leg straight behind you",
          "Return to standing and repeat"
        ]
      },
      {
        name: "Dumbbell Lateral Lunges with Curl",
        duration: "4 minutes",
        description: [
          "Hold a dumbbell in each hand",
          "Step to the side into a lunge, then curl the dumbbells as you return to standing",
          "Alternate sides"
        ]
      },
      {
        name: "Dumbbell Push-Up Rows",
        duration: "4 minutes",
        description: [
          "Place dumbbells on the floor and grip them as handles",
          "Perform a push-up, then row one dumbbell to your waist",
          "Alternate rows after each push-up"
        ]
      }
    ],
    restInfo: "Rest for 1 minute between exercises and repeat the circuit once (5 minutes total rest)"
  }
];
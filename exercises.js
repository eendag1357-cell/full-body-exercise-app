const workouts = [
    {
        id: 1,
        name: "Morning Stretch & Warm-up",
        difficulty: "beginner",
        duration: 10,
        focusAreas: ["Full Body", "Flexibility"],
        description: "Easy morning routine to energize your body and improve flexibility.",
        exercises: [
            {
                name: "Neck Rolls",
                reps: "10 each direction",
                description: "Slowly rotate your neck in circles to loosen up neck muscles."
            },
            {
                name: "Arm Circles",
                reps: "15 each direction",
                description: "Extend arms and make large circular motions to warm up shoulders."
            },
            {
                name: "Torso Twists",
                reps: "20 total",
                description: "Stand with feet shoulder-width apart and twist your upper body side to side."
            },
            {
                name: "Leg Swings",
                reps: "10 each leg",
                description: "Swing each leg forward and backward to warm up hips and hamstrings."
            },
            {
                name: "Cat-Cow Stretch",
                reps: "12 reps",
                description: "On hands and knees, alternate between arching and rounding your back."
            }
        ],
        tips: [
            "Move slowly and deliberately for best results",
            "Breathe deeply throughout the routine",
            "Don't bounce or jerk movements",
            "Do this before your main workout"
        ]
    },
    {
        id: 2,
        name: "Beginner Full Body Blast",
        difficulty: "beginner",
        duration: 20,
        focusAreas: ["Cardio", "Strength", "Full Body"],
        description: "Perfect for beginners! A balanced routine targeting all major muscle groups.",
        exercises: [
            {
                name: "Jumping Jacks",
                reps: "20 reps",
                description: "Jump while spreading legs and raising arms. Great cardio warm-up!"
            },
            {
                name: "Push-ups",
                reps: "10 reps (modify on knees if needed)",
                description: "Lower your body until chest nearly touches floor, then push back up."
            },
            {
                name: "Bodyweight Squats",
                reps: "15 reps",
                description: "Bend knees and lower hips as if sitting in a chair, then stand back up."
            },
            {
                name: "Lunges",
                reps: "10 each leg",
                description: "Step forward, bend both knees, then return to starting position."
            },
            {
                name: "Plank Hold",
                reps: "20-30 seconds",
                description: "Hold a straight line from head to heels, engaging your core."
            },
            {
                name: "Glute Bridges",
                reps: "15 reps",
                description: "Lie on back, bend knees, push through heels to lift hips."
            }
        ],
        tips: [
            "Rest 30 seconds between exercises",
            "Focus on proper form over speed",
            "Modify exercises as needed for your fitness level",
            "Do 2-3 rounds for better results"
        ]
    },
    {
        id: 3,
        name: "HIIT Cardio Burn",
        difficulty: "intermediate",
        duration: 20,
        focusAreas: ["Cardio", "Full Body"],
        description: "High-intensity interval training to burn calories and build endurance.",
        exercises: [
            {
                name: "Burpees",
                reps: "30 seconds on, 30 seconds rest",
                description: "Squat down, jump back, do a push-up, jump forward. Repeat!"
            },
            {
                name: "Mountain Climbers",
                reps: "30 seconds on, 30 seconds rest",
                description: "In plank position, quickly bring knees to chest alternately."
            },
            {
                name: "High Knees",
                reps: "30 seconds on, 30 seconds rest",
                description: "Run in place bringing knees up to hip level. Keep pace fast!"
            },
            {
                name: "Jump Squats",
                reps: "30 seconds on, 30 seconds rest",
                description: "Squat down then explosively jump up. Land softly."
            },
            {
                name: "Push-up to T",
                reps: "30 seconds on, 30 seconds rest",
                description: "Do a push-up, then rotate to side plank with arm raised."
            }
        ],
        tips: [
            "Keep intensity high during work periods",
            "Use rest periods to catch your breath",
            "Modify movements if needed without stopping",
            "Repeat circuit 2-3 times for maximum results"
        ]
    },
    {
        id: 4,
        name: "Core Strength Builder",
        difficulty: "intermediate",
        duration: 15,
        focusAreas: ["Core", "Abs"],
        description: "Strengthen your core and build six-pack abs with targeted exercises.",
        exercises: [
            {
                name: "Plank",
                reps: "45-60 seconds",
                description: "Hold a straight line, engaging all core muscles."
            },
            {
                name: "Crunches",
                reps: "20 reps",
                description: "Lie on back, bring chest toward knees using ab muscles only."
            },
            {
                name: "Bicycle Crunches",
                reps: "20 reps (10 each side)",
                description: "Lie on back, alternate bringing elbow to opposite knee."
            },
            {
                name: "Russian Twists",
                reps: "20 reps (10 each side)",
                description: "Sit with knees bent, rotate torso touching floor on each side."
            },
            {
                name: "Leg Raises",
                reps: "12-15 reps",
                description: "Lie on back, raise straight legs to 90 degrees, lower without touching floor."
            },
            {
                name: "Dead Bugs",
                reps: "12 reps",
                description: "Lie on back, extend opposite arm and leg, alternate sides."
            }
        ],
        tips: [
            "Keep movements controlled and deliberate",
            "Don't pull on your neck during crunches",
            "Breathe out on the exertion phase",
            "Engage your core throughout all exercises"
        ]
    },
    {
        id: 5,
        name: "Lower Body Power",
        difficulty: "intermediate",
        duration: 25,
        focusAreas: ["Legs", "Glutes", "Quads"],
        description: "Build strong legs and glutes with this focused lower body workout.",
        exercises: [
            {
                name: "Goblet Squats",
                reps: "15 reps",
                description: "Hold weight at chest, squat deep, keep chest upright."
            },
            {
                name: "Romanian Deadlifts",
                reps: "12 reps",
                description: "Hinge at hips with slight knee bend, feel stretch in hamstrings."
            },
            {
                name: "Walking Lunges",
                reps: "20 steps (10 each leg)",
                description: "Step forward into a lunge, alternate legs while moving forward."
            },
            {
                name: "Side-Lying Leg Lifts",
                reps: "15 each side",
                description: "Lie on side, lift top leg up, lower without touching."
            },
            {
                name: "Step-ups",
                reps: "12 each leg",
                description: "Step up onto a platform, drive up with front leg."
            },
            {
                name: "Calf Raises",
                reps: "20 reps",
                description: "Rise up on toes, hold briefly, lower down."
            }
        ],
        tips: [
            "Use dumbbells to increase difficulty",
            "Keep your core engaged throughout",
            "Full range of motion is key",
            "Rest 60 seconds between exercises"
        ]
    },
    {
        id: 6,
        name: "Advanced Strength Circuit",
        difficulty: "advanced",
        duration: 35,
        focusAreas: ["Strength", "Full Body", "Endurance"],
        description: "Challenging workout combining strength and endurance for advanced fitness.",
        exercises: [
            {
                name: "Weighted Push-ups",
                reps: "12 reps",
                description: "Do push-ups with added weight on your back or a weighted vest."
            },
            {
                name: "Pistol Squats",
                reps: "8 each leg",
                description: "Single-leg squat, holding onto support for balance if needed."
            },
            {
                name: "Handstand Hold",
                reps: "20-30 seconds",
                description: "Against a wall, hold an inverted position with control."
            },
            {
                name: "Single-Leg Deadlifts",
                reps: "10 each leg",
                description: "Stand on one leg, hinge forward while extending other leg back."
            },
            {
                name: "Explosive Push-ups",
                reps: "10 reps",
                description: "Push-ups where hands leave ground at top, catch and repeat."
            },
            {
                name: "Weighted Pull-ups",
                reps: "8-10 reps",
                description: "Pull-ups with added weight, slow and controlled movement."
            }
        ],
        tips: [
            "Ensure proper form before adding weight",
            "Have a spotter for safety on advanced moves",
            "Rest 90 seconds between exercises",
            "Warm up thoroughly before starting"
        ]
    },
    {
        id: 7,
        name: "Yoga Flow & Flexibility",
        difficulty: "beginner",
        duration: 20,
        focusAreas: ["Flexibility", "Balance", "Mind-Body"],
        description: "Gentle yoga routine to improve flexibility and reduce stress.",
        exercises: [
            {
                name: "Child's Pose",
                reps: "30 seconds",
                description: "Kneel and fold forward, arms extended, breathe deeply."
            },
            {
                name: "Downward Dog",
                reps: "30 seconds",
                description: "Inverted V-shape, pressing hands and feet firmly into ground."
            },
            {
                name: "Warrior I",
                reps: "30 seconds each side",
                description: "Lunge position with arms raised, strong foundation below."
            },
            {
                name: "Warrior II",
                reps: "30 seconds each side",
                description: "Side lunge with arms extended, gaze over front fingers."
            },
            {
                name: "Triangle Pose",
                reps: "30 seconds each side",
                description: "Stretch both arms, reaching top hand overhead."
            },
            {
                name: "Savasana",
                reps: "2 minutes",
                description: "Lie flat, relax completely, focus on breathing."
            }
        ],
        tips: [
            "Move slowly and mindfully",
            "Never force stretches - ease into them",
            "Focus on your breath throughout",
            "Perfect for recovery days between intense workouts"
        ]
    },
    {
        id: 8,
        name: "30-Minute Total Body",
        difficulty: "advanced",
        duration: 30,
        focusAreas: ["Strength", "Cardio", "Full Body"],
        description: "Complete full-body workout combining strength, cardio, and flexibility.",
        exercises: [
            {
                name: "Warm-up - Jumping Jacks",
                reps: "30 seconds",
                description: "Get your heart rate up and muscles loose."
            },
            {
                name: "Dumbbell Bench Press",
                reps: "12 reps",
                description: "Lie on bench, press weights from chest level."
            },
            {
                name: "Squat to Press",
                reps: "12 reps",
                description: "Hold dumbbells, squat down, stand and press overhead."
            },
            {
                name: "Renegade Rows",
                reps: "10 each side",
                description: "In plank with dumbbells, alternate pulling weight to chest."
            },
            {
                name: "Box Jumps",
                reps: "10 reps",
                description: "Jump onto elevated platform, step down carefully."
            },
            {
                name: "Turkish Get-ups",
                reps: "5 each side",
                description: "Lying down, press dumbbell overhead and stand up."
            },
            {
                name: "Cool-down Stretch",
                reps: "3 minutes",
                description: "Hold major stretches for hamstrings, chest, and shoulders."
            }
        ],
        tips: [
            "Use appropriate weights for your level",
            "Maintain form through fatigue",
            "Hydrate between exercises",
            "This is a challenging session - take breaks as needed"
        ]
    }
];

export { workouts };

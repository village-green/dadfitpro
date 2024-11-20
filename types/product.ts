export interface ProductSpecification {
  Weight: string;
  Design: string;
  Grip: string;
  Storage: string;
}

export interface ProductHighlight {
  title: string;
  points: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  specifications: ProductSpecification;
  highlights: {
    loves: string[];
    considers: string[];
  };
  overview: string;
  image: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "centr-smart-stack",
    name: "Centr by Chris Hemsworth Smart Stack Adjustable Dumbbell Set",
    price: 399.99,
    specifications: {
      Weight: "Up to 50 lbs per dumbbell; adjusts in 10-lb increments",
      Design: "Sleek, durable steel build with balanced heads for stability",
      Grip: "Ergonomic, textured handles for a secure and comfortable hold",
      Storage: 'Compact tray measures 18" x 10" x 6", perfect for saving space'
    },
    highlights: {
      loves: [
        "Sleek and durable design with Centr's trusted brand quality",
        "Intuitive weight adjustment system for seamless transitions",
        "Ergonomic, non-slip handles enhance comfort and safety",
        "Space-saving storage tray keeps your gym organized"
      ],
      considers: [
        "Maximum weight of 50 lbs may not suit advanced lifters",
        "10-lb increments limit finer adjustments for gradual progression"
      ]
    },
    overview: "The Centr by Chris Hemsworth Smart Stack Adjustable Dumbbell Set blends premium design and practical functionality, making it a standout option for home fitness enthusiasts. Each dumbbell adjusts up to 50 lbs, using an intuitive stacking mechanism that allows for fast, effortless transitions between exercises. Built with durable steel, these dumbbells are made to last, and their balanced heads offer stability for both beginner and intermediate workouts.",
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c",
    rating: 4.8,
    reviews: 245
  },
  {
    id: "body-solid-150",
    name: "Body-Solid Adjustable Dumbbell with Stand",
    price: 599.99,
    specifications: {
      Weight: "Up to 150 lbs per dumbbell; precise increments for customized workouts",
      Design: "Durable cast iron construction with sturdy, well-balanced heads",
      Grip: "Ergonomic, textured handles for secure and comfortable lifting",
      Storage: "Includes a sturdy stand for organized and space-saving storage"
    },
    highlights: {
      loves: [
        "High weight capacity for advanced lifters",
        "Durable and stable construction ensures long-lasting use",
        "Ergonomic handles enhance comfort during heavy sessions",
        "Convenient storage stand keeps your gym neat"
      ],
      considers: [
        "Weight range may be excessive for beginners",
        "Stand requires additional floor space"
      ]
    },
    overview: "The Body-Solid Adjustable Dumbbell with Stand is designed for serious strength training enthusiasts, with a weight capacity of 150 lbs per dumbbell. Its cast iron construction ensures durability, and the well-balanced heads offer stability for safe and effective lifting. The textured, ergonomic handles provide a secure and comfortable grip, even during heavy workouts.",
    image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da",
    rating: 4.9,
    reviews: 189
  },
  {
    id: "body-solid-132",
    name: "Body-Solid Adjustable Dumbbell",
    price: 549.99,
    specifications: {
      Weight: "Up to 132 lbs per dumbbell; fine increments for gradual progression",
      Design: "Heavy-duty cast iron heads ensure durability and balance",
      Grip: "Anti-slip, ergonomic handles for a secure and safe grip",
      Storage: "Includes a sturdy rack to keep your setup organized"
    },
    highlights: {
      loves: [
        "High weight range caters to advanced strength training",
        "Durable construction offers long-lasting performance",
        "Secure grip improves safety during heavy lifts",
        "Storage rack minimizes clutter in your home gym"
      ],
      considers: [
        "Weight range may be overwhelming for beginners",
        "Requires adequate space for the storage rack"
      ]
    },
    overview: "The Body-Solid Adjustable Dumbbell is a durable and versatile option for advanced lifters, with a weight range of up to 132 lbs per dumbbell. Built with cast iron heads, these dumbbells are both sturdy and well-balanced, providing stability during intense workouts. The anti-slip, ergonomic handles ensure a safe and comfortable grip, reducing the risk of fatigue or injury.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    rating: 4.8,
    reviews: 156
  },
  {
    id: "nordictrack-select",
    name: "NordicTrack Select-A-Weight Dumbbell",
    price: 299.99,
    specifications: {
      Weight: "Up to 55 lbs per dumbbell; adjusts easily with a dial",
      Design: "Compact, durable construction with balanced heads for stability",
      Grip: "Textured, ergonomic handles ensure comfort and prevent slippage",
      Storage: "Includes a space-saving tray for efficient organization"
    },
    highlights: {
      loves: [
        "Quick and intuitive weight adjustments with a dial",
        "Compact and durable design for stability and longevity",
        "Ergonomic handles enhance comfort during workouts",
        "Storage tray keeps dumbbells organized and accessible"
      ],
      considers: [
        "Weight range may not challenge advanced lifters",
        "Dial mechanism may require maintenance over time"
      ]
    },
    overview: "The NordicTrack Select-A-Weight Dumbbell is a versatile and user-friendly option for home gym users. It adjusts up to 55 lbs per dumbbell, using a simple and efficient dial system that makes switching between weights quick and easy. The compact, durable construction ensures stability during various exercises.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
    rating: 4.7,
    reviews: 312
  },
  {
    id: "holahatha-5in1",
    name: "HolaHatha 5-in-1 Adjustable Dumbbell",
    price: 279.99,
    specifications: {
      Weight: "Adjustable from 15 to 55 lbs with 5 preset settings",
      Design: "Sturdy build with a double-locking system for added safety",
      Grip: "Non-slip, ergonomic handles provide stability and comfort",
      Storage: "Includes a sleek tray for compact and organized storage"
    },
    highlights: {
      loves: [
        "Secure locking system for safe workouts",
        "Wide weight range suits various fitness levels",
        "Non-slip handles improve grip and reduce fatigue",
        "Compact tray minimizes clutter in your workout space"
      ],
      considers: [
        "Limited to 5 preset weight settings",
        "Not ideal for lifters seeking finer increments"
      ]
    },
    overview: "The HolaHatha 5-in-1 Adjustable Dumbbell is designed for convenience and safety, with a weight range of 15 to 55 lbs and 5 preset weight settings. The double-locking system keeps plates secure, ensuring safe and effective workouts. The non-slip, ergonomic handles provide a comfortable and reliable grip, reducing hand fatigue during extended sessions.",
    image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a",
    rating: 4.6,
    reviews: 178
  },
  {
    id: "yaheetech-quick-adjust",
    name: "Yaheetech Quick-Adjust Dumbbell for Home Gym",
    price: 249.99,
    specifications: {
      Weight: "Adjustable from 11 to 55 lbs with an intuitive dial system",
      Design: "Compact, durable build designed for stability and longevity",
      Grip: "Non-slip, ergonomic handles for comfort and secure lifting",
      Storage: "Comes with a compact tray for space-saving organization"
    },
    highlights: {
      loves: [
        "Quick and intuitive weight changes with dial system",
        "Compact and durable design ensures stability and longevity",
        "Non-slip handles improve grip and comfort",
        "Storage tray keeps gym space organized"
      ],
      considers: [
        "Limited to a 55-lb maximum weight",
        "Dial mechanism may feel less robust under heavy use"
      ]
    },
    overview: "The Yaheetech Quick-Adjust Dumbbell is a versatile and compact solution for home gym users. With a weight range of 11 to 55 lbs, the intuitive dial adjustment system allows for quick and seamless transitions between exercises. Its compact, durable construction provides stability during various workouts.",
    image: "https://images.unsplash.com/photo-1591940742878-13aba4b7a34e",
    rating: 4.5,
    reviews: 143
  },
  {
    id: "marcy-adjustable",
    name: "Marcy Adjustable Dumbbell",
    price: 269.99,
    specifications: {
      Weight: "Adjustable up to 57 lbs with a simple and quick adjustment mechanism",
      Design: "Solid, compact design with durable materials for long-term use",
      Grip: "Ergonomic, textured handle for a secure, slip-free grip",
      Storage: "Includes a space-efficient tray for organized storage"
    },
    highlights: {
      loves: [
        "Easy and fast weight adjustments",
        "Durable, compact design for stability and longevity",
        "Comfortable, non-slip handle enhances safety",
        "Storage tray helps keep your gym clutter-free"
      ],
      considers: [
        "Weight range may not challenge advanced lifters",
        "Limited to preset increments"
      ]
    },
    overview: "The Marcy Adjustable Dumbbell is a practical and durable option for home workouts, with a weight range of up to 57 lbs. Its quick adjustment mechanism makes switching between exercises easy and efficient. The solid, compact design ensures stability and reliability, even during challenging sessions.",
    image: "https://images.unsplash.com/photo-1590239926044-0654681783f1",
    rating: 4.6,
    reviews: 167
  },
  {
    id: "holahatha-3in1",
    name: "HolaHatha 3-in-1 Multifunctional Adjustable Dumbbell Set",
    price: 229.99,
    specifications: {
      Weight: "Adjustable from 10 to 44 lbs, offering multiple configurations",
      Design: "Compact and versatile design supports dumbbell, barbell, or kettlebell use",
      Grip: "Non-slip handles ensure stability and comfort during varied exercises",
      Storage: "Includes a space-saving rack for convenient organization"
    },
    highlights: {
      loves: [
        "Multifunctional design for diverse workout options",
        "Compact and durable construction",
        "Secure, non-slip handles improve grip and control",
        "Organized storage with a space-saving rack"
      ],
      considers: [
        "Lower maximum weight limits strength progression",
        "Assembly for different configurations may take time"
      ]
    },
    overview: "The HolaHatha 3-in-1 Multifunctional Adjustable Dumbbell Set is perfect for fitness enthusiasts who value versatility. With a weight range of 10 to 44 lbs, this set can be used as dumbbells, a barbell, or even a kettlebell, offering a wide variety of workout options. The compact, durable design ensures long-lasting use, while the non-slip handles provide a secure grip for stability and comfort.",
    image: "https://images.unsplash.com/photo-1585152968992-d2b9444408cc",
    rating: 4.5,
    reviews: 134
  },
  {
    id: "whizmax-adjustable",
    name: "WhizMax Adjustable Dumbbell Set",
    price: 259.99,
    specifications: {
      Weight: "Adjustable from 15 to 55 lbs with 5 preset settings: 15, 25, 35, 45, and 55 lbs",
      Design: "High-quality steel construction ensures durability and performance",
      Grip: "Anti-slip, ergonomic handles provide a secure and comfortable grip",
      Storage: "Includes a space-saving tray for organized and compact storage"
    },
    highlights: {
      loves: [
        "Quick-turn handle allows for fast and easy weight adjustments",
        "Durable steel build withstands rigorous workouts",
        "Anti-slip handles enhance safety and comfort during exercises",
        "Compact tray minimizes clutter in home gyms"
      ],
      considers: [
        "Limited to 5 preset weight settings, which may not suit those seeking finer increments",
        "Maximum weight of 55 lbs may not meet the needs of advanced lifters"
      ]
    },
    overview: "The WhizMax Adjustable Dumbbell Set offers a practical solution for home strength training, with a weight range adjustable from 15 to 55 lbs across 5 preset settings. The quick-turn handle system allows for seamless transitions between weights, making it easy to switch between exercises. Constructed with high-quality steel, these dumbbells are designed for durability and long-term performance.",
    image: "https://images.unsplash.com/photo-1583454122755-57966f2846e1",
    rating: 4.6,
    reviews: 156
  },
  {
    id: "sunny-health-fitness",
    name: "Sunny Health & Fitness Elite Adjustable Dumbbell",
    price: 269.99,
    specifications: {
      Weight: "Adjustable up to 55 lbs with 5 preset weight options for progressive training",
      Design: "Compact, durable design with sturdy construction for long-term use",
      Grip: "Ergonomic, textured handle ensures a secure and slip-free grip",
      Storage: "Comes with a space-efficient storage tray for easy organization"
    },
    highlights: {
      loves: [
        "Easy-to-use adjustment mechanism for quick weight changes",
        "Durable design ensures stability during intense workouts",
        "Comfortable, non-slip handle enhances safety and control",
        "Storage tray keeps your gym neat and clutter-free"
      ],
      considers: [
        "Maximum weight may not satisfy advanced lifters",
        "Limited to preset increments, reducing fine-tuning options"
      ]
    },
    overview: "The Sunny Health & Fitness Elite Adjustable Dumbbell is a reliable choice for home gym enthusiasts. With a weight range of up to 55 lbs, this dumbbell allows for quick and easy adjustments, making it ideal for full-body training sessions. Its compact, durable design ensures stability and reliability, even during intense workouts.",
    image: "https://images.unsplash.com/photo-1583454110552-620e2d39d173",
    rating: 4.7,
    reviews: 189
  },
  {
    id: "lifepro-quick-adjust",
    name: "LifePro Quick Adjust Dumbbells",
    price: 179.99,
    specifications: {
      Weight: "Adjustable from 5 to 25 lbs, perfect for light to moderate strength training",
      Design: "Compact and durable design ensures stability during use",
      Grip: "Non-slip handles provide comfort and safety during lifts",
      Storage: "Includes a sleek storage tray for space-saving organization"
    },
    highlights: {
      loves: [
        "Lightweight design suitable for beginners and casual users",
        "Durable and stable build for effective workouts",
        "Secure, ergonomic handles improve comfort",
        "Compact tray saves space in your home gym"
      ],
      considers: [
        "Limited to a maximum weight of 25 lbs",
        "Not ideal for heavy lifters or advanced strength training"
      ]
    },
    overview: "The LifePro Quick Adjust Dumbbells are an excellent choice for those starting their fitness journey or focusing on light to moderate strength training. With a weight range of 5 to 25 lbs, these dumbbells offer a user-friendly adjustment mechanism for seamless weight changes.",
    image: "https://images.unsplash.com/photo-1583454110545-d45c9d7b0d04",
    rating: 4.5,
    reviews: 123
  },
  {
    id: "costway-adjustable",
    name: "Costway Adjustable Dumbbell",
    price: 169.99,
    specifications: {
      Weight: "Adjustable from 5 to 25 lbs with 5 preset options for versatile training",
      Design: "Compact and sturdy design ensures durability and stability",
      Grip: "Textured handles provide a secure, slip-resistant grip",
      Storage: "Includes a space-saving tray for convenient storage"
    },
    highlights: {
      loves: [
        "Lightweight and compact design for ease of use",
        "Durable build ensures long-lasting performance",
        "Secure, ergonomic handles improve grip and control",
        "Tray keeps your gym organized and clutter-free"
      ],
      considers: [
        "Limited to a maximum weight of 25 lbs, unsuitable for heavy lifters",
        "Preset weight increments may lack fine-tuning options"
      ]
    },
    overview: "The Costway Adjustable Dumbbell is a practical option for beginners or those focusing on lighter strength training. With a weight range of 5 to 25 lbs, this dumbbell is easy to adjust, offering 5 preset weight options for versatile workouts. Its compact, sturdy design ensures stability during use.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    rating: 4.4,
    reviews: 98
  }
];
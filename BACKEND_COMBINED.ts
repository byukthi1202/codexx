# TripMind AI — Full Backend Server Code

```ts
/**
 * ========================================
 * TRIPMIND AI - FULL BACKEND SERVER
 * ========================================
 */

import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

// ========================================
// CONFIGURATION
// ========================================

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 3000;

// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================================
// STATIC FRONTEND
// ========================================

const staticPath =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "public")
    : path.join(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// ========================================
// MOCK DATABASE DATA
// ========================================

const trips = [
  {
    id: 1,
    destination: "Goa",
    travelers: 5,
    budget: 50000,
    duration: "5 Days",
  },
  {
    id: 2,
    destination: "Manali",
    travelers: 3,
    budget: 35000,
    duration: "4 Days",
  },
];

const destinations = [
  {
    id: 1,
    name: "Goa",
    weather: "Sunny",
    bestSeason: "November to February",
    famousFood: "Seafood",
  },
  {
    id: 2,
    name: "Manali",
    weather: "Cold",
    bestSeason: "October to March",
    famousFood: "Himachali Cuisine",
  },
  {
    id: 3,
    name: "Kerala",
    weather: "Tropical",
    bestSeason: "September to March",
    famousFood: "Sadya",
  },
];

// ========================================
// API ROUTES
// ========================================

// Health Check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "TripMind AI Server Running Successfully 🚀",
  });
});

// ========================================
// TRIPS API
// ========================================

app.get("/api/trips", (_req, res) => {
  res.status(200).json({
    success: true,
    data: trips,
  });
});

app.post("/api/trips", (req, res) => {
  const newTrip = {
    id: trips.length + 1,
    ...req.body,
  };

  trips.push(newTrip);

  res.status(201).json({
    success: true,
    message: "Trip created successfully",
    data: newTrip,
  });
});

// ========================================
// DESTINATIONS API
// ========================================

app.get("/api/destinations", (_req, res) => {
  res.status(200).json({
    success: true,
    data: destinations,
  });
});

// ========================================
// WEATHER API (MOCK)
// ========================================

app.get("/api/weather/:city", (req, res) => {
  const { city } = req.params;

  res.status(200).json({
    success: true,
    city,
    temperature: "28°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    advice: "Carry light cotton clothes and sunscreen.",
  });
});

// ========================================
// AI TRIP PLANNER API
// ========================================

app.post("/api/ai-plan", (req, res) => {
  const {
    destination,
    travelers,
    budget,
    travelStyle,
    days,
  } = req.body;

  const aiResponse = {
    destination,
    travelers,
    budget,
    travelStyle,
    days,

    itinerary: [
      {
        day: 1,
        title: "Arrival & Local Exploration",
        activities: [
          "Hotel Check-in",
          "Local sightseeing",
          "Family dinner",
        ],
      },
      {
        day: 2,
        title: "Adventure Activities",
        activities: [
          "Beach activities",
          "Shopping",
          "Local food tasting",
        ],
      },
    ],

    recommendations: {
      hotels: [
        "Grand Family Resort",
        "Budget Stay Inn",
      ],
      food: [
        "Local seafood",
        "Traditional cuisine",
      ],
      transport: [
        "Rental Car",
        "Private Taxi",
      ],
    },

    packingChecklist: [
      "Passport / ID",
      "Sunscreen",
      "Comfortable shoes",
      "Medicines",
      "Power bank",
    ],
  };

  res.status(200).json({
    success: true,
    message: "AI trip plan generated successfully ✨",
    data: aiResponse,
  });
});

// ========================================
// USERS API
// ========================================

app.get("/api/users", (_req, res) => {
  res.status(200).json({
    success: true,
    users: [
      {
        id: 1,
        name: "Ravi",
        role: "Traveler",
      },
    ],
  });
});

// ========================================
// ERROR HANDLING
// ========================================

app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

// ========================================
// FRONTEND ROUTING SUPPORT
// ========================================

app.use((_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// ========================================
// START SERVER
// ========================================

server.listen(PORT, () => {
  console.log(`🚀 TripMind AI running on port ${PORT}`);
  console.log(`🌍 http://localhost:${PORT}`);
});

// ========================================
// PACKAGE INSTALL COMMAND
// ========================================

/*

npm install express cors helmet morgan dotenv
npm install -D typescript ts-node @types/node @types/express @types/cors @types/morgan

*/

// ========================================
// PACKAGE.JSON SCRIPTS
// ========================================

/*

"scripts": {
  "dev": "ts-node server/index.ts",
  "start": "node dist/server/index.js",
  "build": "tsc"
}

*/

// ========================================
// ENV FILE (.env)
// ========================================

/*

PORT=3000
NODE_ENV=development

*/
```

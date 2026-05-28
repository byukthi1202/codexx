# TripMind AI — Complete Frontend Starter Code

```tsx
// ========================================
// FILE: src/main.tsx
// ========================================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ========================================
// FILE: src/App.tsx
// ========================================

import { Route, Switch } from "wouter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AIChatAssistant } from "./components/AIChatAssistant";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Destinations from "./pages/Destinations";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/planner" component={Planner} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/destinations" component={Destinations} />
      <Route path="/results" component={Results} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" switchable>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <Router />

        <Footer />

        <AIChatAssistant />
      </div>
    </ThemeProvider>
  );
}

// ========================================
// FILE: src/pages/Home.tsx
// ========================================

import { Link } from "wouter";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-blue-600 text-white px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-black mb-6 leading-tight">
            Plan Trips That Actually Fit Everyone ✈️
          </h1>

          <p className="text-xl opacity-90 mb-10">
            AI-powered group travel planning for families, friends,
            couples, seniors, and mixed-age travelers.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/planner">
              <button className="px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold hover:scale-105 transition-transform">
                Start Planning
              </button>
            </Link>

            <button className="px-8 py-4 rounded-2xl border border-white/40 backdrop-blur-md hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">🤖 AI Itinerary</h3>
            <p>
              Smart AI creates day-wise plans based on your group type.
            </p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">💰 Budget Friendly</h3>
            <p>
              Optimize travel costs with intelligent recommendations.
            </p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">🌦 Weather Aware</h3>
            <p>
              Avoid rainy-day disasters with weather-aware planning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// ========================================
// FILE: src/pages/Planner.tsx
// ========================================

import { useState } from "react";

export default function Planner() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-100">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Smart Trip Planner ✨
        </h1>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold hover:opacity-90 transition">
            Generate AI Trip
          </button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// FILE: src/pages/Dashboard.tsx
// ========================================

export default function Dashboard() {
  return (
    <div className="min-h-screen p-10 bg-slate-100">
      <h1 className="text-5xl font-bold mb-10">Dashboard 📊</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="font-bold text-xl mb-2">Upcoming Trips</h2>
          <p>3 Trips Planned</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="font-bold text-xl mb-2">Budget Tracker</h2>
          <p>$4,200 Remaining</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="font-bold text-xl mb-2">Weather Alerts</h2>
          <p>Rain expected in Goa ☔</p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// FILE: src/pages/Pricing.tsx
// ========================================

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
    },
    {
      name: "Pro",
      price: "$19",
    },
    {
      name: "Family",
      price: "$49",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <h1 className="text-5xl font-bold text-center mb-16">
        Pricing Plans 💎
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="p-10 rounded-3xl shadow-xl border text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{plan.name}</h2>
            <p className="text-5xl font-black mb-6">{plan.price}</p>

            <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold hover:opacity-90">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// FILE: src/pages/Destinations.tsx
// ========================================

export default function Destinations() {
  const places = ["Goa", "Manali", "Kerala", "Bali", "Paris"];

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-100">
      <h1 className="text-5xl font-bold text-center mb-16">
        Explore Destinations 🌍
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {places.map((place) => (
          <div
            key={place}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{place}</h2>
              <p className="text-slate-600">
                Discover amazing attractions and local experiences.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// FILE: src/pages/Results.tsx
// ========================================

export default function Results() {
  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <h1 className="text-5xl font-bold text-center mb-16">
        AI Trip Results ✨
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="p-8 rounded-3xl shadow-lg border">
          <h2 className="text-3xl font-bold mb-4">Day 1</h2>
          <p>Arrival, hotel check-in, local sightseeing.</p>
        </div>

        <div className="p-8 rounded-3xl shadow-lg border">
          <h2 className="text-3xl font-bold mb-4">Day 2</h2>
          <p>Adventure activities and local food tour.</p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// FILE: src/pages/NotFound.tsx
// ========================================

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-7xl font-black mb-4">404</h1>
        <p className="text-xl">Page Not Found</p>
      </div>
    </div>
  );
}

// ========================================
// FILE: src/index.css
// ========================================

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: sans-serif;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.gradient-text {
  background: linear-gradient(to right, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

// ========================================
// INSTALL PACKAGES
// ========================================

/*

npm install react react-dom wouter framer-motion lucide-react clsx tailwind-merge

npm install -D vite typescript tailwindcss postcss autoprefixer @vitejs/plugin-react

*/

// ========================================
// VITE CONFIG
// ========================================

/*

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

*/

// ========================================
// TAILWIND CONFIG
// ========================================

/*

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

*/
```

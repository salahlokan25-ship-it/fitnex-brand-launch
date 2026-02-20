import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppShowcase from "@/components/AppShowcase";
import { BarChart3, Target, Zap, Heart, Dumbbell, ListChecks, TrendingUp, Timer, MapPin, Flame, Clock, Activity } from "lucide-react";

import fitnescalGif from "@/assets/fitnescal-app.gif";
import dropsetGif from "@/assets/dropset-app.gif";
import runflowGif from "@/assets/runflow-app.gif";

const AppPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-16">
      {/* Page header */}
      <div className="text-center py-16">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-foreground">
          OUR <span className="text-gradient-blue">APPS</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mt-4 font-light">
          Three powerful tools to fuel every dimension of your fitness journey.
        </p>
      </div>

      {/* 1 — FitnexCal */}
      <AppShowcase
        label="Calorie Counter"
        title="MEET"
        titleAccent="FITNEXCAL"
        description="The calorie counter app that actually works — built for athletes, designed for results. Track smarter, eat better, perform harder."
        gifSrc={fitnescalGif}
        features={[
          { icon: BarChart3, title: "Smart Macro Tracking", desc: "AI-powered food recognition for calories, protein, carbs & fat." },
          { icon: Target, title: "Body Visualizer", desc: "See your body transform in real-time as you hit nutrition goals." },
          { icon: Zap, title: "Instant Barcode Scan", desc: "Scan any food label and log it in under 2 seconds. 5M+ foods." },
          { icon: Heart, title: "100% Free", desc: "Full premium features, zero paywalls. Fully unlocked." },
        ]}
      />

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-border/30" />

      {/* 2 — Dropset */}
      <AppShowcase
        label="Gym Tracker"
        title="TRAIN WITH"
        titleAccent="DROPSET"
        description="Track every set, rep, and PR. Dropset is your intelligent gym companion that adapts to your workout style and pushes you further."
        gifSrc={dropsetGif}
        reversed
        features={[
          { icon: Dumbbell, title: "Exercise Library", desc: "500+ exercises with animations and muscle-group targeting." },
          { icon: ListChecks, title: "Smart Routines", desc: "Auto-generate workout plans based on your goals and schedule." },
          { icon: TrendingUp, title: "Progress Analytics", desc: "Visualize strength gains, volume trends, and personal records." },
          { icon: Timer, title: "Rest Timer", desc: "Built-in smart rest timer that adapts to your training intensity." },
        ]}
      />

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-border/30" />

      {/* 3 — Runflow */}
      <AppShowcase
        label="Running Tracker"
        title="RUN WITH"
        titleAccent="RUNFLOW"
        description="Track distance, pace, time, and calories burned every run. Runflow turns every session into data-driven progress."
        gifSrc={runflowGif}
        features={[
          { icon: MapPin, title: "GPS Route Tracking", desc: "Real-time GPS mapping of your running route with elevation data." },
          { icon: Flame, title: "Calorie Calculator", desc: "Precise calorie burn estimation based on pace, weight & terrain." },
          { icon: Clock, title: "Pace & Splits", desc: "Live pace tracking with per-km splits and finish time predictions." },
          { icon: Activity, title: "Session History", desc: "Full log of every run with distance, time, and performance trends." },
        ]}
      />
    </div>
    <Footer />
  </div>
);

export default AppPage;

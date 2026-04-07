"use client";

import { useState, useEffect } from "react";
import Navbar from "./navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import TechnologiesSection from "./TechnologiesSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Sidebar from "./sidebar";
import CustomCursor from "@/components/shared/cursor";
import Loader from "@/components/shared/loader";
import Customizer from "@/components/shared/customizer";
import { FloatingNav } from "@/components/shared/floating-nav";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-bg">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="animate-in fade-in duration-1000">
          <CustomCursor />
          <Customizer />
          <FloatingNav />
          <Navbar />
          <Sidebar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <TechnologiesSection />
          <ProjectsSection />
          <EducationSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
}

import HeroSection from "./HeroSection";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full p-10">
      <Navbar />
      <Sidebar />
      {/* ========== */}
      <HeroSection />
    </div>
  );
}

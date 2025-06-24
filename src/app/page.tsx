// pages/index.tsx
import Navbar from "@/app/components/Navbar"
import HeroSection from "@/app/components/HeroSection"
import SkillsSection from "./components/SkillsSection"
import ServicesSection from "./components/ServicesSection"
import PortfolioSection from "./components/PortfolioSection"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import AchievementsSection from "./components/AchievementsSection"
import BlogSection from "./components/BlogSection"
import TimeLineSection from "./components/TimeLineSection"

export default function Home() {
  return (
<main className="min-h-screen text-white font-sans" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimeLineSection />
        <ServicesSection />
        <AchievementsSection/>
        <PortfolioSection />
        <BlogSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </main>
  )
}

// pages/index.tsx
"use client";
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
import Head from "next/head"

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (

<>
     <Head>
        <title>Komal Kharkwal | Frontend Developer</title>
        <meta name="description" content="I'm Komal Kharkwal, a web developer and UI/UX designer passionate about creating stunning and intuitive digital experiences. I blend clean, efficient code with thoughtful design to ensure both functionality and user satisfaction in every project I build." />
        <meta name="keywords" content="Komal Kharkwal, Abhiko, Abhishek Kumar Majumdar, Frontend Developer, UI UX, AR" />
        <meta property="og:image" content="../public/Asset/Logo.png" />
      </Head>
      
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
    </>
  )
}

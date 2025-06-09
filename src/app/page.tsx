"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Navbar from "./components/Navbar/Navbar";
import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";
import { LatestShorts } from './components/youtube';
import { MarqueeDemo } from './components/FeedbackCarosel.jsx';
import Footer from "./components/Footer";
import CuriosityLogo from "../../public/Curiosity logo.png";
import Services from './components/Services';

// Pages/Sections
import { Founders } from './components/Founders';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Content data
const aboutUs = "At Curiosity, we are dedicated to igniting the inquisitive spirit within every learner and innovator. As a parent company to various educational and product-based platforms, our mission is to be a catalyst for shaping the future of our tech-savvy nation while staying rooted in our rich cultural heritage. We believe that advancements in technology and our ancient culture can go hand in hand, creating a unique blend of innovation and tradition. Join us as we foster a generation of thinkers and creators, committed to making a meaningful impact on the world.";

const projects = [
  {
    title: "Pravi",
    description: "Pravi, embodying the essence of mindfulness like a focused river carving through mountains, nurtures young minds under Curiosity's guidance. We channel curiosity into mindful innovation, teaching the importance of Intellectual Property Rights. Through our programs, we cultivate growth and development, empowering our champs to navigate the future with wisdom and creativity, transforming their ideas into lasting legacies.",
    link: "/pravi",
    learnmore: true,
    img: "/Logo.png"
  },
 
];

export default function Home() {
  // Starter page states
  const [showStarterPage, setShowStarterPage] = useState(true);
  const [starterPageOpacity, setStarterPageOpacity] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(0);
  
  // Create refs for each section
  const homeRef = useRef(null);
  const youtubeRef = useRef(null);
  const marqueeRef = useRef(null);
  const foundersRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  useEffect(() => {
    // Fade out starter page after 2 seconds
    const fadeOutTimeout = setTimeout(() => {
      setStarterPageOpacity(0);
    }, 2000);

    // Hide starter page and fade in content after animation completes
    const transitionTimeout = setTimeout(() => {
      setShowStarterPage(false);
      setContentOpacity(1);
      
      // Initialize GSAP animations after starter page transition
      initGSAPAnimations();
    }, 100); // 2000 + 500ms for the fade out animation

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(transitionTimeout);
    };
  }, []);

  const initGSAPAnimations = () => {
    // Set initial state with GSAP
    const sections = [
      homeRef.current,
      youtubeRef.current,
      marqueeRef.current,
      foundersRef.current,
      aboutUsRef.current,
      contactUsRef.current
    ];

    // Set initial state
    gsap.set(sections.filter(Boolean), { opacity: 0, y: 50 });

    // Create animations array for cleanup
    const animations : any = [];

    // Helper function to create animations
    const createAnimation = (ref : any, y = 50) => {
      if (!ref.current) return;
      
      const anim = gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reset",
          markers: false // Set to true for debugging
        }
      });
      animations.push(anim);
    };

    // Create animations for each section
    createAnimation(homeRef, 20);
    createAnimation(youtubeRef);
    createAnimation(marqueeRef);
    createAnimation(foundersRef);
    createAnimation(aboutUsRef);
    createAnimation(contactUsRef);

    // Cleanup function
    return () => {
      animations.forEach(anim => {
        anim.scrollTrigger?.kill();
        anim.kill();
      });
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.refresh();
    };
  };

  return (
    <>
      {showStarterPage && (
        <div
          className='startPage min-h-screen bg-black flex flex-row items-center justify-center'
          style={{
            opacity: starterPageOpacity,
            transition: 'opacity 500ms ease-in-out',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999
          }}
        >
          <div className="logo">
            <Image src={CuriosityLogo} alt="logo" />
          </div>
        </div>
      )}

      <div
        style={{
          opacity: contentOpacity,
          transition: 'opacity 500ms ease-in-out',
        }}
      >
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
          <Navbar />
          
          {/* <ShootingStars />
          <StarsBackground /> */}
          
          <div
            ref={homeRef}
            className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-red-950"
          >
            {/* This is home page */}
            <LatestShorts />
          </div>
          <div className="flex justify-center items-center">
            <Services array={projects} Heading="Services" />
          </div>
          <div ref={aboutUsRef}>
            <AboutUs />
          </div>
          <div ref={marqueeRef}>
            <MarqueeDemo />
          </div>

          <div ref={foundersRef}>
            <Founders />
          </div>

       

          <div ref={contactUsRef}>
            <ContactUs />
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}
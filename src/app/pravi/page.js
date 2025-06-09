import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import HeroSection from '../components/heroSection.tsx'
import WhyPravi from '../components/Advantages'
import AboutUsP from '../components/AboutUsPravi'
import ParviLogo from '../../../public/Logo.png'
import Projects from "../components/projects2"
import Catalogue from '../components/Catalogue.tsx'
import Image from 'next/image'
import Footer from '../components/Footer'
// import Feedback from '../components/FeedbackCrausal'

const aboutUs = "At Pravi, we are dedicated to sparking the inquisitive spirit within every learner. Our mission is to transform passive content consumers into active creators and innovators through hands-on education in cutting-edge fields like IoT and robotics. By emphasizing intellectual property rights, we empower students to protect and monetize their innovative ideas, paving the way for a brighter, technology-driven future. Join us in fostering a generation of curious minds ready to shape the world."

const projects = [
  {
    title: "Free public seminar",
    description: "Seminar on latest trends on robotics and drones",
    link: "/parvi",
  },
  {
    title: "HandsOn Training With Take Away Kits",
    description: "Training By Gurus Experienced from DIAT-DRDO",
    link: "/parvi",
  },
  {
    title: "Aimed to file 100+ patents/ copyrights",
    description: "We aim to file 100+ patents/ copyriights by 2025 for middle school champs.",
    link: "/parvi",
  },
  {
    title: "Monetize your innovative tool",
    description: "Platform for champs to monitize patented copyrighted Ideas Manufacturing Provided by Pravi, with upto 20% royalty provided for champs",
    link: "/parvi",
  },
  {
    title: "Appraisal By Pravi",
    description: "Our single batch consist of 20 students out of which top 5 students provided 100% refund",
    link: "/parvi",
  },
  {
    title: "Course Ke Sath Bhi Course Ke Baad Bhi",
    description: "Patents/ Copyrights last a lifetime preserving the values of ideas. We Generate Student Id that can be used for seemless support by our techsavy team upto 6 month after enrollment.",
    link: "/parvi",
  },
]

const Parvi=()=> {
  return (
    <div>
      <Navbar />
      <HeroSection title="Pravi" content="We don't teach, We Educate" />
      <AboutUsP description={aboutUs} url={ParviLogo}  btnTitle="Learn More About Us" />
     <WhyPravi/>
      <Catalogue />
      {/* <Feedback /> */}
      <Projects />
      <Footer />
    </div>
  )
}

export default Parvi
'use client'
import { motion } from "framer-motion";

const whyPraviData = [
  {
    title: "Free public seminar",
    description: "Seminar on latest trends on robotics and drones.",
    position: "top",
  },
  {
    title: "Free public seminar",
    description: "Seminar on latest trends on robotics and drones.",
    position: "top",
  },
  {
    title: "Free public seminar",
    description: "Seminar on latest trends on robotics and drones.",
    position: "top",
  },
  {
    title: "Hands-On Training With Take Away Kits",
    description: "Training By Gurus Experienced from DIAT-DRDO.",
    position: "bottom",
  },
  {
    title: "Appraisal By Pravi",
    description:
      "Our single batch consists of 20 students out of which top 5 students provided 100% refund.",
    position: "bottom",
  },
  {
    title: "Course Ke Sath Bhi Course Ke Baad Bhi",
    description:
      "Patents/ Copyrights last a lifetime preserving the values of ideas. We generate Student Id that can be used for seamless support by our techsay team up to 6 months after enrollment.",
    position: "bottom",
  },
];

const WhyPraviCard = ({ title, description, position }) => (
  <motion.div
    initial={{ opacity: 0, y: position === "top" ? -50 : 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl backdrop-blur-sm border border-gray-700 hover:border-red-500 transition-all duration-300"
  >
    <h3 className="text-xl font-bold mb-3 text-red-400">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const WhyPravi = () => {
  const topItems = whyPraviData.filter((item) => item.position === "top");
  const bottomItems = whyPraviData.filter((item) => item.position === "bottom");

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-red-950 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center w-full">
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full px-4">
          {topItems.map((item, index) => (
            <WhyPraviCard
              key={`top-${index}`}
              {...item}
              position="top"
            />
          ))}
        </div>

        {/* Center Circle */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-48 h-48 bg-gradient-to-br from-red-950 to-black rounded-full flex flex-col justify-center items-center shadow-2xl z-10 my-12"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Why Pravi?</h2>
          {/* <span className="text-gray-200 text-sm">Innovation Through Education</span> */}
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full px-4">
          {bottomItems.map((item, index) => (
            <WhyPraviCard
              key={`bottom-${index}`}
              {...item}
              position="bottom"
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default WhyPravi;
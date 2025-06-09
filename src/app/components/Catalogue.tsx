'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    id: "1",
    imageUrl: "/Abhimanyu kit.png",
    title: "Abhimanyu Trainer Kit",
    description:
      "Our takeaway Abhimanyu training kit is designed to educate your champ with complete knowledge of technology. Not just to get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation",
    url: "/Abhimanyu.pdf",
  },
  {
    id: "2",
    imageUrl: "/Eklavya Bot.png",
    title: "Eklavya Bot Training Kit",
    description:
      "Our takeaway Eklavya Bot training kit is designed to empower your champ with the skills to control technology through gestures. Just as Eklavya mastered archery with unwavering dedication and ingenuity, your champ will learn to command the Eklavya Bot using a mobile app, transforming their innovative ideas into reality with precision and confidence. This kit instills not only technical prowess but also the spirit of determination and creativity, enabling them to achieve mastery in the realm of robotics.",
    url: "/Eklavya.pdf",
  },
  {
    id: "3",
    imageUrl: "/Vayuputra.png",
    title: "Vayuputra workshop",
    description:
      "Inspired by the legendary Hanuman, the Vayu Putra Drone Workshop teaches your champ to build and fly drones with agility and precision. Just as Hanuman mastered the skies, your champ will learn drone technology and navigation, combining innovation with hands-on experience. The workshop includes a comprehensive kit to enhance their learning journey.",
    url: "/Vayuputra.pdf",
  },
  {
    id: "4",
    imageUrl: "/vayuputraSeminar.jpg",
    title: "Vayuputra Seminar",
    description:
      "Inspired by the legendary Hanuman, the Vayu Putra Seminar introduces your champ to the world of drones. In this seminar, they will learn about the science of drones, their parts, how they fly, and important safety regulations. Like Hanuman mastering the skies, your champ will gain foundational knowledge and skills to navigate and control drones confidently.",
    url: "/Vayuputra.pdf",
  },
  {
    id: "5",
    imageUrl: "/Cyberyodha.png",
    title: "Cyber Yodha Seminar",
    description:
      "Our Cyber Yodha Seminar is designed to transform your champ into a vigilant guardian of the digital world. Inspired by the legendary warriors of ancient times, this seminar equips them with the knowledge and skills to navigate cyberspace safely and smartly. Your champ will learn to protect themselves from digital threats, manage their online presence, and emerge as a confident and responsible digital citizen.",
    url: "/CyberYoddha.pdf",
  },
  {
    id: "6",
    imageUrl: "/Teachers.png",
    title: "Teachers Training Program",
    description:
      "Our Teachers Training Program empowers educators to inspire the next generation of innovators. Through comprehensive training in robotics, drones, and cybersecurity, we equip teachers with the latest knowledge and skills. This program ensures educators can confidently deliver cutting-edge education, fostering curiosity and technological proficiency in their classrooms.",
    url: "",
  },
];

const Catalogue = () => {
  return (
    <div className="bg-gradient-to-b from-black via-red-950 to-black min-h-screen p-5">
      <h1 className="text-4xl text-center text-white py-5">Catalogue</h1>
      <div className="flex flex-col gap-8 items-center">
        {sections.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row w-full lg:w-5/6 justify-center items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-1 w-full flex justify-center items-center">
              <div className="w-full flex justify-center items-center h-auto rounded-lg overflow-hidden">
                <Image
                  className="w-full md:w-3/4 rounded-lg"
                  src={item.imageUrl}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="flex-1 justify-center text-white mt-4 md:mt-0 md:px-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-200 leading-8 text-lg xl:w-3/4 mt-2">
                {item.description}
              </p>
              {item.url && (
                <div className="mt-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold bg-gray-700 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-gray-800"
                  >
                    Download PDF
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;

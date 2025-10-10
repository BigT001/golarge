'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLightbulb, FaGlobe, FaCrown, FaChurch } from 'react-icons/fa';

const VisionMission = () => {
  const [activeCard, setActiveCard] = useState<'vision' | 'mission'>('vision');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = {
    vision: {
      title: 'Our Vision',
      icon: FaCrown,
      color: '#002a5c',
      accent: '#dc3545',
      statement: "To raise a generation of Kingdom-minded leaders who transform nations through prophetic insight and intercession for future generations — repairing broken cities, rebuilding destinies, and revealing God's glory in every sphere of influence.",
      quote: "Empowering Kingdom leaders to see prophetically, lead purposefully, and transform generations.",
      pillars: [
        { title: 'Kingdom Leadership', icon: FaCrown },
        { title: 'Prophetic Insight', icon: FaLightbulb },
        { title: 'Global Impact', icon: FaGlobe },
        { title: 'Divine Purpose', icon: FaChurch },
      ]
    },
    mission: {
      title: 'Our Mission',
      icon: FaGlobe,
      color: '#dc3545',
      accent: '#002a5c',
      statement: "To empower believers to discover their divine assignment, cultivate prophetic understanding, and intercede for generational transformation. Through teaching, leadership development, and apostolic movements, we equip Kingdom leaders to restore broken systems, influence culture, and manifest God's glory in every nation.",
      points: [
        { title: "Divine Assignment", desc: "" },
        { title: "Prophetic Understanding", desc: "" },
        { title: "Leadership Development", desc: "" },
        { title: "Cultural Transformation", desc: "" }
      ]
    }
  };
  // Motion variants
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.25 } }
  };

  return (
    <section className="relative py-10 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-8xl mx-auto mt-6 sm:mt-10">
          {/* Floating Cards Layout */}
          <motion.div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 items-start" variants={containerVariants} initial="hidden" animate="show">
            {/* Vision Card */}
            <motion.div className={`w-full lg:w-[49%] cursor-pointer ${activeCard === 'vision' ? 'opacity-100' : 'opacity-85'}`} onClick={() => setActiveCard('vision')} variants={cardVariants} whileHover="hover">
              <div className={`relative bg-white/95 rounded-3xl shadow-2xl p-6 lg:p-8 border-t-4 ${activeCard === 'vision' ? 'border-[#002a5c]' : 'border-transparent'}`}>
                {/* Decorative soft gradient circle */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#002a5c] to-[#dc3545] opacity-8 blur-3xl" />
                <div className="max-h-[320px] lg:max-h-[300px] overflow-auto pr-3">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-full bg-[#002a5c] text-white flex items-center justify-center shadow-md">
                    <FaCrown size={24} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002a5c]">Our Vision</h2>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                    {cards.vision.statement}
                  </p>

                  <div className="bg-[#002a5c] text-white p-4 rounded-xl mb-6">
                    <p className="text-lg sm:text-xl font-medium italic">
                      "{cards.vision.quote}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {cards.vision.pillars.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <motion.div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors shadow-sm" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.08 }} whileHover={{ x: 4 }}>
                          <div className="text-[#dc3545]">
                            <Icon size={22} />
                          </div>
                          <span className="font-semibold text-[#002a5c] text-lg">{pillar.title}</span>
                        </motion.div>
                      );
                    })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div className={`w-full lg:w-[49%] cursor-pointer ${activeCard === 'mission' ? 'opacity-100' : 'opacity-85'}`} onClick={() => setActiveCard('mission')} variants={cardVariants} whileHover="hover">
              <div className={`relative bg-white/95 rounded-3xl shadow-2xl p-6 lg:p-8 border-t-4 ${activeCard === 'mission' ? 'border-[#dc3545]' : 'border-transparent'}`}>
                <div className="pointer-events-none absolute -top-10 -left-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#dc3545] to-[#002a5c] opacity-8 blur-3xl" />
                <div className="max-h-[320px] lg:max-h-[300px] overflow-auto pr-3">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-full bg-[#dc3545] text-white flex items-center justify-center shadow-md">
                      <FaGlobe size={24} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002a5c]">Our Mission</h2>
                  </div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                      {cards.mission.statement}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {cards.mission.points.map((point, index) => (
                        <motion.div key={index} className="p-4 rounded-lg bg-gradient-to-br from-[#002a5c] to-[#003a7c] text-white shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.08 }} whileHover={{ scale: 1.03 }}>
                          <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                          <p className="text-gray-200 text-sm">{point.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
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

  return (
    <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Floating Cards Layout */}
          <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6">
            {/* Vision Card */}
            <motion.div
              className={`w-full lg:w-1/2 cursor-pointer transform transition-all duration-500 ${
                activeCard === 'vision' ? 'scale-100' : 'scale-[0.98] opacity-70'
              }`}
              onClick={() => setActiveCard('vision')}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`bg-white rounded-2xl shadow-xl p-8 border-t-4 ${
                  activeCard === 'vision' ? 'border-[#002a5c]' : 'border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-full bg-[#002a5c] text-white">
                    <FaCrown size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#002a5c]">Our Vision</h2>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {cards.vision.statement}
                  </p>
                  
                  <div className="bg-[#002a5c] text-white p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                    <p className="text-base sm:text-lg font-medium italic">
                      "{cards.vision.quote}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {cards.vision.pillars.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className="text-[#dc3545]">
                            <Icon size={20} />
                          </div>
                          <span className="font-semibold text-[#002a5c]">{pillar.title}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className={`w-full lg:w-1/2 cursor-pointer transform transition-all duration-500 ${
                activeCard === 'mission' ? 'scale-100' : 'scale-[0.98] opacity-70'
              }`}
              onClick={() => setActiveCard('mission')}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`bg-white rounded-2xl shadow-xl p-8 border-t-4 ${
                  activeCard === 'mission' ? 'border-[#dc3545]' : 'border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-full bg-[#dc3545] text-white">
                    <FaGlobe size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#002a5c]">Our Mission</h2>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    {cards.mission.statement}
                  </p>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {cards.mission.points.map((point, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-lg bg-gradient-to-br from-[#002a5c] to-[#003a7c] text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                        <p className="text-gray-200 text-sm">{point.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
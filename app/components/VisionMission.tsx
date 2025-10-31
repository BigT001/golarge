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
      statement:
        "To raise a generation of Kingdom-minded leaders who transform nations through prophetic insight and intercession for future generations — repairing broken cities, rebuilding destinies, and revealing God's glory in every sphere of influence.",
      quote:
        'Empowering Kingdom leaders to see prophetically, lead purposefully, and transform generations.',
      pillars: [
        { title: 'Kingdom Leadership', icon: FaCrown },
        { title: 'Prophetic Insight', icon: FaLightbulb },
        { title: 'Global Impact', icon: FaGlobe },
        { title: 'Divine Purpose', icon: FaChurch },
      ],
    },
    mission: {
      title: 'Our Mission',
      icon: FaGlobe,
      color: '#dc3545',
      accent: '#002a5c',
      statement:
        "To empower believers to discover their divine assignment, cultivate prophetic understanding, and intercede for generational transformation. Through teaching, leadership development, and apostolic movements, we equip Kingdom leaders to restore broken systems, influence culture, and manifest God's glory in every nation.",
      points: [
        { title: 'Divine Assignment', desc: '' },
        { title: 'Prophetic Understanding', desc: '' },
        { title: 'Leadership Development', desc: '' },
        { title: 'Cultural Transformation', desc: '' },
      ],
    },
  };

  // Motion variants
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.25 } },
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* ======= UPDATED HEADER SECTION ======= */}
        <div className="text-center max-w-3xl mx-auto mb-8 relative">
          {/* decorative blurred orb behind heading */}
          <div className="pointer-events-none -z-10 absolute inset-0 flex justify-center items-start">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#002a5c]/20 via-[#dc3545]/15 to-[#002a5c]/20 blur-3xl translate-y-6" />
          </div>

          {/* oversized subtle quote mark */}
          <span className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2 text-[110px] sm:text-[140px] md:text-[180px] text-[#dc3545] opacity-8 font-extrabold">“</span>

          <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#002a5c] via-[#dc3545] to-[#002a5c] bg-clip-text text-transparent animate-gradient-x leading-tight drop-shadow-md">
            Vision &amp; Mission
          </h2>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Empowering Kingdom leaders to see prophetically, lead purposefully,
            and transform generations.
          </p>
        </div>
        {/* ======= END HEADER SECTION ======= */}

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          variants={containerVariants}
          initial="show"
          animate="show"
        >
          {/* Vision Card */}
          <motion.article
            onClick={() => setActiveCard('vision')}
            className={`group cursor-pointer relative rounded-3xl bg-gradient-to-br from-white to-gray-50 p-6 lg:p-8 shadow-lg border-t-4 ${
              activeCard === 'vision'
                ? 'border-[#002a5c]'
                : 'border-transparent'
            } focus:outline-none`}
            variants={cardVariants}
            whileHover="hover"
            aria-labelledby="vision-title"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setActiveCard('vision');
            }}
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br from-[#002a5c] to-[#dc3545] opacity-20 blur-3xl pointer-events-none" />

            <div>
              <div className="md:float-left md:mr-6 md:mb-0 mr-0 mb-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#002a5c] text-white rounded-lg shadow-sm">
                <FaCrown size={20} aria-hidden="true" />
              </div>
              <div>
                <h3
                  id="vision-title"
                  className="text-2xl font-bold text-[#062b4a]"
                >
                  {cards.vision.title}
                </h3>
                <p className="mt-0 text-gray-700 leading-relaxed">
                  {cards.vision.statement}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="mt-6"
            >
              <div className="grid grid-cols-2 gap-3">
                {cards.vision.pillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.14 + i * 0.06 }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-md text-red-600">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {pillar.title}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.article>

          {/* Mission Card */}
          <motion.article
            onClick={() => setActiveCard('mission')}
            className={`group cursor-pointer relative rounded-3xl bg-gradient-to-br from-white to-gray-50 p-6 lg:p-8 shadow-lg border-t-4 ${
              activeCard === 'mission'
                ? 'border-[#dc3545]'
                : 'border-transparent'
            } focus:outline-none`}
            variants={cardVariants}
            whileHover="hover"
            aria-labelledby="mission-title"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setActiveCard('mission');
            }}
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-br from-[#dc3545] to-[#002a5c] opacity-20 blur-3xl pointer-events-none" />

            <div>
              <div className="md:float-left md:mr-6 md:mb-0 mr-0 mb-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#dc3545] text-white rounded-lg shadow-sm">
                <FaGlobe size={20} aria-hidden="true" />
              </div>
              <div>
                <h3
                  id="mission-title"
                  className="text-2xl font-bold text-[#062b4a]"
                >
                  {cards.mission.title}
                </h3>
                <p className="mt-0 text-gray-700 leading-relaxed">
                  {cards.mission.statement}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="mt-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cards.mission.points.map((point, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-lg bg-gradient-to-br from-[#062b4a] to-[#003a7c] text-white shadow-md hover:scale-102 transition-transform"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 + i * 0.06 }}
                  >
                    <h4 className="font-bold text-sm">{point.title}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.article>
        </motion.div>
      </div>

      {/* ====== GRADIENT ANIMATION STYLES ====== */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default VisionMission;

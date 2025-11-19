'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users } from 'lucide-react';
import { SiReact, SiPython, SiNodedotjs, SiDocker, SiMongodb, SiPostgresql, SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango, SiFigma, SiAmazon } from 'react-icons/si';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '100+', label: 'Projects Delivered' },
    { icon: Sparkles, value: '5+', label: 'Years Experience' },
  ];

  // Tech icons for floating animation
  const techIcons = [
    { Icon: SiReact, color: '#61DAFB', x: '10%', y: '15%', duration: 8 },
    { Icon: SiPython, color: '#3776AB', x: '85%', y: '20%', duration: 10 },
    { Icon: SiNodedotjs, color: '#339933', x: '15%', y: '75%', duration: 9 },
    { Icon: SiDocker, color: '#2496ED', x: '80%', y: '70%', duration: 11 },
    { Icon: SiMongodb, color: '#47A248', x: '5%', y: '45%', duration: 7 },
    { Icon: SiPostgresql, color: '#4169E1', x: '90%', y: '45%', duration: 12 },
    { Icon: SiTypescript, color: '#3178C6', x: '20%', y: '30%', duration: 10 },
    { Icon: SiNextdotjs, color: '#000000', x: '75%', y: '85%', duration: 9 },
    { Icon: SiTailwindcss, color: '#06B6D4', x: '12%', y: '60%', duration: 11 },
    { Icon: SiDjango, color: '#092E20', x: '88%', y: '30%', duration: 8 },
    { Icon: SiFigma, color: '#F24E1E', x: '25%', y: '85%', duration: 10 },
    { Icon: SiAmazon, color: '#FF9900', x: '70%', y: '10%', duration: 9 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-pink-50/20 pt-24 pb-16">
      {/* Animated Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ 
              left: tech.x, 
              top: tech.y,
              opacity: 0.08
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: tech.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
          >
            <tech.Icon 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" 
              style={{ color: tech.color }}
            />
          </motion.div>
        ))}
      </div>

      {/* Diagonal Lines Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[200%] w-px bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"
            style={{ 
              left: `${(i + 1) * 6.66}%`,
              transform: 'rotate(25deg)',
              transformOrigin: 'top left'
            }}
          />
        ))}
      </div>

      {/* Color Blur Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full filter blur-[120px] opacity-20"
          style={{ backgroundColor: 'var(--primary)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-20 w-96 h-96 rounded-full filter blur-[120px] opacity-15"
          style={{ backgroundColor: 'var(--secondary)' }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-64 h-64 bg-purple-400 rounded-full filter blur-[100px] opacity-10"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 font-lato text-white" style={{ backgroundColor: 'var(--primary)' }}>
              🚀 Welcome to Exeyezone
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span style={{ color: 'var(--secondary)' }}>Crafting Digital</span>
            <span style={{ color: 'var(--primary)' }}> Excellence</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-600 font-lato mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We transform ideas into powerful digital solutions. From cutting-edge software to stunning designs, we bring your vision to life with precision and creativity.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <stat.icon className="w-7 h-7 mx-auto mb-2" style={{ color: 'var(--primary)' }} />
                <div className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm font-lato text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

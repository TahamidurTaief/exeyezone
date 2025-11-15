'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '100+', label: 'Projects Delivered' },
    { icon: Sparkles, value: '5+', label: 'Years Experience' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-pink-50/20 pt-24 pb-16">
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
          className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--primary)] rounded-full filter blur-[120px] opacity-20"
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
          className="absolute top-1/2 -left-20 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[120px] opacity-15"
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
            <span className="inline-block px-4 py-2 bg-[#FFEEEF] text-[var(--primary)] rounded-full text-sm font-semibold mb-4">
              🚀 Welcome to Exeyezone
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[var(--secondary)]">Crafting Digital</span>
            <span className="text-[var(--primary)]"> Excellence</span>
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
                <stat.icon className="w-7 h-7 text-[var(--primary)] mx-auto mb-2" />
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

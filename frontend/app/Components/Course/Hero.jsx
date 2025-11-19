'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Users, TrendingUp } from 'lucide-react';
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiDocker, SiAmazon, SiMongodb, SiPostgresql, SiTypescript } from 'react-icons/si';

const Hero = ({ totalCourses = 25 }) => {
  const stats = [
    { icon: BookOpen, value: `${totalCourses}+`, label: 'Professional Courses' },
    { icon: Users, value: '1000+', label: 'Happy Students' },
    { icon: Award, value: '95%', label: 'Success Rate' },
  ];

  // Education & Tech related icons for floating animation
  const techIcons = [
    { Icon: SiPython, color: '#3776AB', x: '8%', y: '12%', duration: 9 },
    { Icon: SiJavascript, color: '#F7DF1E', x: '88%', y: '18%', duration: 11 },
    { Icon: SiReact, color: '#61DAFB', x: '12%', y: '72%', duration: 10 },
    { Icon: SiNodedotjs, color: '#339933', x: '85%', y: '68%', duration: 8 },
    { Icon: SiHtml5, color: '#E34F26', x: '6%', y: '42%', duration: 12 },
    { Icon: SiCss3, color: '#1572B6', x: '92%', y: '46%', duration: 9 },
    { Icon: SiTypescript, color: '#3178C6', x: '18%', y: '28%', duration: 10 },
    { Icon: SiGit, color: '#F05032', x: '78%', y: '82%', duration: 11 },
    { Icon: SiDocker, color: '#2496ED', x: '15%', y: '58%', duration: 8 },
    { Icon: SiMongodb, color: '#47A248', x: '82%', y: '35%', duration: 10 },
    { Icon: SiPostgresql, color: '#4169E1', x: '24%', y: '85%', duration: 9 },
    { Icon: SiAmazon, color: '#FF9900', x: '72%', y: '8%', duration: 11 },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 pt-20 pb-12">
      {/* Animated Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ 
              left: tech.x, 
              top: tech.y,
              opacity: 0.07
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: tech.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4
            }}
          >
            <tech.Icon 
              className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20" 
              style={{ color: tech.color }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full opacity-20"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"
            style={{ 
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Color Blur Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full filter blur-[100px] opacity-25"
          style={{ backgroundColor: 'var(--primary)' }}
          animate={{
            x: [0, 40, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-16 w-80 h-80 rounded-full filter blur-[100px] opacity-20"
          style={{ backgroundColor: 'var(--secondary)' }}
          animate={{
            x: [0, -25, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-8 right-1/3 w-56 h-56 bg-purple-400 rounded-full filter blur-[90px] opacity-15"
          animate={{
            x: [0, 35, 0],
            y: [0, -35, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 font-lato text-white" style={{ backgroundColor: 'var(--primary)' }}>
              <GraduationCap className="w-4 h-4" />
              Start Your Learning Journey
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-raleway mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span style={{ color: 'var(--primary)' }}>Master New Skills</span>
            <br />
            <span style={{ color: 'var(--secondary)' }}>Transform Your Career</span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-gray-600 font-lato mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Unlock your potential with our expertly crafted courses. From programming to design, 
            gain the skills you need to succeed in today's digital world.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50"
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 mx-auto mb-2" style={{ color: 'var(--primary)' }} />
                <div className="text-xl md:text-2xl lg:text-3xl font-bold font-poppins text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm font-lato text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

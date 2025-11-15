'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award, HeartHandshake, TrendingUp, GitBranch, GitMerge, GitCommit } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: Shield, title: 'Quality Assurance', description: 'Highest standards with rigorous testing processes.', color: '#10B981' },
    { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality.', color: '#F59E0B' },
    { icon: Users, title: 'Expert Team', description: 'Skilled professionals with years of experience.', color: '#3B82F6' },
    { icon: Award, title: 'Proven Track Record', description: '100+ successful projects delivered worldwide.', color: '#8B5CF6' },
    { icon: HeartHandshake, title: 'Client-Centric', description: 'Your success is our priority every step.', color: '#EF4444' },
    { icon: TrendingUp, title: 'Scalable Solutions', description: 'Solutions that grow with your business.', color: '#06B6D4' },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway mb-4 md:mb-6">
            <span className="text-[var(--secondary)]">Why Choose</span> <span className="text-[var(--primary)]">Us</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        {/* Git-style workflow visualization */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--secondary)', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
                {/* Connecting paths - version control style */}
                <motion.path
                  d="M 16.666% 50% Q 33.333% 50%, 33.333% 50% T 50% 50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 50% 50% Q 66.666% 50%, 66.666% 50% T 83.333% 50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200/50 hover:border-[var(--primary)]/30 group">
                    {/* Git-style commit marker */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:block">
                      <motion.div
                        className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                        style={{ backgroundColor: reason.color }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    {/* Branch indicator */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <GitBranch className="w-8 h-8" style={{ color: reason.color }} />
                    </div>

                    {/* Icon with gradient background */}
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${reason.color}15` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20" />
                      <reason.icon 
                        className="w-7 h-7 md:w-8 md:h-8 relative z-10" 
                        style={{ color: reason.color }}
                      />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold font-raleway text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 font-lato text-xs md:text-sm leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Commit hash style decoration */}
                    <div className="mt-4 pt-3 border-t border-gray-200/50">
                      <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400">
                        <GitCommit className="w-3 h-3" />
                        <span className="font-mono">#{(index + 1).toString().padStart(3, '0')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats - Git merge style */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Merge icon decoration */}
            <div className="absolute top-4 right-4 opacity-10">
              <GitMerge className="w-32 h-32 md:w-48 md:h-48" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {[
                { value: '50+', label: 'Happy Clients', icon: Users },
                { value: '100+', label: 'Projects Done', icon: Award },
                { value: '5+', label: 'Years Experience', icon: TrendingUp },
                { value: '15+', label: 'Team Members', icon: HeartHandshake },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <motion.div
                    className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs md:text-sm lg:text-base font-lato text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Target, Award, TrendingUp, Globe } from 'lucide-react';

// Counter animation hook
function useCounter(end, duration = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return { count, nodeRef };
}

// Individual stat card component
function StatCard({ icon: Icon, value, suffix = '', prefix = '', label, description, delay }) {
  const { count, nodeRef } = useCounter(value, 2.5);

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="relative group"
    >
      <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 h-full">
        <div className="flex flex-col items-center text-center">
          {/* Icon with solid background */}
          <div 
            className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-lg transition-all duration-300"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>

          {/* Counter */}
          <h3 
            className="text-5xl font-bold font-poppins mb-2"
            style={{ color: 'var(--secondary)' }}
          >
            {prefix}{count.toLocaleString()}{suffix}
          </h3>

          {/* Label */}
          <h4 className="text-lg font-semibold font-poppins mb-3" style={{ color: 'var(--secondary)' }}>
            {label}
          </h4>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed font-lato">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Stats Section Component
export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 250,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Trusted by businesses worldwide for exceptional software solutions',
    },
    {
      icon: Briefcase,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across web, mobile, and AI platforms',
    },
    {
      icon: Target,
      value: 350,
      suffix: '+',
      label: 'Freelance Projects',
      description: 'Professional freelance work with 100% client satisfaction rate',
    },
    {
      icon: Award,
      value: 25,
      suffix: '+',
      label: 'Team Members',
      description: 'Dedicated experts in development, design, and innovation',
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Outstanding feedback and long-term partnerships',
    },
    {
      icon: Globe,
      value: 30,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global reach with local expertise and support',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 container"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span 
              className="px-5 py-2 rounded-full text-white text-sm font-semibold font-lato"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Our Journey & Achievements
            </span>
          </motion.div>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-railway" style={{ color: 'var(--secondary)' }}>
            Numbers That Tell
            <br />
            <span style={{ color: 'var(--primary)' }}>Our Success Story</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-lato">
            Empowering businesses with innovative technology solutions. 
            Here's a glimpse of our journey, growth, and commitment to excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                {...stat}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center container"
        >
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins mb-3" style={{ color: 'var(--secondary)' }}>
              Ready to be our next success story?
            </h3>
            <p className="text-gray-600 mb-6 font-lato">
              Join hundreds of satisfied clients who trust us with their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/getquote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 font-poppins"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg bg-white font-semibold border-2 transition-all duration-300 font-poppins hover:bg-gray-50"
                style={{
                  color: 'var(--secondary)',
                  borderColor: 'var(--secondary)'
                }}
              >
                View Our Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

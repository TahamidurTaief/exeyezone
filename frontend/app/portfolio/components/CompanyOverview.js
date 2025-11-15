'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const CompanyOverview = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative software solutions that drive growth, efficiency, and digital transformation.',
      color: '#EE2B46',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become a globally recognized leader in software innovation, setting new standards for quality and creativity.',
      color: '#132F38',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Excellence, Innovation, Integrity, Collaboration, and Customer Success are at the core of everything we do.',
      color: '#EE2B46',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-raleway mb-6">
            <span className="text-[var(--secondary)]">Who We</span> <span className="text-[var(--primary)]">Are</span>
          </h2>
          <p className="text-lg text-gray-600 font-lato leading-relaxed">
            Exeyezone is a dynamic software company dedicated to building digital solutions that matter. 
            With a passionate team of developers, designers, and strategists, we turn complex challenges 
            into elegant, user-friendly applications.
          </p>
        </motion.div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: item.color }}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold font-raleway text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 font-lato leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Story */}
        <motion.div
          className="max-w-4xl mx-auto mt-20 bg-[#FFEEEF] rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold font-raleway text-[var(--secondary)] mb-6">Our Story</h3>
          <div className="space-y-4 text-gray-700 font-lato leading-relaxed">
            <p>
              Founded with a vision to bridge the gap between technology and business, Exeyezone has grown 
              from a small startup to a trusted partner for companies worldwide. Our journey has been marked 
              by continuous learning, innovation, and an unwavering commitment to excellence.
            </p>
            <p>
              Today, we serve clients across various industries, helping them navigate the digital landscape 
              with confidence. From startups to enterprises, we pride ourselves on delivering solutions that 
              not only meet but exceed expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;

'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users, Lightbulb, Rocket, TrendingUp, Globe } from 'lucide-react';

const Mission = () => {
  const goals = [
    { icon: Users, title: 'Digital Access for All', color: 'var(--primary)' },
    { icon: Lightbulb, title: 'Innovate with Purpose', color: 'var(--secondary)' },
    { icon: Rocket, title: 'Support Entrepreneurs', color: 'var(--primary)' },
    { icon: TrendingUp, title: 'Drive Tech Growth', color: 'var(--secondary)' },
    { icon: Globe, title: 'Expand Beyond Borders', color: 'var(--primary)' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative py-16 md:py-20 bg-gray-50/50">/

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg" style={{ backgroundColor: 'var(--secondary)', opacity: 0.1 }}>
                <Target className="w-5 h-5" style={{ color: 'var(--secondary)' }} />
              </div>
              <h2 className="text-xl md:text-2xl font-poppins font-bold text-gray-900">
                Our <span style={{ color: 'var(--primary)' }}>Mission</span>
              </h2>
            </div>
            <p className="text-sm md:text-base font-lato text-gray-600 leading-relaxed">
              At ExeyeZone, our mission is to empower Bangladesh through smart, affordable digital solutions.
              We aim to simplify technology for people, businesses, and institutions by offering user-friendly, scalable, and reliable software and web services.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg" style={{ backgroundColor: 'var(--primary)', opacity: 0.1 }}>
                <Eye className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h2 className="text-xl md:text-2xl font-poppins font-bold text-gray-900">
                Our <span style={{ color: 'var(--primary)' }}>Vision</span>
              </h2>
            </div>
            <p className="text-sm md:text-base font-lato text-gray-600 leading-relaxed">
              Our vision is to see a fully digital Bangladesh where every individual and business thrives through technology.
              We strive to lead this transformation by making digital tools easy to use, locally relevant, and globally competitive.
            </p>
          </motion.div>

          {/* Goals Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <h2 className="text-xl md:text-2xl font-poppins font-bold text-gray-900 mb-4">
              Our <span style={{ color: 'var(--primary)' }}>Goals</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
                >
                  <goal.icon className="w-4 h-4" style={{ color: goal.color }} />
                  <span className="text-xs md:text-sm font-lato text-gray-700">{goal.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Mission;

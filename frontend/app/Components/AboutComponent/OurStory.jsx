'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users2 } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: '2019',
      icon: Calendar,
      title: 'The Beginning',
      description: 'ExeyeZone was founded with a vision to revolutionize digital solutions in Bangladesh.'
    },
    {
      year: '2020',
      icon: Users2,
      title: 'Growing Team',
      description: 'Expanded our team with talented developers and designers passionate about innovation.'
    },
    {
      year: '2022',
      icon: Award,
      title: 'Major Milestone',
      description: 'Reached 100+ successful projects and earned trust of clients across multiple industries.'
    },
    {
      year: '2025',
      icon: MapPin,
      title: 'Going Global',
      description: 'Expanding our services internationally while staying rooted in Bangladesh.'
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Our <span style={{ color: 'var(--primary)' }}>Story</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
            From a small startup to a growing digital solutions company, our journey has been driven by passion, 
            innovation, and a commitment to excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Center Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                      <div 
                        className="p-2 rounded-lg" 
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)', opacity: 0.1 }}
                      >
                        <milestone.icon 
                          className="w-5 h-5" 
                          style={{ color: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)' }}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold font-poppins text-gray-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base font-lato text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-white shadow-lg relative z-10"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'
                    }}
                  >
                    <span className="text-sm md:text-base font-poppins">{milestone.year}</span>
                  </motion.div>
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-30"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'
                    }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-base md:text-lg font-lato text-gray-700 max-w-2xl mx-auto">
            This is just the beginning. Join us as we continue to innovate and create solutions that make a difference.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default OurStory;

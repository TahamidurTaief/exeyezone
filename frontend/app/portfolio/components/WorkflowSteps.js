'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, PenTool, Code2, TestTube, Rocket } from 'lucide-react';

const WorkflowSteps = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery & Consultation',
      description: 'We begin by understanding your vision, goals, and challenges through in-depth consultation.',
      color: '#EE2B46',
      number: '01',
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Planning',
      description: 'Our team creates a detailed roadmap, defining project scope, timeline, and technical requirements.',
      color: '#132F38',
      number: '02',
    },
    {
      icon: PenTool,
      title: 'Design & Prototyping',
      description: 'We craft intuitive designs and interactive prototypes to visualize your solution before development.',
      color: '#EE2B46',
      number: '03',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Our developers bring designs to life with clean, scalable code following best practices.',
      color: '#132F38',
      number: '04',
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your solution is bug-free, secure, and performs flawlessly.',
      color: '#EE2B46',
      number: '05',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support to ensure continuous success.',
      color: '#132F38',
      number: '06',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FFEEEF] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFEEEF] rounded-full mix-blend-multiply filter blur-3xl"></div>
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
            <span className="text-[var(--secondary)]">Our Working</span> <span className="text-[var(--primary)]">Process</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato">
            A proven methodology that ensures project success from concept to completion
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View - Grid with Arrows */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 relative">
            {/* SVG Arrow Connectors */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Row 1: Step 1 to Step 2 */}
              <motion.path
                d="M 33% 15% L 67% 15%"
                stroke="#EE2B46"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              {/* Arrow head for Step 1 to 2 */}
              <polygon points="67,15 64,13 64,17" fill="#EE2B46" />

              {/* Row 1: Step 2 to Step 3 */}
              <motion.path
                d="M 67% 15% L 100% 15%"
                stroke="#EE2B46"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              {/* Arrow head for Step 2 to 3 */}
              <polygon points="100,15 97,13 97,17" fill="#EE2B46" />

              {/* Curve from Step 3 to Step 4 */}
              <motion.path
                d="M 83% 25% Q 90% 40% 83% 55%"
                stroke="#132F38"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              {/* Arrow head for Step 3 to 4 */}
              <polygon points="83,55 85,52 81,52" fill="#132F38" />

              {/* Row 2: Step 4 to Step 5 (right to left) */}
              <motion.path
                d="M 67% 60% L 33% 60%"
                stroke="#132F38"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              {/* Arrow head for Step 4 to 5 */}
              <polygon points="33,60 36,58 36,62" fill="#132F38" />

              {/* Row 2: Step 5 to Step 6 */}
              <motion.path
                d="M 33% 60% L 0% 60%"
                stroke="#EE2B46"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
              />
              {/* Arrow head for Step 5 to 6 */}
              <polygon points="0,60 3,58 3,62" fill="#EE2B46" />
            </svg>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: step.color }}>
                    <span className="text-white font-bold text-xs">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: step.color }}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-raleway text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-lato leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Timeline with Arrows */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-4 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline with Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0" style={{ backgroundColor: step.color }}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="relative flex-1 flex items-center justify-center mt-2">
                      <div className="w-0.5 h-full bg-gray-300 relative">
                        {/* Animated dot moving down */}
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: step.color }}
                          animate={{
                            y: [0, 30, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                      {/* Arrow at bottom */}
                      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2" width="12" height="8" viewBox="0 0 12 8">
                        <polygon points="6,8 0,0 12,0" fill={step.color} />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-5 shadow-md flex-1 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold font-raleway text-[var(--primary)]">
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-raleway text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-lato text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;

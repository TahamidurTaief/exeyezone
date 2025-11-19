'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

import me_and_taief_img from "@/public/img/me_and_taief.png"
import { BestQualityIcon, IntegrityIcon, StrategyIcon } from './Icons'

const WeAreDifferent = () => {
  const sectionRef = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      Icon: BestQualityIcon,
      title: "Best Quality",
      description: "We guarantee top-notch quality in every aspect of our services, ensuring excellence in every project.",
    },
    {
      Icon: StrategyIcon,
      title: "Strategy",
      description: "Comprehensive strategies tailored to your specific needs, driving measurable success.",
    },
    {
      Icon: IntegrityIcon,
      title: "Integrity",
      description: "Highest standards of integrity, building trust and transparency in every interaction.",
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16"
        >
          {/* Left Section - Content */}
          <motion.div 
            variants={headingVariants}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            {/* Heading */}
            <div className="mb-6 lg:mb-8">
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-bold text-[var(--secondary)] leading-tight mb-4"
                variants={headingVariants}
              >
                Why we are{' '}
                <span className="text-[var(--primary)] relative inline-block">
                  different
                  <motion.span
                    className="absolute bottom-1 left-0 w-full h-1 bg-[var(--primary)] opacity-30"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                We stand out with our commitment to excellence and innovation. 
                Our blend of creativity, technical expertise, and personalized service ensures 
                every project exceeds expectations.
              </motion.p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover={{ 
                    scale: 1.02,
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
                    {/* Icon Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center rounded-lg bg-[#FFEEEF]">
                      <div className="scale-90">
                        <feature.Icon />
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-lato text-base sm:text-lg font-bold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="grid grid-cols-3 gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                {[
                  { value: "500+", label: "Projects" },
                  { value: "98%", label: "Success" },
                  { value: "50+", label: "Clients" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Full Image */}
          <motion.div 
            variants={imageVariants}
            style={{ y }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative p-4 pb-0 w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden"
            >
              <Image 
                src={me_and_taief_img} 
                alt="exeyezone" 
                placeholder="blur" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WeAreDifferent

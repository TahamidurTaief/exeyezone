'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import me_and_taief_img from "@/public/img/me_and_taief.png"
import { BestQualityIcon, IntegrityIcon, StrategyIcon } from './Icons'

const WeAreDifferent = () => {
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
    <div className="relative overflow-hidden ">
      {/* Animated Gradient Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -left-32 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/15 via-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-24 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-bl from-cyan-400/12 via-teal-400/12 to-green-400/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/4 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-tr from-orange-400/12 via-red-400/12 to-pink-400/12 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10"
        >
          {/* Left Section - Content - More Compact */}
          <motion.div 
            variants={headingVariants}
            className="w-full lg:w-[45%] flex flex-col justify-between"
          >
            {/* Heading */}
            <div className="space-y-2 mb-4">
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-raleway font-bold text-[var(--secondary)] leading-tight"
                variants={headingVariants}
              >
                Why we are{' '}
                <span className="text-[var(--primary)] relative inline-block">
                  different
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-[var(--primary)] opacity-30"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xs md:text-sm text-gray-600 leading-relaxed"
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

            {/* Features List - More Compact */}
            <div className="space-y-3 mb-4">
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
                  <div className="flex gap-3 items-start p-3 rounded-lg bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-lg hover:bg-white/60 transition-all duration-300 border border-gray-100/50">
                    {/* Icon Container */}
                    <motion.div 
                      className="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 group-hover:from-[var(--primary)]/20 group-hover:to-[var(--primary)]/10 transition-all duration-300"
                      whileHover={{ rotate: [0, -8, 8, -8, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="scale-75 md:scale-90">
                        <feature.Icon />
                      </div>
                    </motion.div>
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-0.5">
                      <h3 className="font-lato text-xs md:text-sm lg:text-base font-bold text-[var(--secondary)] uppercase tracking-wide group-hover:text-[var(--primary)] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-[11px] md:text-xs text-gray-600 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar - Compact Modern Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto"
            >
              <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-gradient-to-r from-[var(--primary)]/5 via-purple-500/5 to-[var(--primary)]/5 border border-[var(--primary)]/10">
                {[
                  { value: "500+", label: "Projects" },
                  { value: "98%", label: "Success" },
                  { value: "50+", label: "Clients" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-center flex-1"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--primary)] mb-0"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-[9px] md:text-[10px] text-gray-600 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Full Image Without Box */}
          <motion.div 
            variants={imageVariants}
            className="w-full lg:w-[55%] flex items-stretch"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full min-h-[350px] lg:min-h-[500px]"
            >
              {/* Full image without container/box */}
              <Image 
                src={me_and_taief_img} 
                alt="Akshaduzzaman and Taief" 
                placeholder="blur" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
              
              {/* Subtle overlay gradient on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 via-transparent to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WeAreDifferent

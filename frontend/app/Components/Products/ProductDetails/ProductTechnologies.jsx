'use client';

import { motion } from 'framer-motion';

const ProductTechnologies = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 w-full">
      <div className="container mx-auto px-4 w-full">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold mb-4 font-poppins relative inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative">
                <span className="text-[var(--secondary)]">System Features & </span>
                <span className="text-[var(--primary)]">Technology</span>
                <motion.span 
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 font-lato max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Built with modern and powerful technologies
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:gap-6 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.id || index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--primary)] group cursor-pointer"
              >
                <motion.div 
                  className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon || '⚙️'}
                </motion.div>
                <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-800 text-center font-lato group-hover:text-[var(--primary)] transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTechnologies;

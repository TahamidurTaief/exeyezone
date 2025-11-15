'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPython, 
  SiDjango, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiGit,
  SiDocker,
  SiTypescript,
  SiAmazon,
  SiTensorflow,
  SiFramer,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFastapi,
  SiFlask,
  SiExpress,
  SiVuedotjs,
  SiAngular,
  SiRedux,
  SiGraphql,
  SiMysql,
  SiRedis,
  SiElasticsearch,
  SiKubernetes,
  SiJenkins,
  SiGithubactions
} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';

// Custom Tkinter SVG Icon Component
const TkinterIcon = () => (
  <svg viewBox="0 0 50 50" className="w-12 h-12">
    <rect width="50" height="50" rx="8" fill="#3776AB"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Tk</text>
  </svg>
);

const TechStack = () => {
  const technologies = [
    // Frontend Frameworks & Libraries (Priority)
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
    { icon: SiAngular, name: 'Angular', color: '#DD0031' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiRedux, name: 'Redux', color: '#764ABC' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiFramer, name: 'Framer Motion', color: '#0055FF' },
    
    // Backend Technologies (Priority)
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiDjango, name: 'Django', color: '#092E20' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiFlask, name: 'Flask', color: '#000000' },
    { icon: TkinterIcon, name: 'Tkinter', color: '#3776AB' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express', color: '#000000' },
    { icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
    
    // Databases
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    { icon: SiElasticsearch, name: 'Elasticsearch', color: '#005571' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    
    // Design Tools (Priority)
    { icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF' },
    { icon: SiAdobeillustrator, name: 'Illustrator', color: '#FF9A00' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
    
    // DevOps & Cloud
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
    { icon: SiJenkins, name: 'Jenkins', color: '#D24939' },
    { icon: SiGithubactions, name: 'GitHub Actions', color: '#2088FF' },
    { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
    
    // Other Tools
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Technology Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-10 left-10 text-[120px]">
          <SiReact className="text-[#61DAFB]" />
        </div>
        <div className="absolute top-20 right-20 text-[100px]">
          <SiPython className="text-[#3776AB]" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-[110px]">
          <SiNodedotjs className="text-[#339933]" />
        </div>
        <div className="absolute bottom-32 right-1/3 text-[90px]">
          <SiDjango className="text-[#092E20]" />
        </div>
        <div className="absolute top-1/3 left-1/2 text-[130px]">
          <SiNextdotjs className="text-gray-900" />
        </div>
        <div className="absolute top-40 right-10 text-[95px]">
          <SiDocker className="text-[#2496ED]" />
        </div>
        <div className="absolute bottom-10 left-20 text-[105px]">
          <SiMongodb className="text-[#47A248]" />
        </div>
        <div className="absolute top-1/2 right-40 text-[115px]">
          <SiPostgresql className="text-[#4169E1]" />
        </div>
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
            <span className="text-[var(--secondary)]">Technologies We</span> <span className="text-[var(--primary)]">Use</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon === TkinterIcon ? TkinterIcon : tech.icon;
              
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-5 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center aspect-square border border-gray-200 group-hover:border-[var(--primary)] relative overflow-hidden">
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      {tech.icon === TkinterIcon ? (
                        <TkinterIcon />
                      ) : (
                        <IconComponent 
                          className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110" 
                          style={{ color: tech.color }}
                        />
                      )}
                      <span className="text-[10px] md:text-xs font-semibold font-lato text-gray-700 text-center leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Categories */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 md:p-6 text-center border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold font-raleway text-gray-900 mb-2">Frontend</h3>
              <p className="text-xs md:text-sm font-lato text-gray-600">Modern, responsive UIs with React, Next.js & more</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 md:p-6 text-center border border-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold font-raleway text-gray-900 mb-2">Backend</h3>
              <p className="text-xs md:text-sm font-lato text-gray-600">Scalable APIs with Python, Django, FastAPI & Node.js</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 md:p-6 text-center border border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold font-raleway text-gray-900 mb-2">Design</h3>
              <p className="text-xs md:text-sm font-lato text-gray-600">Professional designs with Photoshop, Illustrator & Figma</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 md:p-6 text-center border border-orange-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold font-raleway text-gray-900 mb-2">DevOps & Cloud</h3>
              <p className="text-xs md:text-sm font-lato text-gray-600">Deployment with Docker, Kubernetes & AWS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

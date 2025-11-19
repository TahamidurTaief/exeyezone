'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getTeamMembers } from '@/utils/api/teams';

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await getTeamMembers(4); // Fetch only 4 team members
        setTeamMembers(data);
      } catch (error) {
        console.error('Error loading team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full">
          <div className="text-center text-gray-500 container">Loading team members...</div>
        </div>
      </section>
    );
  }

  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="w-full relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16 container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway mb-4 md:mb-6">
            <span style={{ color: 'var(--secondary)' }}>Meet Our</span> <span style={{ color: 'var(--primary)' }}>Tech Team</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato">
            Talented engineers and designers dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {teamMembers.slice(0, 4).map((member, index) => {
              const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
              const imageUrl = member.profile_img ? `${baseURL}${member.profile_img}` : null;
              
              return (
                <motion.div
                  key={member.id || index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden bg-gray-100">
                      {imageUrl ? (
                        <Image 
                          src={imageUrl}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--secondary)' }}>
                            <span className="text-3xl font-bold text-white font-poppins">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info Container */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold font-lato mb-2" style={{ color: 'var(--secondary)' }}>
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold font-lato" style={{ color: 'var(--primary)' }}>
                        {member.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA with solid color */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-white font-bold font-raleway px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Meet the Full Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

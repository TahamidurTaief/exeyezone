'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github, Twitter, Mail, ArrowRight } from 'lucide-react';
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
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">Loading team members...</div>
        </div>
      </section>
    );
  }

  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway mb-4 md:mb-6">
            <span className="text-[var(--secondary)]">Meet Our</span> <span className="text-[var(--primary)]">Team</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
          {teamMembers.slice(0, 4).map((member, index) => {
            const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const imageUrl = member.image ? `${baseURL}${member.image}` : null;
            
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
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
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
                        <div className="w-24 h-24 rounded-full bg-[var(--secondary)] flex items-center justify-center">
                          <span className="text-3xl font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Social overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-200 transform hover:scale-110"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.github && (
                          <a 
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-200 transform hover:scale-110"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {member.twitter && (
                          <a 
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-200 transform hover:scale-110"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-200 transform hover:scale-110"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold font-raleway text-gray-900 mb-1 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--primary)] mb-3">
                      {member.designation || member.role}
                    </p>
                    {member.bio && (
                      <p className="text-sm text-gray-600 font-lato line-clamp-2">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-bold font-raleway px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Meet the Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;

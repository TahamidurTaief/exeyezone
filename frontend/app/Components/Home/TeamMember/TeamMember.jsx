import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";

const TeamMember = ({ team }) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-full text-sm font-semibold font-poppins text-[var(--secondary)] border border-[var(--primary)]/20">
              Meet the Experts
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-3xl md:text-4xl xl:text-5xl font-poppins font-bold leading-tight">
            <span className="text-[var(--secondary)]">Our</span>{' '}
            <span className="text-[var(--primary)] relative inline-block">
              Team
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5 Q50 0, 100 5 T200 5" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-md max-w-3xl mx-auto text-gray-600 font-lato leading-relaxed">
            We are a creative team focused on bringing ideas to life through thoughtful design and meaningful digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
          {team.map((data, index) => (
            <article 
              key={index} 
              className=" p-2 md:p-3 group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col"
              itemScope 
              itemType="https://schema.org/Person"
            >
              {/* Image Section with Watermark */}
              <div className="relative w-full rounded-xl h-72 aspect-square overflow-hidden">
                {/* Team Member Image */}
                <Image
                  className="w-full h-full rounded-xl object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src={data.profile_img}
                  alt={`${data.name} - ${data.position} at ExeyeZone`}
                  width={400}
                  height={400}
                  itemProp="image"
                  loading="lazy"
                  quality={90}
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/90 via-[var(--secondary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Watermark Icon - Appears on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-all duration-500">
                  <FaCode className="text-white text-[12rem] transform rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                </div>

                {/* Social Links Overlay - Appears on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <ul className="flex items-center justify-center gap-3" itemProp="sameAs">
                    {data.facebook && (
                      <li>
                        <Link 
                          href={data.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                          aria-label={`Visit ${data.name}'s Facebook profile`}
                        >
                          <FaFacebook className="text-lg" />
                        </Link>
                      </li>
                    )}
                    {data.linkedin && (
                      <li>
                        <Link 
                          href={data.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                          aria-label={`Visit ${data.name}'s LinkedIn profile`}
                        >
                          <FaLinkedin className="text-lg" />
                        </Link>
                      </li>
                    )}
                    {data.github && (
                      <li>
                        <Link 
                          href={data.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
                          aria-label={`Visit ${data.name}'s GitHub profile`}
                        >
                          <FaGithub className="text-lg" />
                        </Link>
                      </li>
                    )}
                    {data.personal_website && (
                      <li>
                        <Link 
                          href={data.personal_website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-[var(--primary)] transition-all duration-300 transform hover:scale-110"
                          aria-label={`Visit ${data.name}'s personal website`}
                        >
                          <RiGlobalFill className="text-lg" />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col mt-1 md:mt-2">
                {/* Name */}
                <h3 
                  className="text-lg md:text-xl font-poppins font-bold text-[var(--secondary)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300"
                  itemProp="name"
                >
                  {data.name}
                </h3>

                {/* Position */}
                <div className="mb-3">
                  <span 
                    className="inline-block px-3 py-1 text-xs font-semibold font-lato bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 text-[var(--primary)] rounded-full"
                    itemProp="jobTitle"
                  >
                    {data.position}
                  </span>
                </div>

                {/* Description */}
                <p 
                  className="text-sm font-lato text-gray-600 leading-relaxed line-clamp-3"
                  itemProp="description"
                >
                  {data.description}
                </p>
              </div>

              {/* Decorative Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;

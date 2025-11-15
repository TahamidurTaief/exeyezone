'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Clock, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getServices } from '@/utils/api/services';

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices(3); // Fetch only 3 services
        setServices(data);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500'
  ];

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway mb-4 md:mb-6">
            <span className="text-[var(--secondary)]">Featured</span> <span className="text-[var(--primary)]">Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato">
            Explore our most popular services trusted by businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
          {services.slice(0, 3).map((service, index) => {
            const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const imageUrl = service.image ? `${baseURL}${service.image}` : null;
            
            return (
              <motion.div
                key={service.id || index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                  {/* Gradient header with image */}
                  <div className={`bg-gradient-to-r ${gradients[index % gradients.length]} p-6 md:p-8 text-white relative overflow-hidden`}>
                    {imageUrl && (
                      <div className="absolute inset-0 opacity-20">
                        <Image 
                          src={imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="font-bold text-lg">{service.rating || '4.9'}</span>
                          <span className="text-sm opacity-90">({service.reviews_count || '45'})</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4" />
                          <span>{service.delivery_time || '14 days'}</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold font-raleway mb-2">{service.title}</h3>
                      <p className="text-sm md:text-base opacity-90 line-clamp-2">{service.description}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {(service.features || ['Responsive Design', 'SEO Optimized', 'Fast Performance']).slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-6 mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-[var(--primary)] font-poppins">
                          {service.price ? `$${service.price}` : 'From $999'}
                        </span>
                      </div>
                      <Link 
                        href={service.slug ? `/services/${service.slug}` : '/services'}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[var(--secondary)] text-white font-bold font-raleway px-6 py-3 rounded-full hover:bg-[var(--primary)] transition-all duration-300 group-hover:shadow-lg"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
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
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-bold font-raleway px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;

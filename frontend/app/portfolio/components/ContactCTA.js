'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'exeyezoneltd@gmail.com',
      link: 'mailto:exeyezoneltd@gmail.com',
      color: '#EE2B46',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '01766454576',
      link: 'tel:01766454576',
      color: '#132F38',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      link: '/contact',
      color: '#EE2B46',
    },
  ];

  return (
    <section className="py-20 bg-[var(--secondary)] relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full filter blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-raleway text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl font-lato text-blue-100 mb-8 leading-relaxed">
              Let's turn your vision into reality. Get in touch with us today and discover how we can help your business thrive in the digital world.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/getquote"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-bold font-raleway px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: method.color }}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold font-raleway text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-blue-100 font-lato text-sm">
                  {method.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-blue-100 text-sm">
            Available Monday - Friday, 9:00 AM - 6:00 PM (GMT+6)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message (you would implement this with your preferred notification system)
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'razzaman97@gmail.com',
      href: 'mailto:razzaman97@gmail.com',
      color: 'electric-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6387077337',
      href: 'tel:+916387077337',
      color: 'electric-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: '#',
      color: 'electric-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'electric-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'electric-green'
    },
    {
      icon: Download,
      label: 'Resume',
      href: '#',
      color: 'electric-purple'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      'electric-blue': 'text-electric-blue border-electric-blue bg-electric-blue',
      'electric-green': 'text-electric-green border-electric-green bg-electric-green',
      'electric-purple': 'text-electric-purple border-electric-purple bg-electric-purple'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['electric-blue'];
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Send me a message</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or just connecting with fellow AI/ML enthusiasts. Feel free to reach out!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full glass px-4 py-3 rounded-xl border border-gray-600 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-opacity-50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full glass px-4 py-3 rounded-xl border border-gray-600 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-opacity-50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-xl border border-gray-600 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-opacity-50 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-xl border border-gray-600 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-opacity-50 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-electric-blue bg-opacity-10 text-electric-blue border border-electric-blue rounded-xl font-semibold hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 neon-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-electric-blue border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Prefer direct contact? You can reach me through any of these channels. 
                  I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const colorClasses = getColorClasses(info.color);
                  
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 glass p-4 rounded-xl hover:scale-105 transition-all duration-300 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className={`w-12 h-12 rounded-xl ${colorClasses.split(' ')[2]} bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300`}>
                        <Icon className={`w-6 h-6 ${colorClasses.split(' ')[0]}`} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    const colorClasses = getColorClasses(social.color);
                    
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 rounded-xl ${colorClasses.split(' ')[2]} bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 group`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <Icon className={`w-6 h-6 ${colorClasses.split(' ')[0]} group-hover:scale-110 transition-transform duration-300`} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability status */}
              <motion.div
                className="glass-strong p-6 rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-electric-green rounded-full animate-pulse"></div>
                  <span className="text-electric-green font-semibold">Available for opportunities</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently open to internships, full-time positions, and exciting AI/ML projects. 
                  Let's build something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
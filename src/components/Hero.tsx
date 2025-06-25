import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-electric-blue opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-32 h-32 mx-auto mb-8 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-electric-blue to-electric-green p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center text-4xl font-bold text-electric-blue">
                AK
              </div>
            </div>
          </motion.div>

          {/* Name with enhanced typewriter effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-6xl md:text-8xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-electric-blue via-electric-green to-electric-purple bg-clip-text text-transparent animate-gradient">
              Aman Kumar
            </span>
          </motion.h1>

          {/* Animated title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-4xl text-gray-300 mb-6"
          >
            <span className="inline-block overflow-hidden border-r-2 border-electric-green animate-typewriter">
              AI/ML Software Engineer
            </span>
          </motion.div>

          {/* Enhanced subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Building the Future with{' '}
            <span className="text-electric-green text-glow animate-pulse">Intelligent Systems</span>
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg text-gray-500"
          >
            📍 Bangalore, Karnataka, India
          </motion.p>

          {/* Enhanced action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.button
              onClick={scrollToNext}
              className="glass-strong px-8 py-4 rounded-xl text-electric-blue border border-electric-blue hover:bg-electric-blue hover:text-cyber-dark transition-all duration-300 neon-glow hover-lift"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            
            <motion.a
              href="#contact"
              className="glass-strong px-8 py-4 rounded-xl text-electric-green border border-electric-green hover:bg-electric-green hover:text-cyber-dark transition-all duration-300 neon-glow-green hover-lift"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex gap-6 justify-center mt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/mrxvision97', label: 'GitHub', external: true },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-kumar-mrxv19/', label: 'LinkedIn', external: true },
              { icon: Mail, href: '#contact', label: 'Email', external: false },
              { icon: Download, href: '/AMAN UPDATED RESUME.pdf', label: 'Resume', external: false, download: true }
            ].map(({ icon: Icon, href, label, external, download }, index) => (
              <motion.a
                key={label}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                {...(download && { download: 'Aman_Kumar_Resume.pdf' })}
                className="glass p-3 rounded-lg text-gray-400 hover:text-electric-blue transition-all duration-300 hover-lift tech-icon"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="text-electric-blue animate-bounce-slow hover-lift"
            whileHover={{ scale: 1.1 }}
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
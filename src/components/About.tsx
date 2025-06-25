import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Users, Code2, Brain, Database } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: GraduationCap, label: 'CGPA', value: '9.0/10.0', color: 'text-electric-blue' },
    { icon: Code2, label: 'Projects', value: '10+', color: 'text-electric-green' },
    { icon: Award, label: 'Hackathon Wins', value: '5+', color: 'text-electric-purple' },
    { icon: Users, label: 'Impact', value: '1000+ Users', color: 'text-electric-blue' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Personal info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                About{' '}
                <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                I'm a passionate AI/ML Software Engineer with a strong foundation in computer science 
                and a vision to build intelligent systems that solve real-world problems. Currently 
                pursuing my Bachelor's in Computer Science at Vidyashilp University with an impressive 
                9.0 CGPA.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                My expertise spans across Deep Learning, Machine Learning, Natural Language Processing, 
                and Computer Vision. I've developed enterprise-level chatbots, deepfake detection systems, 
                and algorithmic trading platforms that have impacted thousands of users worldwide.
              </motion.p>
            </div>

            {/* Enhanced Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="glass p-6 rounded-xl text-center hover-lift"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} tech-icon`} />
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced Education */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-xl hover-lift"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-electric-blue mr-3 tech-icon" />
                <h3 className="text-xl font-bold text-electric-blue">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">Bachelor of Technology - Computer Science</h4>
                  <p className="text-electric-green">Vidyashilp University</p>
                  <p className="text-gray-400">Expected 2026 • CGPA: 9.0/10.0</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Interactive visualization */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="glass-strong p-8 rounded-2xl relative overflow-hidden hover-lift">
              {/* Enhanced animated brain/neural network visualization */}
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central node with enhanced animation */}
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-electric-blue to-electric-green neon-glow"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                      boxShadow: [
                        '0 0 20px #00d4ff',
                        '0 0 40px #39ff14',
                        '0 0 20px #00d4ff'
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Enhanced surrounding nodes */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * (Math.PI / 180);
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full bg-electric-green"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          scale: [0.5, 1.2, 0.5],
                          opacity: [0.3, 1, 0.3],
                          boxShadow: [
                            '0 0 5px #39ff14',
                            '0 0 15px #39ff14',
                            '0 0 5px #39ff14'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}

                  {/* Enhanced connecting lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 45) * (Math.PI / 180);
                      const radius = 120;
                      const x1 = 50;
                      const y1 = 50;
                      const x2 = 50 + (Math.cos(angle) * radius * 100) / 384;
                      const y2 = 50 + (Math.sin(angle) * radius * 100) / 384;
                      
                      return (
                        <motion.line
                          key={i}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          opacity="0.8"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.8 }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      );
                    })}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="50%" stopColor="#39ff14" />
                        <stop offset="100%" stopColor="#bf00ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Enhanced skill labels */}
                <div className="absolute inset-0">
                  {['AI/ML', 'Deep Learning', 'NLP', 'Computer Vision', 'Python', 'TensorFlow', 'PyTorch', 'Vector DB'].map((skill, i) => {
                    const angle = (i * 45) * (Math.PI / 180);
                    const radius = 140;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={skill}
                        className="absolute text-xs text-electric-blue font-semibold bg-cyber-dark px-2 py-1 rounded-lg border border-electric-blue border-opacity-30"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 1.5 + i * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
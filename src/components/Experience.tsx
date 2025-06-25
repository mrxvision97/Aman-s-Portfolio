import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink, Users, TrendingUp, Brain, Database } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      company: 'NOWW CLUB',
      role: 'SDE Intern',
      period: 'Apr 2025 - Present',
      location: 'Remote',
      type: 'Internship',
      description: 'Engineering enterprise-level agentic multimodal chatbots with MCP servers for modern lifestyles.',
      achievements: [
        'Engineered an end-to-end enterprise-level agentic multimodal chatbot with MCP servers catering to lifestyles, currently serving 1000+ active users',
        'Integrated chatbot into Noww Club application and conducted extensive A/B testing with 200+ users to optimize user experience and performance'
      ],
      technologies: ['Python', 'MCP Servers', 'Langchain', 'FastAPI', 'Vector Databases', 'Redis'],
      impact: {
        users: '1000+',
        testing: '200+ users',
        integration: 'Full Stack'
      }
    },
    {
      company: 'UST',
      role: 'AI/ML Intern',
      period: 'June 2025 - July 2025',
      location: 'Hybrid - Bangalore',
      type: 'Internship',
      description: 'Research and development of multimodal agentic systems with novel AI architectures.',
      achievements: [
        'Conducted research on multimodal agentic systems and developed novel model architectures for enhanced AI agent capabilities',
        'Built and deployed applications leveraging multimodal AI agents for real-world problem solving and user interaction'
      ],
      technologies: ['Python', 'PyTorch', 'Multimodal AI', 'Agent Systems', 'TensorFlow', 'Research'],
      impact: {
        research: 'Novel Architectures',
        deployment: 'Real-world Apps',
        innovation: 'AI Agents'
      }
    },
    {
      company: 'Indian Institute of Technology Guwahati',
      role: 'ML Intern',
      period: 'June 2024 - Aug 2024',
      location: 'Remote',
      type: 'Research Internship',
      description: 'Deep Learning research for underwater ship hull detection using advanced computer vision techniques.',
      achievements: [
        'Developed a Deep Learning Model for predicting bounding boxes from masked images using the Liaci Underwater Ship Hull Detection Dataset',
        'Optimized model accuracy performance from 85% to 89% and decreased inference time by 20% for real-time deployment'
      ],
      technologies: ['PyTorch', 'Computer Vision', 'Deep Learning', 'YOLO', 'OpenCV', 'Python'],
      impact: {
        accuracy: '85% → 89%',
        performance: '20% faster',
        deployment: 'Real-time'
      }
    },
    {
      company: 'Makonis Software Solutions',
      role: 'AI Intern',
      period: 'May 2024 - July 2024',
      location: 'Bangalore',
      type: 'Internship',
      description: 'IoT product development with AI-driven solutions for predictive analytics and system optimization.',
      achievements: [
        'Designed and tested IoT product prototypes using ensemble techniques and various ML algorithms for enhanced performance',
        'Conducted research on AI-driven solutions for predictive analytics and system optimization'
      ],
      technologies: ['Python', 'IoT', 'Ensemble Methods', 'ML Algorithms', 'Predictive Analytics', 'Research'],
      impact: {
        prototypes: 'IoT Products',
        techniques: 'Ensemble ML',
        research: 'AI Solutions'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 relative">
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
            Professional{' '}
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-blue via-electric-green to-electric-purple transform md:-translate-x-1/2 opacity-60"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Enhanced timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-electric-green rounded-full transform -translate-x-1/2 neon-glow-green z-10 border-4 border-cyber-dark">
                  <motion.div 
                    className="w-2 h-2 bg-electric-green rounded-full absolute top-1 left-1"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Enhanced content */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="glass-strong p-8 rounded-2xl hover-lift"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-5 h-5 text-electric-blue tech-icon" />
                          <span className="text-electric-blue font-semibold text-sm uppercase tracking-wide">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <h4 className="text-xl text-electric-green mb-2">{exp.company}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-electric-blue mb-3">Key Achievements</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.3 * index + 0.1 * i }}
                          >
                            <div className="w-2 h-2 bg-electric-green rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Enhanced impact metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(exp.impact).map(([key, value], i) => (
                        <motion.div 
                          key={key}
                          className="text-center glass p-3 rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.4 * index + 0.1 * i }}
                        >
                          <div className="text-lg font-bold text-electric-blue mb-1">{value}</div>
                          <span className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-electric-blue bg-opacity-10 text-electric-blue border border-electric-blue border-opacity-30 rounded-full text-xs font-medium hover-lift"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.5 * index + 0.05 * i }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
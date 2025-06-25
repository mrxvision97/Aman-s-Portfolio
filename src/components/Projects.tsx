import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Award, TrendingUp, Users, Zap, Brain, Eye, BarChart3, Car, Video, DollarSign, Bot } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Indian Deepfake Image Detection',
      category: 'Computer Vision • AI Security',
      description: 'Production-ready deepfake detection system specifically optimized for Indian faces using advanced CNN architectures.',
      longDescription: 'Engineered and deployed a production-ready deepfake detection system specifically optimized for Indian faces, achieving 99.96% accuracy on a curated dataset of 140,000 images using advanced CNN architectures and XceptionNet71.',
      icon: Eye,
      technologies: ['PyTorch', 'XceptionNet', 'Custom CNN', 'Flask/FastAPI', 'React', 'MTCNN', 'YOLOv11'],
      metrics: {
        accuracy: '99.96%',
        dataset: '140K images',
        tnr: '100% TNR'
      },
      achievements: [
        'Built end-to-end ML pipeline and web application with React frontend and FastAPI backend',
        'Implemented automated face extraction using MTCNN/YOLOv11',
        'Comprehensive data augmentation strategies',
        'Deployed solution with real-time inference capabilities'
      ],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'electric-blue',
      year: '2024'
    },
    {
      title: 'Multimodal Emotion Recognition with Predictive Analytics',
      category: 'Deep Learning • NLP',
      description: 'Sophisticated multimodal emotion recognition system with custom attention mechanisms and predictive analytics.',
      longDescription: 'Architected a sophisticated multimodal emotion recognition system with custom attention mechanisms, implementing FacialRegionAttention, MicroExpressionDetector, and CulturalContextAdapter modules.',
      icon: Brain,
      technologies: ['PyTorch', 'Vision Transformers', 'LSTM', 'LoRA Adaptation', 'TensorBoard', 'VGG-19'],
      metrics: {
        emotions: '8 classes',
        modalities: '3 inputs',
        precision: 'High-precision'
      },
      achievements: [
        'Developed predictive emotion analytics pipeline using LSTM networks',
        'Integrated with VGG-19 style transfer network for real-time emotion visualization',
        'Deployed comprehensive dashboard with TensorBoard logging',
        'Advanced data augmentation and mixed-precision training'
      ],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'electric-green',
      year: '2024'
    },
    {
      title: 'Indian Stock Dashboard',
      category: 'FinTech • AI Agents',
      description: 'Interactive dashboard with AI agents for comprehensive stock market analysis and algorithmic trading.',
      longDescription: 'Developed and tested various algorithmic trading algorithms with interactive dashboard for comprehensive stock market analysis using AI agents and MCP servers.',
      icon: BarChart3,
      technologies: ['Python', 'AI Agents', 'MCP Servers'],
      metrics: {
        algorithms: 'Multiple',
        analysis: 'Real-time',
        agents: 'AI-powered'
      },
      achievements: [
        'Implemented stock screeners with advanced filtering',
        'Utilized MCP servers with AI agents for market sentiment analysis',
        'Real-time trading pattern recognition',
        'Interactive dashboard for comprehensive market analysis'
      ],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'electric-purple',
      year: '2024'
    },
    {
      title: 'LLMs-based RAG for ADAS',
      category: 'AI • Automotive',
      description: 'Retrieval-Augmented Generation system integrated with Advanced Driver Assistance Systems.',
      longDescription: 'Developed a Retrieval-Augmented Generation (RAG) system integrated with Advanced Driver Assistance Systems (ADAS) for vehicle-specific queries and emergency troubleshooting.',
      icon: Car,
      technologies: ['LLMs', 'RAG', 'Voice Recognition'],
      metrics: {
        integration: 'ADAS',
        queries: 'Real-time',
        voice: 'Enabled'
      },
      achievements: [
        'Real-time recommendations for vehicle-specific queries',
        'Emergency troubleshooting capabilities',
        'Voice-based query system implementation',
        'Location-based services for enhanced accessibility'
      ],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'electric-blue',
      year: '2024'
    },
    {
      title: 'Avatar Video Generator from Image and Text',
      category: 'AI • Video Generation',
      description: 'Video generation tool enabling lifelike speech synthesis and avatar animation from text and images.',
      longDescription: 'Built a video generation tool using Streamlit and D-ID API, enabling lifelike speech synthesis and avatar animation from text and images.',
      icon: Video,
      technologies: ['Streamlit', 'D-ID API', 'Python', 'Video Processing'],
      metrics: {
        synthesis: 'Lifelike',
        animation: 'Real-time',
        input: 'Text + Image'
      },
      achievements: [
        'Integrated D-ID API for professional avatar generation',
        'Real-time speech synthesis capabilities',
        'User-friendly Streamlit interface',
        'High-quality video output generation'
      ],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'electric-green',
      year: '2024'
    },
    {
      title: 'Loan Approval Analysis',
      category: 'Machine Learning • Finance',
      description: 'Ensemble-based predictive model for loan approvals using advanced machine learning techniques.',
      longDescription: 'Developed an ensemble-based predictive model for loan approvals, leveraging advanced machine learning techniques to achieve 88% accuracy.',
      icon: DollarSign,
      technologies: ['Python', 'Ensemble Methods', 'Scikit-learn', 'Data Analysis'],
      metrics: {
        accuracy: '88%',
        model: 'Ensemble',
        domain: 'Finance'
      },
      achievements: [
        'Advanced ensemble techniques implementation',
        'Comprehensive feature engineering',
        'Risk assessment modeling',
        'Production-ready deployment pipeline'
      ],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'electric-purple',
      year: '2024'
    },
    {
      title: 'Humanoid Robot using ARC Synthiam Tool',
      category: 'Robotics • AI',
      description: 'Humanoid robot featuring AI-driven image recognition and conversational abilities.',
      longDescription: 'Designed a humanoid robot featuring AI-driven image recognition, conversational abilities, and real-time cognitive object detection using ARC Synthiam Tool.',
      icon: Bot,
      technologies: ['ARC Synthiam', 'Computer Vision', 'NLP', 'Robotics'],
      metrics: {
        recognition: 'AI-driven',
        conversation: 'Real-time',
        detection: 'Cognitive'
      },
      achievements: [
        'AI-driven image recognition implementation',
        'Real-time conversational capabilities',
        'Cognitive object detection system',
        'Integrated robotics platform development'
      ],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'electric-blue',
      year: '2024'
    }
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
      transition: { duration: 0.6, ease: "easeOut" }
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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 relative">
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
            Featured{' '}
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* Featured projects grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              const colorClasses = getColorClasses(project.color);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-strong rounded-2xl overflow-hidden hover-lift cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedProject(projects.indexOf(project))}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.2 * index }}
                >
                  {/* Project header */}
                  <div className="h-48 bg-gradient-to-br from-cyber-dark to-cyber-darker relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className={`w-20 h-20 rounded-full ${colorClasses.split(' ')[2]} bg-opacity-20 flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className={`w-10 h-10 ${colorClasses.split(' ')[0]} tech-icon`} />
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[2]} bg-opacity-20`}>
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-electric-blue bg-electric-blue bg-opacity-20">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className={`text-sm ${colorClasses.split(' ')[0]} font-medium`}>
                        {project.category}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold ${colorClasses.split(' ')[0]}`}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-electric-blue bg-opacity-10 text-electric-blue border border-electric-blue rounded-lg text-sm font-medium hover:bg-opacity-20 transition-all hover-lift">
                        <Play size={14} />
                        Demo
                      </button>
                      <button className="flex items-center justify-center px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all hover-lift">
                        <Github size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Other projects section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProjects.map((project, index) => {
                const Icon = project.icon;
                const colorClasses = getColorClasses(project.color);
                
                return (
                  <motion.div
                    key={index}
                    className="glass p-6 rounded-xl hover-lift cursor-pointer"
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setSelectedProject(projects.indexOf(project))}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`w-6 h-6 ${colorClasses.split(' ')[0]} tech-icon`} />
                      <span className={`text-xs px-2 py-1 rounded ${colorClasses.split(' ')[2]} bg-opacity-20 ${colorClasses.split(' ')[0]}`}>
                        {project.year}
                      </span>
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm">{project.title}</h4>
                    <p className="text-gray-400 text-xs mb-3">{project.category}</p>
                    <div className="flex gap-1">
                      <button className="flex-1 text-xs px-2 py-1 bg-electric-blue bg-opacity-10 text-electric-blue rounded hover-lift">
                        View
                      </button>
                      <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs hover-lift">
                        <Github size={12} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Project detail modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {projects[selectedProject].title}
                      </h3>
                      <p className={`${getColorClasses(projects[selectedProject].color).split(' ')[0]} font-medium`}>
                        {projects[selectedProject].category}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white p-2 hover-lift"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {projects[selectedProject].longDescription}
                  </p>

                  {/* Detailed metrics */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {Object.entries(projects[selectedProject].metrics).map(([key, value]) => (
                      <div key={key} className="text-center glass p-4 rounded-xl">
                        <div className={`text-2xl font-bold ${getColorClasses(projects[selectedProject].color).split(' ')[0]} mb-1`}>
                          {value}
                        </div>
                        <div className="text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {projects[selectedProject].achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-300">
                          <Award className={`w-5 h-5 mt-0.5 ${getColorClasses(projects[selectedProject].color).split(' ')[0]} flex-shrink-0`} />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 ${getColorClasses(projects[selectedProject].color).split(' ')[2]} bg-opacity-10 ${getColorClasses(projects[selectedProject].color).split(' ')[0]} border ${getColorClasses(projects[selectedProject].color).split(' ')[1]} border-opacity-30 rounded-lg font-medium hover-lift`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <button className={`flex items-center gap-2 px-6 py-3 ${getColorClasses(projects[selectedProject].color).split(' ')[2]} bg-opacity-10 ${getColorClasses(projects[selectedProject].color).split(' ')[0]} border ${getColorClasses(projects[selectedProject].color).split(' ')[1]} rounded-xl font-medium hover:bg-opacity-20 transition-all hover-lift`}>
                      <Play size={18} />
                      View Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-xl font-medium hover:bg-gray-600 transition-all hover-lift">
                      <Github size={18} />
                      Source Code
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-xl font-medium hover:bg-gray-600 transition-all hover-lift">
                      <ExternalLink size={18} />
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
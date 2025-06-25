import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, Code, Wrench, TrendingUp, Database, BarChart3,
  Bot, MessageSquare, Eye, Type, Users,
  Coffee, PieChart, Zap, HardDrive, Network,
  Flame, Calculator, Link, Smile, BarChart,
  Search, DollarSign, Settings, Cloud
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState('ai-ml');

  const skillCategories = {
    'ai-ml': {
      title: 'AI/ML Technologies',
      icon: Brain,
      color: 'electric-blue',
      skills: [
        { name: 'Deep Learning', icon: Brain, description: 'Neural networks, CNNs, RNNs, Transformers' },
        { name: 'Machine Learning', icon: Bot, description: 'Supervised, Unsupervised, Reinforcement Learning' },
        { name: 'Natural Language Processing', icon: MessageSquare, description: 'Text processing, sentiment analysis, chatbots' },
        { name: 'Computer Vision', icon: Eye, description: 'Image processing, object detection, face recognition' },
        { name: 'Large Language Models', icon: Type, description: 'GPT, BERT, fine-tuning, prompt engineering' },
        { name: 'AI Agents', icon: Users, description: 'Autonomous agents, multi-agent systems' }
      ]
    },
    'programming': {
      title: 'Programming Languages',
      icon: Code,
      color: 'electric-green',
      skills: [
        { name: 'Python', icon: Code, description: 'Advanced Python, data science libraries' },
        { name: 'R', icon: BarChart3, description: 'Statistical computing and data analysis' },
        { name: 'SQL', icon: Database, description: 'Database querying and optimization' },
        { name: 'Java', icon: Coffee, description: 'Object-oriented programming and enterprise applications' }
      ]
    },
    'frameworks': {
      title: 'Frameworks & Tools',
      icon: Wrench,
      color: 'electric-purple',
      skills: [
        { name: 'PyTorch', icon: Flame, description: 'Deep learning framework for research and production' },
        { name: 'TensorFlow', icon: Calculator, description: 'End-to-end machine learning platform' },
        { name: 'Scikit-learn', icon: BarChart, description: 'Machine learning library for Python' },
        { name: 'Langchain', icon: Link, description: 'Framework for developing LLM applications' },
        { name: 'Hugging Face', icon: Smile, description: 'Transformers and model hub' },
        { name: 'PowerBI', icon: PieChart, description: 'Business intelligence and data visualization' }
      ]
    },
    'databases': {
      title: 'Databases & Infrastructure',
      icon: Database,
      color: 'electric-blue',
      skills: [
        { name: 'Vector Databases', icon: Search, description: 'Similarity search and embeddings storage' },
        { name: 'Redis', icon: Zap, description: 'In-memory data structure store' },
        { name: 'SQL Databases', icon: HardDrive, description: 'Relational database management' },
        { name: 'Langgraph', icon: Network, description: 'Graph-based language processing' }
      ]
    },
    'specialized': {
      title: 'Specialized Skills',
      icon: TrendingUp,
      color: 'electric-green',
      skills: [
        { name: 'Algorithmic Trading', icon: TrendingUp, description: 'Quantitative finance and trading strategies' },
        { name: 'Quantitative Analysis', icon: BarChart3, description: 'Statistical modeling and data analysis' },
        { name: 'Financial Modeling', icon: DollarSign, description: 'Risk assessment and portfolio optimization' },
        { name: 'Data Engineering', icon: Wrench, description: 'ETL pipelines and data architecture' },
        { name: 'MLOps', icon: Settings, description: 'Model deployment and monitoring' },
        { name: 'Cloud Computing', icon: Cloud, description: 'AWS, GCP for scalable ML solutions' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section id="skills" className="py-20 px-4 relative">
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
            Technical{' '}
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          {/* Enhanced Category selector */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.entries(skillCategories).map(([key, category], index) => {
              const Icon = category.icon;
              const colorClasses = getColorClasses(category.color);
              
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 hover-lift ${
                    activeCategory === key
                      ? `${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} ${colorClasses.split(' ')[2]} bg-opacity-10 neon-glow`
                      : 'text-gray-400 border-gray-600 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Icon size={20} className="tech-icon" />
                  <span className="font-medium">{category.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Enhanced Skills grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="glass-strong p-6 rounded-xl hover-lift"
                  whileHover={{ y: -5, scale: 1.02 }}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <SkillIcon size={24} className="text-electric-blue" />
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
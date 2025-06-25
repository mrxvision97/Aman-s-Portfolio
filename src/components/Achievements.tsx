import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Users, Globe, Star, Calendar, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      title: 'IEEE Leadership Summit 2024',
      subtitle: 'Global Hackathon Winner',
      description: 'Secured 1st place among 80 teams from around the world at the IEEE Leadership Summit 2024 in Hyderabad.',
      icon: Trophy,
      color: 'electric-blue',
      stats: {
        position: '1st Place',
        teams: '80 teams',
        scope: 'Global'
      },
      details: [
        'Competed against top students from 50+ countries',
        'Led innovative AI solution development',
        'Presented to panel of IEEE industry experts',
        'Received recognition for outstanding leadership qualities'
      ],
      year: '2024'
    },
    {
      title: 'Bhasini Techathon 2024',
      subtitle: 'Winner - Google Cloud Partnership',
      description: 'Won 3rd Prize and Special Recognition award at Bhasini Technathon in partnership with Google Cloud and MachineHack.',
      icon: Award,
      color: 'electric-green',
      stats: {
        position: '3rd Prize',
        recognition: 'Special Award',
        partners: 'Google Cloud'
      },
      details: [
        'Partnership with Google Cloud and MachineHack',
        'Special Recognition for innovation',
        'Advanced AI/ML solution development',
        'Industry expert panel evaluation'
      ],
      year: '2024'
    },
    {
      title: 'GSTN National Level Hackathon',
      subtitle: 'Top 17 Finalist',
      description: 'Ranked in the top 17 out of 750+ participant teams, awarded INR 25,000 for innovative AI-driven tax solutions.',
      icon: Target,
      color: 'electric-purple',
      stats: {
        rank: 'Top 17',
        participants: '750+ teams',
        prize: 'INR 25,000'
      },
      details: [
        'Innovative AI-driven tax solutions',
        'National level competition recognition',
        'Significant monetary award',
        'Advanced problem-solving approach'
      ],
      year: '2024'
    },
    {
      title: 'Academic Excellence',
      subtitle: 'CGPA 9.0/10.0',
      description: 'Maintained exceptional academic performance throughout Computer Science program with consistent top rankings.',
      icon: Star,
      color: 'electric-blue',
      stats: {
        cgpa: '9.0/10.0',
        ranking: 'Top 5%',
        consistency: '6 semesters'
      },
      details: [
        'Consistently ranked in top 5% of the class',
        'Perfect scores in AI/ML related subjects',
        'Outstanding project implementations',
        'Dean\'s List recognition multiple times'
      ],
      year: '2022-Present'
    },
    {
      title: 'Research Impact',
      subtitle: 'Multi-domain Research',
      description: 'Actively engaged in research across Data Science, Finance, and Law domains with 5 hackathon wins.',
      icon: Zap,
      color: 'electric-green',
      stats: {
        domains: '3 fields',
        hackathons: '5 wins',
        impact: 'Multi-domain'
      },
      details: [
        'Active research in Data Science applications',
        'Financial technology innovations',
        'Legal tech solution development',
        'Multiple hackathon victories across domains'
      ],
      year: '2023-Present'
    },
    {
      title: 'Full Scholarship Recipient',
      subtitle: 'Shiv Nadar Foundation',
      description: 'Awarded full scholarships by the prestigious Shiv Nadar Foundation throughout secondary education and undergraduate studies.',
      icon: Globe,
      color: 'electric-purple',
      stats: {
        duration: '6+ years',
        coverage: 'Full tuition',
        foundation: 'Shiv Nadar'
      },
      details: [
        'Merit-based scholarship selection',
        'Complete educational support',
        'Prestigious foundation recognition',
        'Continuous academic excellence requirement'
      ],
      year: '2018-Present'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
    <section id="achievements" className="py-20 px-4 relative">
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
            Notable{' '}
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>

          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colorClasses = getColorClasses(achievement.color);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`glass-strong p-8 rounded-2xl hover-lift ${
                    index % 2 === 1 ? 'ml-auto lg:ml-8' : 'mr-auto lg:mr-8'
                  } max-w-5xl`}
                  whileHover={{ y: -5, scale: 1.01 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                >
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Enhanced icon and basic info */}
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`w-20 h-20 rounded-2xl ${colorClasses.split(' ')[2]} bg-opacity-10 flex items-center justify-center mb-4 neon-glow`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className={`w-10 h-10 ${colorClasses.split(' ')[0]} tech-icon`} />
                      </motion.div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                        <p className={`${colorClasses.split(' ')[0]} font-semibold text-lg`}>
                          {achievement.subtitle}
                        </p>
                        <span className="text-gray-400 text-sm">{achievement.year}</span>
                      </div>
                    </div>

                    {/* Enhanced content */}
                    <div className="flex-1">
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Enhanced stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(achievement.stats).map(([key, value]) => (
                          <motion.div 
                            key={key} 
                            className="text-center glass p-4 rounded-xl hover-lift"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className={`text-xl font-bold ${colorClasses.split(' ')[0]} mb-1`}>
                              {value}
                            </div>
                            <div className="text-gray-400 text-sm capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Enhanced details */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Highlights</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {achievement.details.map((detail, i) => (
                            <motion.div 
                              key={i} 
                              className="flex items-start gap-3 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.3 * index + 0.1 * i }}
                            >
                              <div className={`w-2 h-2 rounded-full ${colorClasses.split(' ')[2]} mt-2 flex-shrink-0`}></div>
                              <span className="text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced achievement badge */}
                  <div className="flex justify-center lg:justify-end mt-6">
                    <motion.div 
                      className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.split(' ')[2]} bg-opacity-10 ${colorClasses.split(' ')[0]} border ${colorClasses.split(' ')[1]} border-opacity-30 rounded-full text-sm font-medium hover-lift`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={16} />
                      <span>Achievement Unlocked</span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced summary stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-strong p-8 rounded-2xl hover-lift"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-8">Achievement Summary</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Trophy, label: 'Hackathon Wins', value: '5+', color: 'electric-blue' },
                { icon: Award, label: 'Academic Honors', value: '6+', color: 'electric-green' },
                { icon: Users, label: 'Lives Impacted', value: '1000+', color: 'electric-purple' },
                { icon: Globe, label: 'International Recognition', value: '2024', color: 'electric-blue' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                const colorClasses = getColorClasses(stat.color);
                
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${colorClasses.split(' ')[0]} tech-icon`} />
                    <div className={`text-3xl font-bold ${colorClasses.split(' ')[0]} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
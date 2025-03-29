import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Calendar, Building2, Briefcase } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-white text-center"
        >
          Professional Journey
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="ml-6 bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-6 h-6 text-purple-400" />
                      <h2 className="text-2xl font-bold text-white">{exp.company}</h2>
                    </div>
                    
                    <div className="mt-2 flex items-center space-x-3">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                      <p className="text-xl text-blue-300">{exp.role}</p>
                    </div>
                    
                    <div className="mt-2 flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <p className="text-gray-300">{exp.duration}</p>
                    </div>
                  </div>
                </div>

                <motion.ul 
                  className="mt-6 space-y-3"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {exp.description.map((point, i) => (
                    <motion.li 
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 }
                      }}
                      className="flex items-start space-x-3"
                    >
                      <span className="w-2 h-2 mt-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                      <span className="text-gray-200">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
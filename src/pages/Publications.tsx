import React from 'react';
import { motion } from 'framer-motion';
import { publications } from '../data';
import { ExternalLink, BookOpen, Calendar, Award } from 'lucide-react';

const Publications = () => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-white text-center"
        >
          Research Publications
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{pub.title}</h2>
                    </div>
                    
                    <div className="mt-4 flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{pub.conference}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{pub.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-gray-300 leading-relaxed"
                >
                  {pub.abstract}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;
import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data';
import { Github, Linkedin, Code2, FileText, Brain, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20"
        >
          <div className="md:flex">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:w-1/3 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 group-hover:opacity-100 transition-opacity" />
              <img
                src={aboutMe.image}
                alt={aboutMe.name}
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>
            
            <div className="p-8 md:w-2/3 bg-gray-900/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl font-bold text-white">{aboutMe.name}</h1>
                <p className="text-xl text-purple-400 mt-2">{aboutMe.title}</p>
                
                <div className="flex items-center space-x-4 mt-4">
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View Resume
                  </motion.a>
                </div>
                
                <p className="mt-6 text-gray-300 leading-relaxed">{aboutMe.bio}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Code2 className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.expertise.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.softSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="w-6 h-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">Hobbies</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.hobbies.map((hobby, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full"
                    >
                      {hobby}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex space-x-4"
              >
                <motion.a
                  href={aboutMe.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={aboutMe.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={aboutMe.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Code2 className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
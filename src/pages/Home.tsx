import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { aboutMe } from '../data';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <img
            src={aboutMe.image}
            alt={aboutMe.name}
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4">{aboutMe.name}</h1>
            <p className="text-2xl text-blue-400">{aboutMe.title}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={aboutMe.socials.github} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={aboutMe.socials.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={aboutMe.socials.leetcode} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Code2 className="w-6 h-6" />
            </a>
          </div>
          
          <div className="mt-12">
            <p className="text-xl leading-relaxed max-w-2xl">{aboutMe.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
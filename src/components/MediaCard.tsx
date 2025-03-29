import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { Media } from '../types';

interface MediaCardProps {
  item: Media;
  index: number;
}

const MediaCard: React.FC<MediaCardProps> = ({ item, index }) => {
  const getRandomGradient = () => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-teal-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`relative bg-gradient-to-br ${getRandomGradient()} rounded-xl overflow-hidden shadow-xl`}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="relative p-6 text-white">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
            {item.type}
          </span>
        </div>
        
        <div className="mt-6 flex items-center space-x-6">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <Star className="w-6 h-6 text-yellow-300 mr-2" />
            <span className="text-lg">IMDB: {item.imdbRating}</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <Star className="w-6 h-6 text-purple-300 mr-2" />
            <span className="text-lg">My Rating: {item.personalRating}</span>
          </motion.div>
        </div>
        
        <motion.a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center text-white hover:text-purple-200 transition-colors"
          whileHover={{ x: 5 }}
        >
          View Details
          <ExternalLink className="w-5 h-5 ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default MediaCard;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mediaList, financeResources } from '../data';
import { BookOpen, Globe, FileText, Clock, BookmarkIcon, Youtube } from 'lucide-react';
import MediaCard from '../components/MediaCard';

const Hobbies = () => {
  const [activeTab, setActiveTab] = useState<'media' | 'finance'>('media');
  const [mediaType, setMediaType] = useState<'all' | 'TV Shows' | 'movie' | 'anime'>('all');
  const [financeCategory, setFinanceCategory] = useState<'all' | 'reading' | 'tracking'>('all');
  const [resourceType, setResourceType] = useState<'all' | 'book' | 'article' | 'post' | 'youtube'>('all');

  const filteredMedia = mediaType === 'all' 
    ? mediaList 
    : mediaList.filter(item => item.type === mediaType);

  const filteredFinanceResources = financeResources.filter(resource => {
    if (financeCategory !== 'all' && resource.category !== financeCategory) return false;
    if (resourceType !== 'all' && resource.type !== resourceType) return false;
    return true;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <BookOpen className="w-6 h-6" />;
      case 'website':
        return <Globe className="w-6 h-6" />;
      case 'article':
        return <FileText className="w-6 h-6" />;
      case 'post':
        return <BookmarkIcon className="w-6 h-6" />;
      case 'youtube':
        return <Youtube className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Hobbies
        </motion.h1>

        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('media')}
            className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all ${
              activeTab === 'media'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Entertainment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('finance')}
            className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all ${
              activeTab === 'finance'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Personal Finance
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'media' && (
            <motion.div
              key="media"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex justify-center space-x-4 mb-12">
                {['all', 'TV Shows', 'movie', 'anime'].map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMediaType(type as any)}
                    className={`px-6 py-3 rounded-lg text-white/90 ${
                      mediaType === type 
                        ? 'bg-white/20 shadow-lg backdrop-blur-sm'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </motion.button>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredMedia.map((item, index) => (
                  <MediaCard key={index} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'finance' && (
            <motion.div
              key="finance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFinanceCategory('all')}
                  className={`px-6 py-3 rounded-lg ${
                    financeCategory === 'all'
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  All
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFinanceCategory('reading')}
                  className={`px-6 py-3 rounded-lg ${
                    financeCategory === 'reading'
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  Reading List
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFinanceCategory('tracking')}
                  className={`px-6 py-3 rounded-lg ${
                    financeCategory === 'tracking'
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  Tracking Tools
                </motion.button>
              </div>

              {financeCategory === 'reading' && (
                <motion.div 
                  className="flex justify-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {['all', 'book', 'article', 'post', 'youtube'].map((type) => (
                    <motion.button
                      key={type}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setResourceType(type as any)}
                      className={`px-4 py-2 rounded-lg ${
                        resourceType === type
                          ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/50'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {type === 'youtube' ? 'YouTube' : type.charAt(0).toUpperCase() + type.slice(1) + 's'}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              <motion.div 
                className="grid gap-6"
                layout
              >
                {filteredFinanceResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-morphism rounded-xl p-6 text-white"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-3 bg-white/10 rounded-lg text-purple-300 mr-4"
                        >
                          {getIcon(resource.type)}
                        </motion.div>
                        <div>
                          <h2 className="text-xl font-bold">{resource.name}</h2>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-purple-300 uppercase">{resource.type}</span>
                            {resource.author && (
                              <>
                                <span className="text-white/40">•</span>
                                <span className="text-sm text-white/80">{resource.author}</span>
                              </>
                            )}
                            {resource.subscribers && (
                              <>
                                <span className="text-white/40">•</span>
                                <span className="text-sm text-white/80">
                                  {resource.subscribers} subscribers
                                </span>
                              </>
                            )}
                            {resource.date && (
                              <>
                                <span className="text-white/40">•</span>
                                <span className="text-sm text-white/80 flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {resource.date}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <motion.a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-200"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <Globe className="w-5 h-5" />
                      </motion.a>
                    </div>
                    
                    <p className="mt-4 text-white/80 leading-relaxed">
                      {resource.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Hobbies;
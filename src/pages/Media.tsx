import React, { useState } from 'react';
import { mediaList } from '../data';
import { Star, ExternalLink } from 'lucide-react';

const Media = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'series' | 'movie' | 'anime'>('all');
  
  const filteredMedia = selectedType === 'all' 
    ? mediaList 
    : mediaList.filter(item => item.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Media Collection</h1>
        
        <div className="flex space-x-4 mb-8">
          {['all', 'series', 'movie', 'anime'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as any)}
              className={`px-4 py-2 rounded-lg ${
                selectedType === type 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMedia.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {item.type}
                  </span>
                </div>
                
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-gray-600">IMDB: {item.imdbRating}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-blue-400 mr-1" />
                    <span className="text-gray-600">My Rating: {item.personalRating}</span>
                  </div>
                </div>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
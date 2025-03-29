import React from 'react';
import { financeResources } from '../data';
import { ExternalLink, BookOpen, Globe, FileText } from 'lucide-react';

const Finance = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <BookOpen className="w-6 h-6" />;
      case 'website':
        return <Globe className="w-6 h-6" />;
      case 'article':
        return <FileText className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">Personal Finance Resources</h1>
        
        <div className="grid gap-8">
          {financeResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                    {getIcon(resource.type)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{resource.name}</h2>
                    <span className="text-sm text-blue-600 uppercase">{resource.type}</span>
                  </div>
                </div>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="mt-4 text-gray-600 leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Finance;
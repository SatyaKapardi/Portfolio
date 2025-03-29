import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Code, BookOpen, User, Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 h-screen w-16 bg-gray-900 flex flex-col items-center py-8 space-y-8">
      <Link to="/" className={`p-2 rounded-lg ${isActive('/') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
        <Home className="w-6 h-6 text-white" />
      </Link>
      <Link to="/experience" className={`p-2 rounded-lg ${isActive('/experience') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
        <Briefcase className="w-6 h-6 text-white" />
      </Link>
      <Link to="/projects" className={`p-2 rounded-lg ${isActive('/projects') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
        <Code className="w-6 h-6 text-white" />
      </Link>
      <Link to="/publications" className={`p-2 rounded-lg ${isActive('/publications') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
        <BookOpen className="w-6 h-6 text-white" />
      </Link>
      <Link to="/about" className={`p-2 rounded-lg ${isActive('/about') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
        <User className="w-6 h-6 text-white" />
      </Link>
      <Link to="/hobbies" className={`p-2 rounded-lg ${isActive('/hobbies') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
        <Heart className="w-6 h-6 text-white" />
      </Link>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import About from './pages/About';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="flex">
        <Navbar />
        <main className="flex-1 ml-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/about" element={<About />} />
              <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
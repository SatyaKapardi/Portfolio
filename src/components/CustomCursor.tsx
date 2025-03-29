import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorBorder = document.querySelector('.cursor-border');
    
    const moveCursor = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      cursor?.setAttribute('style', `transform: translate3d(${mouseX}px, ${mouseY}px, 0)`);
      cursorBorder?.setAttribute('style', `transform: translate3d(${mouseX - 15}px, ${mouseY - 15}px, 0)`);
    };

    window.addEventListener('mousemove', moveCursor);

    const addHoverClass = () => cursorBorder?.classList.add('hover');
    const removeHoverClass = () => cursorBorder?.classList.remove('hover');

    const elements = document.querySelectorAll('a, button');
    elements.forEach(el => {
      el.addEventListener('mouseover', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      elements.forEach(el => {
        el.removeEventListener('mouseover', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" />
      <div className="cursor-border" />
    </>
  );
};

export default CustomCursor;
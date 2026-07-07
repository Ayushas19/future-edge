import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Preloader.css';

const TypewriterText = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span style={{ color: 'var(--accent-yellow)' }}>
      {currentText}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ display: 'inline-block', width: '4px', marginLeft: '4px', backgroundColor: 'var(--accent-yellow)', height: '0.8em', verticalAlign: 'baseline' }}
      />
    </span>
  );
};

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    // "Future Edge." is 12 chars. Wait 2.5s total before completing.
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="preloader cinematic-preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ backgroundColor: '#141413' }}
    >
      <motion.div layoutId="hero-title" className="preloader-title">
        <TypewriterText text="Future Edge." delay={120} />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;

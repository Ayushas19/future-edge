import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Hero.css';

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
    <span className="text-gradient-brand">
      {currentText}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ color: 'var(--accent-yellow)', display: 'inline-block', width: '2px', marginLeft: '4px' }}
      >
        |
      </motion.span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Shapes / Glows */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      
      <div className="container hero-container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="heading-display">
              <TypewriterText text="Future Edge." delay={150} /><br />
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                Best Digital Marketing.
              </motion.span>
            </h1>
            
            <p className="hero-subtitle">
              Experience <span className="highlight">2x - 5x performance</span> with AI optimized campaigns. 
              Yield good ROI on the same ad spend.
            </p>
            
            <div className="hero-actions">
              <a href="tel:+916393213527" className="btn btn-primary btn-large">
                Contact Us Now
              </a>
              <a href="#services" className="btn btn-outline btn-large">
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.img 
              src="/images/hero_marketing.png" 
              alt="Digital Marketing AI" 
              className="hero-image"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

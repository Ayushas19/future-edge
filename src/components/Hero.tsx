import { motion } from 'framer-motion';
import './Hero.css';

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
              <motion.div layoutId="hero-title" className="text-gradient-brand" style={{ display: 'inline-block' }}>
                Future Edge.
              </motion.div>
              <br />
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
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

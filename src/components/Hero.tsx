import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Hero.css';

const MagneticButton = ({ children, className, href }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 50 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 50 });

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  
  const bgOffsetX = useTransform(smoothMouseX, [-0.5, 0.5], ['-10%', '10%']);
  const bgOffsetY = useTransform(smoothMouseY, [-0.5, 0.5], ['-10%', '10%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const subtitleWords = "Experience 2x-5x performance with AI optimized campaigns. Yield good ROI on the same ad spend.".split(" ");

  return (
    <section className="hero">
      {/* Interactive Background Mesh */}
      <motion.div className="hero-glow hero-glow-1" style={{ x: bgOffsetX, y: bgOffsetY }} />
      <motion.div className="hero-glow hero-glow-2" style={{ x: bgOffsetX, y: bgOffsetY }} />
      
      <div className="container hero-container">
        <div className="hero-grid">
          
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-display">
              <motion.div layoutId="hero-title" className="text-gradient-brand" style={{ display: 'inline-block' }}>
                Future Edge.
              </motion.div>
              <br />
              <div className="kinematic-wrapper">
                <span className="text-gradient">Best Digital Marketing.</span>
                <motion.div 
                  className="kinematic-mask"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
            </h1>
            
            <p className="hero-subtitle">
              {subtitleWords.map((word, i) => (
                <span key={i} className="word-wrapper">
                  <motion.span
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + (i * 0.03), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={word.includes("2x-5x") || word.includes("AI") || word.includes("ROI") ? "highlight" : ""}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <MagneticButton href="tel:+916393213527" className="btn btn-primary btn-large">
                Contact Us Now
              </MagneticButton>
              <MagneticButton href="#services" className="btn btn-outline btn-large">
                View Services
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* 3D Interactive Parallax Scene */}
          <div className="hero-3d-scene">
            <motion.div 
              className="hero-image-wrapper"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="floating-badge badge-1"
                style={{ translateZ: 50 }}
              >
                <div className="badge-icon">📈</div>
                <div className="badge-text">+300% ROI</div>
              </motion.div>
              
              <motion.div 
                className="floating-badge badge-2"
                style={{ translateZ: 80 }}
              >
                <div className="badge-icon">🎯</div>
                <div className="badge-text">Targeted Ads</div>
              </motion.div>

              <motion.div 
                className="floating-badge badge-3"
                style={{ translateZ: 100 }}
              >
                <div className="badge-icon">🤖</div>
                <div className="badge-text">AI Optimized</div>
              </motion.div>

              <img 
                src="/images/hero_marketing.png" 
                alt="Digital Marketing AI" 
                className="hero-image"
              />
              
              <div className="hero-image-glow" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

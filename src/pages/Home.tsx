import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle, ArrowRight, Code, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import ServicesCarousel from '../components/ServicesCarousel';

const Home = () => {
  return (
    <div className="agency-page">
      {/* HEADER & TRUST METRICS */}
      <section className="agency-header text-center">
        {/* Tech Animation Background */}
        <div className="tech-animation-bg">
           <motion.div className="tech-element tech-element-1" animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }}><Code size={40} /></motion.div>
           <motion.div className="tech-element tech-element-2" animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity }}><Database size={32} /></motion.div>
           <motion.div className="tech-element tech-element-3" animate={{ rotate: [0, 180, 360], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Globe size={64} /></motion.div>
        </div>

        <div className="container relative z-10">
          <div className="trust-badges">
            <span className="badge badge-trust">Trusted by 50+ Nation & Y.T.</span>
            <span className="badge badge-trust">1000+ Students & Colleges</span>
          </div>
          
          <motion.h1 
            className="heading-display mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Future Edge<br />
            <span className="text-gradient">BEST D.M. Co.</span>
          </motion.h1>
          
          <div className="hook-banner">
            <h3>Why D.M. in 2026?</h3>
            <p>Digital Marketing is no longer an option, it's the lifeline of modern business scaling.</p>
          </div>
        </div>
      </section>

      {/* CORE NAVIGATION / ACTION BUTTONS */}
      <section className="agency-actions">
        <div className="container">
          <div className="action-buttons-flex justify-center">
            <a href="#course-funnel" className="btn btn-primary btn-large">OUR D.M. Course</a>
            <a href="#services-funnel" className="btn btn-outline btn-large">OUR D.M. Services</a>
          </div>
          
          <div className="team-banner flex-between mt-4">
            <div className="team-founder">
               <h4>Meet OUR Founder</h4>
               <Link to="/vivek-singh" className="text-link">Know More (Vivek Singh) <ArrowRight size={16} /></Link>
            </div>
            <div className="team-expert">
               <h4>Talk to OUR Experts</h4>
               <a href="tel:+916393213527" className="btn btn-primary">Schedule a Call</a>
            </div>
          </div>
          
          <div className="portfolio-banner text-center mt-4">
            <a href="#services-funnel" className="text-link">See OUR Portfolio <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* SPLIT FUNNEL SECTION */}
      <section className="split-section section">
        <div className="container">
          <div className="split-grid">
            
            {/* LEFT: COURSE FUNNEL */}
            <div className="funnel-col course-funnel" id="course-funnel">
              <h2 className="funnel-header">OUR DM Course</h2>
              <div className="video-embed flex-center">
                 <PlayCircle size={48} className="play-icon" />
                 <span>YouTube Video Embed Placeholder</span>
              </div>
              <div className="funnel-details">
                <div className="detail-item"><strong>About Course:</strong> Master performance marketing, SEO, and social media.</div>
                <div className="detail-item"><strong>Trainer:</strong> Jayesh Sir</div>
                <div className="detail-item"><strong>Job Profile:</strong> Get hired as a Growth Manager or DM Executive.</div>
                <div className="detail-item"><strong>Offer:</strong> 50% Off Early Bird Registration.</div>
              </div>
              <Link to="/courses" className="btn btn-primary w-full mt-4 justify-center">Join Now</Link>
              
              <div className="mini-testimony mt-4">
                <p><i>"Best DM course I've ever taken! Highly recommended."</i></p>
                <span className="text-sm text-secondary">- Student A</span>
              </div>
            </div>

            {/* RIGHT: SERVICES FUNNEL */}
            <div className="funnel-col services-funnel" id="services-funnel">
              <h2 className="funnel-header">OUR D.M. Services</h2>
              <p className="intro-text">We scale businesses with data-driven marketing, generating massive ROI.</p>
              
              <div className="service-pillars">
                <div className="pillar-block">Paid Ads & ROI</div>
                <div className="pillar-block">Social Media & Organic</div>
                <div className="pillar-block">CRM Automation</div>
              </div>

              <div className="workflow-process mt-4">
                <h4>Process of workflow</h4>
                <ul className="process-list">
                  <li><CheckCircle size={16} className="text-accent" /> Discovery Call</li>
                  <li><CheckCircle size={16} className="text-accent" /> Strategy Plan</li>
                  <li><CheckCircle size={16} className="text-accent" /> Execution & Optimization</li>
                </ul>
              </div>

              <div className="action-buttons-flex mt-4">
                <a href="#contact" className="btn btn-primary">Get in Touch</a>
                <a href="#services" className="btn btn-outline">Learn More</a>
              </div>
              
              <div className="social-proof-small mt-4">
                <p>Trusted by 50+ clients.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Existing Carousel */}
      <ServicesCarousel />
    </div>
  );
};

export default Home;

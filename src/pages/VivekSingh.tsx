import { motion } from 'framer-motion';
import { PlayCircle, Star, ArrowRight, Video, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VivekSingh.css';

const VivekSingh = () => {
  return (
    <div className="vivek-page">
      {/* HERO SECTION */}
      <section className="section vivek-hero">
        <div className="container">
          <motion.div 
            className="vivek-hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-display">Vivek Singh</h1>
            
            <div className="vivek-titles">
              <span className="badge">Business Growth Manager</span>
              <Link to="/" className="badge badge-link">Founder - Future Edge</Link>
              <span className="badge">CEO - Shiksha Enterprise</span>
            </div>

            <div className="vivek-media-grid">
              <div className="vivek-photo-block">
                <img src="/images/hero_marketing.png" alt="Vivek Singh" className="vivek-image" />
              </div>
              <div className="vivek-video-block flex-center">
                <PlayCircle size={64} className="play-icon" />
                <span>Watch Intro</span>
              </div>
            </div>
            
            <div className="vivek-ctas">
              <a href="#contact" className="btn btn-primary btn-large">Connect Now</a>
              <a href="#consultancy" className="btn btn-outline btn-large">1:1 Consultancy</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section vivek-trusted">
        <div className="container text-center">
          <span className="text-overline">Trusted By</span>
          <div className="trusted-logos">
            <h3>Brand A</h3>
            <h3>Brand B</h3>
            <h3>Brand C</h3>
            <h3>Brand D</h3>
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="section vivek-content bg-alt">
        <div className="container">
          <div className="content-grid">
            
            <div className="content-box">
              <Briefcase className="box-icon" />
              <h3>Main Profession Box</h3>
              <p>Leading digital transformation and business growth strategies for top-tier agencies.</p>
            </div>
            
            <div className="content-box">
              <Video className="box-icon" />
              <h3>Videos (D.M.)</h3>
              <p>A gallery of masterclasses and digital marketing strategies.</p>
              <a href="#" className="text-link">View Gallery <ArrowRight size={16} /></a>
            </div>

            <div className="content-box">
              <Award className="box-icon" />
              <h3>DM Course</h3>
              <p>Master digital marketing with my exclusive training program.</p>
              <Link to="/" className="text-link">Join Course <ArrowRight size={16} /></Link>
            </div>

            <div className="content-box highlight-box">
              <Star className="box-icon" />
              <h3>Gyan Bazi</h3>
              <p>Deep dives, raw thoughts, and knowledge sharing on marketing trends in 2026.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section vivek-testimonials">
        <div className="container text-center">
          <h2 className="heading-h2">What People Say</h2>
          <div className="testimony-grid">
            <div className="testimony-card">
              <p>"Vivek completely transformed our business growth trajectory."</p>
              <h4>- CEO, Tech Corp</h4>
            </div>
            <div className="testimony-card">
              <p>"The 1:1 consultancy provided unmatched ROI for our agency."</p>
              <h4>- Founder, Startup Inc</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VivekSingh;

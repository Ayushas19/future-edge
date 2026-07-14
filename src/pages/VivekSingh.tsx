import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VivekSingh.css';

const VivekSingh = () => {
  return (
    <div className="vivek-page">
      {/* HERO SECTION */}
      <section className="section vivek-hero">
        <div className="container">
          <div className="founder-split-grid align-center">
            
            <motion.div 
              className="vivek-hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-overline">Meet Our Founder</span>
              <h1 className="heading-display text-high-contrast" style={{fontSize: '3rem'}}>Vivek Singh Bhadauriya</h1>
              <h2 className="heading-h3 mt-2 text-gradient-brand">Marketing Strategist, Entrepreneur & Digital Growth Consultant</h2>
              
              <p className="mt-4 text-secondary" style={{fontSize: '1.1rem', lineHeight: 1.7}}>
                With an MBA in Marketing and years of hands-on experience, Vivek founded Future Edge Digital Marketing with a clear mission—to provide businesses with data-driven marketing solutions that deliver real results.
              </p>
              
              <p className="mt-3 text-secondary" style={{fontSize: '1.1rem', lineHeight: 1.7}}>
                He believes that marketing should not be an expense; it should be an investment that generates a positive return. Under his leadership, Future Edge has grown from a specialized marketing agency into a comprehensive digital ecosystem offering end-to-end branding, advertising, and development services.
              </p>

              <div className="quote-block mt-5">
                <p className="quote-text">
                  "Great marketing doesn't just sell a product—it builds a brand, creates trust, and drives sustainable growth."
                </p>
                <span className="quote-author">— Vivek Singh Bhadauriya</span>
              </div>
            </motion.div>

            <motion.div 
              className="vivek-image-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="vivek-photo-wrapper">
                <div className="vivek-photo-placeholder flex-center">
                  <span>Founder Portrait</span>
                </div>
                {/* Floating elements for visual flair */}
                <div className="floating-badge badge-1">
                  <TrendingUp size={20} className="text-accent" />
                  <span>Growth Expert</span>
                </div>
                <div className="floating-badge badge-2">
                  <Award size={20} className="text-accent" />
                  <span>MBA Marketing</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="heading-h2">Leadership & Vision</h2>
            <p className="text-secondary mx-auto mt-3" style={{maxWidth: '800px', fontSize: '1.1rem'}}>
              A commitment to bridging the gap between strategic business objectives and digital execution.
            </p>
          </div>
          
          <div className="leadership-grid">
            <div className="leadership-card">
              <Target size={36} className="text-accent mb-4" />
              <h3>Future Edge Digital Marketing</h3>
              <p className="mt-2 text-secondary">
                Guiding a team of creative and technical experts to deliver full-funnel marketing solutions for startups and enterprises alike. Focus on ROI-driven campaigns and sustainable business growth.
              </p>
            </div>
            
            <div className="leadership-card">
              <Users size={36} className="text-accent mb-4" />
              <h3>Future Edge Academy</h3>
              <p className="mt-2 text-secondary">
                His vision led to the creation of the Academy, bridging the gap between industry requirements and academic learning, ensuring the next generation of marketers is prepared for real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="heading-h2 mb-4">Looking for Business Growth Consulting?</h2>
          <p className="text-secondary mx-auto mb-5" style={{maxWidth: '600px'}}>
            Schedule a 1-on-1 strategy session to discuss your business challenges and uncover new digital opportunities.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">Book a Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default VivekSingh;

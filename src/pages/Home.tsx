import { PlayCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import Hero from '../components/Hero';
import ServicesCarousel from '../components/ServicesCarousel';

const Home = () => {
  return (
    <div className="agency-page">
      <Hero />

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
              <h2 className="funnel-header">Digital Marketing Course</h2>
              <div className="video-embed flex-center">
                 <PlayCircle size={48} className="play-icon" />
                 <span>Watch Course Brochure</span>
              </div>
              <div className="funnel-details">
                <div className="detail-item"><strong>About Course:</strong> Join Our Digital Marketing Course to Learn & Grow Your Career.</div>
                <div className="detail-item"><strong>Trainer:</strong> Expert Faculty</div>
                <div className="detail-item"><strong>Job Profile:</strong> Get hired as a Marketing Executive.</div>
                <div className="detail-item"><strong>Offer:</strong> Contact for latest batch details.</div>
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
              <p className="intro-text">Professional digital solutions tailored to your business needs.</p>
              
              <div className="service-pillars">
                <div className="pillar-block"><strong>Website Creation:</strong> Responsive design, SEO and fast loading</div>
                <div className="pillar-block"><strong>Podcast Shoot & Edit:</strong> High-quality audio/video recording & post-production</div>
                <div className="pillar-block"><strong>Ecommerce Listing:</strong> Drive sales with key product details</div>
                <div className="pillar-block"><strong>B2B Business Marketing:</strong> Strategies for business growth</div>
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

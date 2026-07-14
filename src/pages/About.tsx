import { Target, Eye, Lightbulb, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero section">
        <div className="container">
          <div className="text-center" style={{maxWidth: '900px', margin: '0 auto'}}>
            <span className="text-overline">About Us</span>
            <h1 className="heading-display text-high-contrast">Building Brands. Driving Growth. Creating Digital Success.</h1>
            <p className="about-hero-desc mt-4">
              Future Edge Digital Marketing is a full-service digital marketing agency and marketing consultancy based in Kanpur, dedicated to helping businesses grow through strategic planning, creative execution, and performance-driven digital solutions. We partner with startups, SMEs, educational institutions, healthcare organizations, manufacturers, retail businesses, and established enterprises to build strong brands, generate quality leads, and achieve sustainable business growth.
            </p>
            <p className="about-hero-desc mt-3">
              We believe that successful marketing goes beyond running advertisements or posting on social media. Every business has unique goals, challenges, and customers. That's why we take a strategic approach—understanding your business, analyzing your market, and designing customized marketing solutions that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section bg-light">
        <div className="container">
          <div className="split-grid align-center">
            <div className="story-image-wrapper">
              <div className="story-image-placeholder flex-center">
                <span className="placeholder-text">Future Edge Journey</span>
              </div>
            </div>
            <div className="story-content">
              <span className="text-overline">Our Story</span>
              <h2 className="heading-h2">Bridging Creative Marketing and Business Strategy</h2>
              <p className="mt-4 text-secondary" style={{fontSize: '1.05rem', lineHeight: 1.7}}>
                Future Edge Digital Marketing was founded with a simple vision—to bridge the gap between creative marketing and business strategy.
              </p>
              <p className="mt-3 text-secondary" style={{fontSize: '1.05rem', lineHeight: 1.7}}>
                Many businesses invest heavily in marketing but struggle to see measurable outcomes because their efforts lack planning, consistency, or integration. We recognized that businesses need more than individual marketing services; they need a trusted growth partner capable of aligning branding, technology, content, advertising, and analytics into one cohesive strategy.
              </p>
              <p className="mt-3 text-secondary" style={{fontSize: '1.05rem', lineHeight: 1.7}}>
                At the same time, we launched Future Edge Academy to equip aspiring marketers, entrepreneurs, and professionals with practical digital marketing skills through hands-on learning, live projects, internships, and industry mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-icon"><Target size={40} /></div>
              <h3>Our Mission</h3>
              <p>Our mission is to empower businesses and professionals with innovative, ethical, and result-oriented digital marketing solutions that create sustainable growth.</p>
              <p className="mt-3">We strive to become a trusted marketing partner by delivering customized strategies, measurable outcomes, and long-term value for every client we serve.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><Eye size={40} /></div>
              <h3>Our Vision</h3>
              <p>Our vision is to become one of India's most respected digital marketing and business consulting organizations by combining strategy, creativity, technology, and education to help businesses succeed in an increasingly digital world.</p>
              <p className="mt-3">We aspire to build a future where every business—regardless of its size—has access to professional marketing expertise that drives meaningful growth and lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="heading-h2">What Makes Future Edge Different?</h2>
            <p className="text-secondary mx-auto mt-3" style={{maxWidth: '700px', fontSize: '1.1rem'}}>
              Unlike traditional agencies that focus on isolated marketing activities, Future Edge delivers complete marketing ecosystems designed around your business objectives.
            </p>
          </div>
          
          <div className="diff-grid">
            <div className="diff-card">
              <Lightbulb className="diff-icon" size={32} />
              <h4>Strategy Before Execution</h4>
              <p>Every project begins with understanding your business, target audience, competitors, and market opportunities. This ensures campaigns align with long-term goals.</p>
            </div>
            <div className="diff-card">
              <HeartHandshake className="diff-icon" size={32} />
              <h4>End-to-End Marketing Solutions</h4>
              <p>From website development and branding to SEO, paid advertising, and AI automation, we provide comprehensive services through a single integrated team.</p>
            </div>
            <div className="diff-card">
              <Target className="diff-icon" size={32} />
              <h4>Data-Driven Decision Making</h4>
              <p>We believe every marketing decision should be supported by insights. We optimize strategies continuously to improve return on investment.</p>
            </div>
            <div className="diff-card">
              <ShieldCheck className="diff-icon" size={32} />
              <h4>Ethical Marketing Practices</h4>
              <p>Transparency, integrity, and accountability form our foundation. We provide clear reporting and maintain open communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section">
        <div className="container">
          <div className="split-grid align-center">
            <div>
              <span className="text-overline">Our Approach</span>
              <h2 className="heading-h2">A Structured Process for Success</h2>
              <p className="text-secondary mt-3 mb-4">Every successful marketing campaign begins with a clear understanding of the business behind it.</p>
              
              <ul className="approach-list">
                <li><span className="step-num">1</span> Business Discovery & Goal Setting</li>
                <li><span className="step-num">2</span> Market & Competitor Research</li>
                <li><span className="step-num">3</span> Marketing Strategy Development</li>
                <li><span className="step-num">4</span> Creative Planning & Content Production</li>
                <li><span className="step-num">5</span> Campaign Execution</li>
                <li><span className="step-num">6</span> Performance Monitoring & Optimization</li>
              </ul>
            </div>
            <div className="bg-card approach-card">
              <h3>Why Businesses Choose Future Edge</h3>
              <ul className="choose-us-list mt-4">
                <li><CheckCircle size={18} className="text-accent" /> Customized marketing strategies</li>
                <li><CheckCircle size={18} className="text-accent" /> MBA-qualified marketing professionals</li>
                <li><CheckCircle size={18} className="text-accent" /> Creative and technical expertise under one roof</li>
                <li><CheckCircle size={18} className="text-accent" /> Transparent communication and reporting</li>
                <li><CheckCircle size={18} className="text-accent" /> Focus on measurable business outcomes</li>
                <li><CheckCircle size={18} className="text-accent" /> Long-term partnerships built on trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S GROW TOGETHER CTA */}
      <section className="section bg-dark text-white text-center">
        <div className="container">
          <h2 className="heading-h2" style={{color: '#fff'}}>Let's Grow Together</h2>
          <p className="mx-auto mt-4 mb-5" style={{maxWidth: '700px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)'}}>
            Every successful business deserves a marketing partner that understands its vision. If you're ready to strengthen your digital presence and unlock new growth opportunities, we'd love to be part of your journey.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{backgroundColor: 'var(--accent-yellow)', color: '#111', border: 'none'}}>Partner With Us Today</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

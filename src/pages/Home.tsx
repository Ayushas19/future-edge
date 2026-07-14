import { ArrowRight, Lightbulb, BarChart, Layers, Users, MessageSquare, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import Hero from '../components/Hero';
import ServicesCarousel from '../components/ServicesCarousel';

const Home = () => {
  return (
    <div className="agency-page">
      <Hero />

      {/* STATISTICS SECTION */}
      <section className="section stats-section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="text-overline">Future Edge by Numbers</span>
            <h2 className="heading-h2">Delivering Measurable Impact</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Businesses Served</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">1200+</h3>
              <p className="stat-label">Successful Campaigns</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">2000+</h3>
              <p className="stat-label">Students Trained</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Industries Worked With</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Marketing Experts</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT FUTURE EDGE */}
      <section className="section about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="text-overline">About Future Edge</span>
              <h2 className="heading-h2">Your Growth Partner, Not Just Another Marketing Agency</h2>
              <p className="about-text">
                Most agencies focus on running ads or creating social media posts. At Future Edge, we begin with strategy. Every campaign starts by understanding your business model, customer journey, competitive landscape, and growth objectives. From there, our team designs integrated marketing systems that connect branding, digital advertising, SEO, content, websites, and automation to deliver measurable business results.
              </p>
              <p className="about-text mt-3">
                Our team includes MBA-qualified marketing professionals, creative designers, developers, photographers, videographers, SEO specialists, and performance marketers who collaborate to build customized growth strategies for startups, SMEs, educational institutions, healthcare providers, manufacturers, retail brands, and corporate organizations.
              </p>
              <div className="mt-4">
                <Link to="/about" className="btn btn-primary">Know More About Us <ArrowRight size={16} style={{marginLeft: '0.5rem'}} /></Link>
              </div>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image-placeholder flex-center">
                <div className="image-overlay"></div>
                <h3 className="placeholder-text">Future Edge Team</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FUTURE EDGE */}
      <section className="section features-section" id="features">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-overline">Why Choose Future Edge</span>
            <h2 className="heading-h2">We Build Marketing Systems, Not Just Campaigns</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Lightbulb size={24} /></div>
              <h3 className="feature-title">Strategy Before Execution</h3>
              <p className="feature-desc">Every project begins with research, audience analysis, and a tailored marketing roadmap.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BarChart size={24} /></div>
              <h3 className="feature-title">Data-Driven Decisions</h3>
              <p className="feature-desc">Campaigns are monitored continuously using analytics to improve performance and return on investment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Layers size={24} /></div>
              <h3 className="feature-title">Integrated Marketing</h3>
              <p className="feature-desc">Branding, SEO, paid advertising, content, websites, and automation work together instead of in isolation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Users size={24} /></div>
              <h3 className="feature-title">Experienced Team</h3>
              <p className="feature-desc">MBA marketers, certified advertisers, designers, developers, writers, photographers, and video editors under one roof.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><MessageSquare size={24} /></div>
              <h3 className="feature-title">Transparent Communication</h3>
              <p className="feature-desc">Regular reporting, dedicated account managers, and clear performance metrics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Handshake size={24} /></div>
              <h3 className="feature-title">Long-Term Partnerships</h3>
              <p className="feature-desc">We focus on sustainable growth rather than short-term gains.</p>
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

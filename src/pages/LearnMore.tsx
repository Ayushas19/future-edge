import { Target, TrendingUp, ShieldCheck, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './LearnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-more-page">
      {/* HERO SECTION */}
      <section className="learn-hero section">
        <div className="container">
          <div className="text-center" style={{maxWidth: '900px', margin: '0 auto'}}>
            <span className="text-overline">Deep Dive</span>
            <h1 className="heading-display text-high-contrast">Excellence in Digital Execution</h1>
            <p className="learn-hero-desc mt-4">
              At Future Edge Digital Marketing, we do not believe in one-size-fits-all solutions. Every service we offer—whether it's SEO, performance marketing, or custom website development—is meticulously crafted to align with your unique business goals and market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="section bg-light">
        <div className="container">
          <div className="split-grid align-center">
            <div className="learn-content-block">
              <h2 className="heading-h2">Our Methodology</h2>
              <p className="mt-4 text-secondary" style={{fontSize: '1.1rem', lineHeight: 1.7}}>
                When you partner with us for any of our specialized services, you are tapping into a structured, data-driven methodology.
              </p>
              <ul className="method-list mt-4">
                <li>
                  <div className="method-icon"><Target size={20} /></div>
                  <div>
                    <h4>1. Discovery & Audit</h4>
                    <p>We begin by analyzing your current digital footprint, identifying gaps, and understanding your audience.</p>
                  </div>
                </li>
                <li>
                  <div className="method-icon"><Zap size={20} /></div>
                  <div>
                    <h4>2. Strategic Planning</h4>
                    <p>We develop a custom roadmap detailing exactly what channels, tactics, and technologies will drive the best ROI.</p>
                  </div>
                </li>
                <li>
                  <div className="method-icon"><TrendingUp size={20} /></div>
                  <div>
                    <h4>3. Execution & Scaling</h4>
                    <p>Our specialists execute the campaigns while continuously testing and optimizing for maximum performance.</p>
                  </div>
                </li>
                <li>
                  <div className="method-icon"><BarChart size={20} /></div>
                  <div>
                    <h4>4. Reporting & Analytics</h4>
                    <p>Complete transparency with regular performance reports and strategic reviews.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="learn-image-block">
              <div className="learn-image-placeholder flex-center">
                <span>Data-Driven Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FUTURE EDGE ADVANTAGE */}
      <section className="section">
        <div className="container text-center">
          <h2 className="heading-h2 mb-5">The Future Edge Advantage</h2>
          <div className="advantage-grid">
            <div className="advantage-card">
              <ShieldCheck size={32} className="text-accent mb-3" />
              <h3>Quality Assured</h3>
              <p>Every deliverable undergoes strict quality control by our senior marketing strategists before it reaches you.</p>
            </div>
            <div className="advantage-card">
              <TrendingUp size={32} className="text-accent mb-3" />
              <h3>ROI Focused</h3>
              <p>We don't track vanity metrics. We measure our success by the actual business value and revenue we generate for you.</p>
            </div>
            <div className="advantage-card">
              <Target size={32} className="text-accent mb-3" />
              <h3>Expert Execution</h3>
              <p>Our team consists of MBA-qualified professionals and certified technical experts dedicated to your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-dark text-white text-center">
        <div className="container">
          <h2 className="heading-h2" style={{color: '#fff'}}>Ready to see it in action?</h2>
          <p className="mx-auto mt-4 mb-5" style={{maxWidth: '700px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)'}}>
            Let's discuss how our specialized services can be tailored to solve your specific business challenges.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{backgroundColor: 'var(--accent-yellow)', color: '#111', border: 'none'}}>Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;

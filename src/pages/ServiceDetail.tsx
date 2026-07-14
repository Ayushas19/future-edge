import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle, Search, Globe, MousePointerClick, Smartphone, TrendingUp, Share2, PenTool, Video, MapPin, ShoppingBag, Bot } from 'lucide-react';
import './ServiceDetail.css';

const iconMap: Record<string, any> = {
  Search, Globe, MousePointerClick, Smartphone, TrendingUp, Share2, PenTool, Video, MapPin, ShoppingBag, Bot
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !servicesData[slug]) {
    return <Navigate to="/digital-marketing-services-kanpur" replace />;
  }

  const service = servicesData[slug];
  const IconComponent = iconMap[service.heroImage] || Target;

  return (
    <div className="service-detail-page">
      {/* HERO SECTION */}
      <section className="service-hero section">
        <div className="container">
          <Link to="/digital-marketing-services-kanpur" className="back-link mb-4 inline-flex items-center text-secondary">
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>
          <div className="service-hero-grid">
            <div className="service-hero-content">
              <span className="text-overline">Future Edge Services</span>
              <h1 className="heading-display text-high-contrast mt-2">{service.title}</h1>
              <p className="service-hero-subtitle mt-4">{service.shortDesc}</p>
              <div className="mt-5">
                <Link to="/contact" className="btn btn-primary btn-large">Request a Custom Proposal</Link>
              </div>
            </div>
            <div className="service-hero-icon-wrapper flex-center">
              <IconComponent size={120} className="text-accent hero-icon-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-800 mx-auto text-center">
            <h2 className="heading-h2">Service Overview</h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES & BENEFITS GRID */}
      <section className="section">
        <div className="container">
          <div className="split-grid">
            
            {/* Features */}
            <div className="detail-card">
              <h3 className="heading-h3 mb-4">What's Included</h3>
              <ul className="detail-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle size={24} className="text-accent shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className="text-secondary mt-1">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="detail-card bg-primary-dark">
              <h3 className="heading-h3 mb-4 text-white">Business Benefits</h3>
              <ul className="detail-list benefits-list">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <div className="benefit-number">{idx + 1}</div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">{benefit.title}</h4>
                      <p className="text-white-80 mt-1">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="heading-h2">Ready to scale with {service.title}?</h2>
          <p className="mx-auto mt-4 mb-5" style={{ maxWidth: '600px', color: 'var(--text-secondary)' }}>
            Let's discuss how we can tailor this service to meet your exact business goals and drive measurable ROI.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">Book a Free Strategy Session</Link>
        </div>
      </section>
    </div>
  );
};

// Fallback icon import needed for TypeScript compilation if IconComponent is missing
import { Target } from 'lucide-react';

export default ServiceDetail;

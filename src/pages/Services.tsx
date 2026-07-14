import { Search, Globe, MousePointerClick, Smartphone, TrendingUp, Share2, PenTool, Video, MapPin, ShoppingBag, Bot, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="services-hero section">
        <div className="container">
          <div className="services-hero-content text-center">
            <h1 className="heading-display text-high-contrast">Complete Digital Marketing Services That Drive Business Growth</h1>
            <h2 className="heading-h2 mt-4 text-gradient-brand">Grow Faster with a Complete Marketing Partner</h2>
            <p className="services-hero-desc mx-auto mt-4">
              At Future Edge Digital Marketing, we don't believe in isolated marketing efforts. We create integrated marketing strategies that combine branding, digital advertising, search engine optimization, content creation, web development, automation, and analytics to help businesses generate leads, increase sales, and build long-term brand value.
            </p>
            <p className="services-hero-desc mx-auto mt-3">
              Whether you are a startup, local business, manufacturer, educational institution, healthcare provider, or established enterprise, our experienced team develops customized marketing solutions aligned with your business goals.
            </p>
            <div className="action-buttons-flex justify-center mt-5">
              <Link to="/contact" className="btn btn-primary btn-large">Get Free Marketing Consultation</Link>
              <Link to="/contact" className="btn btn-outline btn-large">Request a Custom Proposal</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-overline">Why Choose Future Edge?</span>
            <h2 className="heading-h2">Strategy Before Services</h2>
            <p className="intro-text mx-auto" style={{maxWidth: '800px'}}>
              Many agencies sell individual services. We build complete marketing ecosystems.
            </p>
          </div>
          
          <div className="strategy-grid">
            <div className="strategy-card">
              <h3 className="strategy-title">Every project starts with:</h3>
              <ul className="process-list mt-4">
                <li><CheckCircle size={18} className="text-accent" /> Business Analysis</li>
                <li><CheckCircle size={18} className="text-accent" /> Market Research</li>
                <li><CheckCircle size={18} className="text-accent" /> Competitor Analysis</li>
                <li><CheckCircle size={18} className="text-accent" /> Customer Journey Mapping</li>
                <li><CheckCircle size={18} className="text-accent" /> Growth Planning</li>
                <li><CheckCircle size={18} className="text-accent" /> Performance Measurement</li>
              </ul>
              <p className="mt-4 font-semibold text-high-contrast">
                Our goal isn't just to increase followers or website traffic—it's to help you achieve measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-overline">Our Expertise</span>
            <h2 className="heading-h2">Our Core Digital Marketing Services</h2>
          </div>

          <div className="services-grid-12">
            
            {/* Service 1 */}
            <div className="service-card-full">
              <div className="service-icon-large"><Search size={32} /></div>
              <h3 className="service-title-large">1. Search Engine Optimization (SEO)</h3>
              <p className="service-desc-large">Increase your visibility on Google with ethical, long-term SEO strategies.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Includes:</h4>
                  <ul>
                    <li>Keyword Research</li>
                    <li>On-Page SEO & Technical SEO</li>
                    <li>Local SEO & Off-Page SEO</li>
                    <li>Link Building & Content Optimization</li>
                    <li>SEO Audits & Competitor Analysis</li>
                  </ul>
                </div>
                <div>
                  <h4>Best For:</h4>
                  <ul>
                    <li>Local Businesses</li>
                    <li>Healthcare & Manufacturers</li>
                    <li>Educational Institutes</li>
                    <li>E-commerce & Professional Services</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/seo" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 2 */}
            <div className="service-card-full">
              <div className="service-icon-large"><Globe size={32} /></div>
              <h3 className="service-title-large">2. Website Design & Development</h3>
              <p className="service-desc-large">Your website is your digital storefront. We create fast, secure, mobile-friendly websites designed to convert visitors into customers.</p>
              <div className="service-details-grid">
                <div>
                  <h4>We Develop:</h4>
                  <ul>
                    <li>Business & Corporate Websites</li>
                    <li>E-commerce Stores & Landing Pages</li>
                    <li>School, College & Healthcare Websites</li>
                  </ul>
                </div>
                <div>
                  <h4>Technologies:</h4>
                  <ul>
                    <li>WordPress, Shopify, WooCommerce</li>
                    <li>Custom Development</li>
                    <li>Responsive & SEO-Friendly Design</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/website-design" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 3 */}
            <div className="service-card-full">
              <div className="service-icon-large"><MousePointerClick size={32} /></div>
              <h3 className="service-title-large">3. Google Ads Management</h3>
              <p className="service-desc-large">Reach customers who are actively searching for your products or services.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Campaign Types:</h4>
                  <ul>
                    <li>Search & Display Ads</li>
                    <li>Performance Max & Shopping Ads</li>
                    <li>Call Campaigns & Local Campaigns</li>
                  </ul>
                </div>
                <div>
                  <h4>Focus:</h4>
                  <p>We focus on maximizing ROI through continuous optimization and conversion tracking.</p>
                </div>
              </div>
              <Link to="/service/google-ads" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 4 */}
            <div className="service-card-full">
              <div className="service-icon-large"><Smartphone size={32} /></div>
              <h3 className="service-title-large">4. Meta Advertising (Facebook & Instagram Ads)</h3>
              <p className="service-desc-large">Create high-performing advertising campaigns that generate leads, sales, and brand awareness.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Campaign Objectives:</h4>
                  <ul>
                    <li>Lead Generation & Website Traffic</li>
                    <li>Sales & App Promotion</li>
                    <li>Brand Awareness & Engagement</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/meta-ads" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 5 */}
            <div className="service-card-full">
              <div className="service-icon-large"><TrendingUp size={32} /></div>
              <h3 className="service-title-large">5. Performance Marketing</h3>
              <p className="service-desc-large">Data-driven campaigns focused on measurable outcomes.</p>
              <div className="service-details-grid">
                <div>
                  <h4>We Optimize For:</h4>
                  <ul>
                    <li>Cost Per Lead (CPL) & Return on Ad Spend (ROAS)</li>
                    <li>Customer Acquisition Cost (CAC)</li>
                    <li>Conversion Rate & Revenue Growth</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/performance-marketing" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 6 */}
            <div className="service-card-full">
              <div className="service-icon-large"><Share2 size={32} /></div>
              <h3 className="service-title-large">6. Social Media Marketing</h3>
              <p className="service-desc-large">Build a strong online presence with engaging, platform-specific content.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Platforms:</h4>
                  <ul>
                    <li>Instagram, Facebook, LinkedIn</li>
                    <li>YouTube, X (Twitter), Pinterest</li>
                  </ul>
                </div>
                <div>
                  <h4>Services:</h4>
                  <ul>
                    <li>Content Strategy & Creative Design</li>
                    <li>Reel Production & Community Management</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/social-media-marketing" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 7 */}
            <div className="service-card-full">
              <div className="service-icon-large"><PenTool size={32} /></div>
              <h3 className="service-title-large">7. Branding & Creative Design</h3>
              <p className="service-desc-large">Your brand is more than a logo—it's how customers remember you.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Branding Services:</h4>
                  <ul>
                    <li>Brand Identity & Logo Design</li>
                    <li>Corporate Profiles & Brochures</li>
                    <li>Packaging Design & Presentations</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/branding" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 8 */}
            <div className="service-card-full">
              <div className="service-icon-large"><Video size={32} /></div>
              <h3 className="service-title-large">8. Content Creation & Production</h3>
              <p className="service-desc-large">Compelling content that informs, engages, and converts.</p>
              <div className="service-details-grid">
                <div>
                  <h4>We Create:</h4>
                  <ul>
                    <li>Product & Corporate Photography</li>
                    <li>Promotional Videos & Brand Films</li>
                    <li>Social Media Reels & Podcast Production</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/content-creation" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 9 */}
            <div className="service-card-full">
              <div className="service-icon-large"><MapPin size={32} /></div>
              <h3 className="service-title-large">9. Google Business Profile Optimization</h3>
              <p className="service-desc-large">Help local customers discover your business through optimized local search visibility.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Includes:</h4>
                  <ul>
                    <li>Profile Setup & Verification</li>
                    <li>Keyword & Photo Optimization</li>
                    <li>Review Management & Weekly Posts</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/gbp-optimization" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 10 */}
            <div className="service-card-full">
              <div className="service-icon-large"><ShoppingBag size={32} /></div>
              <h3 className="service-title-large">10. E-commerce Growth Solutions</h3>
              <p className="service-desc-large">Scale your online store with platform-specific expertise.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Platforms:</h4>
                  <ul>
                    <li>Amazon, Flipkart, Meesho</li>
                    <li>Shopify, WooCommerce</li>
                  </ul>
                </div>
                <div>
                  <h4>Services:</h4>
                  <ul>
                    <li>Listing Optimization & Marketplace SEO</li>
                    <li>Sponsored Ads & Catalog Management</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/e-commerce" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 11 */}
            <div className="service-card-full">
              <div className="service-icon-large"><Bot size={32} /></div>
              <h3 className="service-title-large">11. AI & Marketing Automation</h3>
              <p className="service-desc-large">Save time and improve customer experience with smart automation.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Solutions:</h4>
                  <ul>
                    <li>WhatsApp Automation & CRM Integration</li>
                    <li>AI Chatbots & Email Automation</li>
                    <li>Workflow Automation & Dashboards</li>
                  </ul>
                </div>
              </div>
              <Link to="/service/ai-automation" className="text-link mt-4 inline-block">Learn More →</Link>
            </div>

            {/* Service 12 */}
            <div className="service-card-full">
              <div className="service-icon-large"><GraduationCap size={32} /></div>
              <h3 className="service-title-large">12. Digital Marketing Training & Consulting</h3>
              <p className="service-desc-large">Build skills and grow your career or business with practical, industry-focused training.</p>
              <div className="service-details-grid">
                <div>
                  <h4>Programs:</h4>
                  <ul>
                    <li>Advanced Digital Marketing & SEO</li>
                    <li>Google Ads & Meta Ads</li>
                    <li>AI Marketing & Graphic Designing</li>
                  </ul>
                </div>
              </div>
              <Link to="/digital-marketing-courses-kanpur" className="text-link mt-4 inline-block">Explore Courses →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section bg-light text-center">
        <div className="container">
          <h2 className="heading-h2">Ready to Accelerate Your Business Growth?</h2>
          <p className="services-hero-desc mx-auto mt-4 mb-5">
            Whether you're looking to increase leads, strengthen your brand, launch a new website, improve your search rankings, or scale your advertising campaigns, Future Edge Digital Marketing is ready to help. Let's build a marketing strategy that delivers measurable results and long-term success.
          </p>
          <div className="action-buttons-flex justify-center">
            <Link to="/contact" className="btn btn-primary btn-large">Book a Free Strategy Session</Link>
            <Link to="/contact" className="btn btn-outline btn-large">Get a Custom Proposal</Link>
            <a href="tel:+916393213527" className="btn btn-outline btn-large">Call Our Marketing Experts</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

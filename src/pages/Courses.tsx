import { CheckCircle, Clock, Users, MonitorPlay, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const modules = [
    { title: 'Marketing Fundamentals', items: ['Marketing Principles', 'Consumer Behaviour', 'Digital Marketing Ecosystem', 'Branding Basics', 'Sales Funnel', 'Customer Journey', 'Marketing Strategy'] },
    { title: 'Website Development', items: ['WordPress Website Development', 'Landing Page Design', 'Website Structure', 'UI/UX Basics', 'Website Speed Optimization', 'Mobile Responsiveness', 'Domain & Hosting', 'Basic HTML & CSS Concepts'] },
    { title: 'Search Engine Optimization (SEO)', items: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO', 'Google Business Profile Optimization', 'Link Building', 'Content Optimization', 'SEO Audit & Reporting'] },
    { title: 'Google Ads', items: ['Search Campaigns', 'Display Campaigns', 'Performance Max', 'Shopping Campaigns', 'Call Ads', 'Remarketing', 'Conversion Tracking', 'Keyword Planning & Budget Optimization'] },
    { title: 'Meta Advertising', items: ['Facebook Ads & Instagram Ads', 'Business Manager & Ads Manager', 'Pixel Setup', 'Lead Generation Campaigns', 'Remarketing', 'Audience Targeting'] },
    { title: 'Social Media Marketing', items: ['Instagram Growth', 'Facebook Marketing', 'LinkedIn Marketing', 'YouTube Marketing', 'Content Planning & Reel Strategy', 'Community Management', 'Analytics'] },
    { title: 'Content Marketing', items: ['Copywriting', 'Blogging', 'Content Strategy', 'AI Content Creation', 'Email Marketing', 'Storytelling', 'Marketing Funnels'] },
    { title: 'Graphic Designing', items: ['Canva', 'Adobe Photoshop', 'Social Media Creatives', 'Posters & Brochures', 'Brand Identity', 'Logo Design'] },
    { title: 'Video Editing', items: ['Adobe Premiere Pro', 'CapCut', 'Short-form Video Editing', 'YouTube Videos & Reels', 'Motion Graphics Basics'] },
    { title: 'AI & Marketing Automation', items: ['AI Tools for Marketing', 'Prompt Engineering (ChatGPT)', 'Marketing Automation', 'WhatsApp Automation', 'CRM Basics', 'Workflow Automation'] },
    { title: 'Analytics & Reporting', items: ['Google Analytics', 'Google Search Console', 'Campaign Tracking', 'KPI Measurement', 'Dashboard Reporting'] },
    { title: 'Freelancing & Career', items: ['Personal Branding', 'Resume Building', 'LinkedIn Optimization', 'Client Acquisition & Proposal Writing', 'Interview Preparation', 'Portfolio Development'] },
  ];

  return (
    <div className="courses-page">
      {/* HERO SECTION */}
      <section className="courses-hero section">
        <div className="container">
          <div className="text-center" style={{maxWidth: '900px', margin: '0 auto'}}>
            <span className="text-overline">Future Edge Academy</span>
            <h1 className="heading-display text-high-contrast">Build Your Future with Industry-Focused Digital Marketing Courses</h1>
            <h2 className="heading-h2 mt-3 text-gradient-brand">Learn. Practice. Get Certified. Build Your Career.</h2>
            <p className="courses-hero-desc mx-auto mt-4">
              At Future Edge Academy, we don't just teach digital marketing—we prepare you for the real business world. Our courses are designed by experienced marketing professionals who work with businesses every day, ensuring that every lesson is practical, up to date, and aligned with current industry requirements.
            </p>
            <p className="courses-hero-desc mx-auto mt-3">
              Whether you're a student, entrepreneur, freelancer, working professional, or business owner, our programs help you develop in-demand digital skills through live projects, mentorship, and hands-on experience.
            </p>
            <div className="action-buttons-flex justify-center mt-5">
              <Link to="/contact" className="btn btn-primary btn-large">Enroll Now</Link>
              <Link to="/contact" className="btn btn-outline btn-large">Book a Free Career Counselling Session</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="heading-h2">Why Choose Future Edge Academy?</h2>
            <p className="text-secondary mx-auto mt-3" style={{maxWidth: '800px'}}>
              The digital marketing industry evolves rapidly. Employers and businesses need professionals who can deliver measurable results—not just people with theoretical knowledge. That's why our curriculum focuses on practical execution, real-world projects, and business strategy.
            </p>
          </div>
          
          <div className="features-grid">
            {[
              "Industry-oriented curriculum", "MBA-qualified marketing mentors", "Live client projects", 
              "Practical assignments", "Internship opportunities", "Career guidance", 
              "Placement assistance", "Small batch sizes", "One-to-one mentorship", 
              "AI-integrated learning", "Business-focused training", "Lifetime learning resources", 
              "Certification upon successful completion"
            ].map((feature, idx) => (
              <div key={idx} className="benefit-card">
                <CheckCircle size={24} className="text-accent mb-3" />
                <h4 style={{fontSize: '1.1rem'}}>{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROGRAM */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-overline">Our Flagship Program</span>
            <h2 className="heading-h2">Advanced Digital Marketing Certification</h2>
          </div>
          
          <div className="program-overview-grid">
            <div className="overview-card">
              <h3>Course Overview</h3>
              <p className="text-secondary mt-3">
                This comprehensive program is designed to transform beginners into confident digital marketing professionals. Students gain practical expertise in SEO, paid advertising, social media marketing, content strategy, website development, branding, analytics, AI tools, and marketing automation.
              </p>
            </div>
            <div className="overview-details">
              <div className="detail-row">
                <Clock className="text-accent" />
                <div>
                  <strong>Duration</strong>
                  <p>4–6 Months (Flexible weekday & weekend batches)</p>
                </div>
              </div>
              <div className="detail-row">
                <MonitorPlay className="text-accent" />
                <div>
                  <strong>Learning Mode</strong>
                  <p>Classroom Training, Live Online Classes, Hybrid Learning</p>
                </div>
              </div>
              <div className="detail-row">
                <Users className="text-accent" />
                <div>
                  <strong>Eligibility</strong>
                  <p>Students, Graduates, Job Seekers, Entrepreneurs, Business Owners, Freelancers, Working Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="heading-h2">What You'll Learn</h2>
            <p className="text-secondary mx-auto mt-3">12 Comprehensive Modules Covering Every Aspect of Digital Marketing</p>
          </div>
          
          <div className="modules-grid">
            {modules.map((mod, index) => (
              <div key={index} className="module-card">
                <div className="module-header">
                  <span className="module-number">Module {index + 1}</span>
                  <h3>{mod.title}</h3>
                </div>
                <ul className="module-list mt-4">
                  {mod.items.map((item, i) => (
                    <li key={i}><ChevronRight size={16} className="text-accent" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL EXPERIENCE & INTERNSHIP */}
      <section className="section">
        <div className="container">
          <div className="split-grid align-center">
            <div className="bg-card">
              <h2 className="heading-h2 mb-4">Practical Learning Experience</h2>
              <p className="text-secondary mb-4">Students don't just watch videos—they work on real tasks that simulate agency life.</p>
              <ul className="hands-on-list">
                <li><CheckCircle size={18} className="text-accent" /> Build a business website</li>
                <li><CheckCircle size={18} className="text-accent" /> Create Google Ads campaigns</li>
                <li><CheckCircle size={18} className="text-accent" /> Run Meta Ads</li>
                <li><CheckCircle size={18} className="text-accent" /> Perform SEO audits</li>
                <li><CheckCircle size={18} className="text-accent" /> Optimize Google Business Profiles</li>
                <li><CheckCircle size={18} className="text-accent" /> Design creatives & edit videos</li>
                <li><CheckCircle size={18} className="text-accent" /> Prepare marketing strategies</li>
              </ul>
            </div>
            
            <div>
              <div className="internship-card mb-4">
                <Briefcase size={40} className="text-accent mb-3" />
                <h3 className="mb-2">Internship Program</h3>
                <p className="text-secondary">Gain practical exposure by working on real client projects under the guidance of experienced mentors. Interns learn agency workflows, campaign management, reporting, client communication, and project execution.</p>
              </div>
              
              <div className="placement-card">
                <GraduationCap size={40} className="text-accent mb-3" />
                <h3 className="mb-2">Placement Assistance</h3>
                <p className="text-secondary">We support students through resume preparation, LinkedIn optimization, mock interviews, portfolio development, job referrals, and freelancing guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section bg-dark text-white text-center">
        <div className="container">
          <h2 className="heading-h2" style={{color: '#fff'}}>Start Your Digital Marketing Journey Today</h2>
          <p className="mx-auto mt-4 mb-5" style={{maxWidth: '700px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)'}}>
            The future belongs to professionals who understand digital growth. Whether your goal is to build a successful career, grow your business, or start freelancing, Future Edge Academy provides the knowledge, mentorship, and practical experience to help you achieve it.
          </p>
          <div className="action-buttons-flex justify-center">
            <Link to="/contact" className="btn" style={{backgroundColor: 'var(--accent-yellow)', color: '#111'}}>Enroll Now</Link>
            <Link to="/contact" className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: '#fff'}}>Download Course Brochure</Link>
            <Link to="/contact" className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: '#fff'}}>Book a Free Demo Class</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

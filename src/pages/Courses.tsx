import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Courses.css';

const courseModules = [
  "SEO (Search Engine Optimization)",
  "SEM / Google Ads (PPC)",
  "Graphics & Video Editing",
  "Social Media Marketing",
  "WhatsApp & AI Automation",
  "Twitter + LinkedIn Handling",
  "E-commerce Marketing",
  "Web Development",
  "Personality Development & Interview Skills",
  "Documentation Management"
];

const courseFeatures = [
  "AI Tools & Modern Tech Stack Learning",
  "Hands-on Projects & Case Studies",
  "8+ Certifications",
  "Job Assistance & Interview Prep",
  "Portfolio & Resume Building",
  "Expert-Led Mentorship",
  "Collaboration and Networking with others",
  "Placement & Freelancing Guide"
];

const Courses = () => {
  return (
    <div className="courses-page section-padding pt-32">
      <div className="container">
        
        {/* Header Section */}
        <div className="courses-header text-center mb-16">
          <motion.h1 
            className="heading-h2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Digital Marketing <span className="text-gradient-brand">Course</span>
          </motion.h1>
          <p className="intro-text mx-auto mt-4 max-w-2xl text-secondary">
            Join Our Digital Marketing Course to Learn & Grow Your Career. 
            Why This Is the Only Course You Need to become a high-paid expert.
          </p>
        </div>

        {/* Main Grid: Modules & Features */}
        <div className="courses-grid">
          
          {/* Left: Modules with empty image placeholders */}
          <div className="modules-col">
            <h2 className="text-2xl font-bold mb-8 text-primary">Course Modules</h2>
            <div className="modules-grid">
              {courseModules.map((mod, idx) => (
                <div key={idx} className="module-card">
                  <div className="img-placeholder">
                    <span>Image Here</span>
                  </div>
                  <div className="module-content">
                    <h3>{mod}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="features-col">
            <div className="features-box sticky-top">
              <h2 className="text-2xl font-bold mb-6 text-primary">What You Get</h2>
              <ul className="features-list">
                {courseFeatures.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <CheckCircle2 className="feature-icon" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="cta-box mt-8">
                <h3 className="font-bold text-lg mb-2 text-primary">Ready to accelerate your career?</h3>
                <a href="tel:+916393213527" className="btn btn-primary w-full mt-4 justify-center">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Courses;

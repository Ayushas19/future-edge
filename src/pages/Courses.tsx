import { motion } from 'framer-motion';
import './Courses.css';

import vivekImg from '../assets/vivek.png';
import abhishekImg from '../assets/abhishek.png';
import courseImg from '../assets/course_graphic.png';

const courseModules = [
  { title: "SEO (Search Engine)", desc: "On-Page, Off-Page, Technical, Google My Business, Local SEO." },
  { title: "SEM / Google Ads (PPC)", desc: "Search, Display & YouTube ads, keyword research, conversion tracking." },
  { title: "Graphics & Video Editing", desc: "Canva, Photoshop, Adobe Premiere, CapCut." },
  { title: "Social Media Marketing", desc: "Facebook, Instagram, LinkedIn. Ads + Organic content growth." },
  { title: "WhatsApp & AI Automation", desc: "Chatbots, broadcasting & powerful AI automation tools." },
  { title: "Twitter + LinkedIn Handling", desc: "Professional branding & business growth strategies." },
  { title: "E-commerce Marketing", desc: "Amazon & Flipkart selling, listing, ads & product ranking." },
  { title: "Web Development", desc: "WordPress, hosting, domains, custom pages & payment integration." },
  { title: "Personality Development & Interview Skills", desc: "Communication skills, confidence building, client pitching." },
  { title: "Documentation Management", desc: "Reports, SOPs, client docs & workflow structuring." }
];

const trainers = [
  { name: "Vivek Singh Bhadauriya", role: "Founder & Lead Mentor", desc: "Trained 1000+ students. Worked with 50+ companies. MBA in Digital Marketing. Secretary – Kanpur Business Association.", quote: "Vivek Sir believes in practical education. His goal is to create skilled digital marketers who are ready for the job market." },
  { name: "Abhishek Kashyap", role: "Graphic & Video Editing Expert", desc: "Working Expert, Certified from MAAC. Expert in Photoshop, Premiere Pro, After Effects, & CapCut.", img: abhishekImg },
  { name: "Nikhil Yadav", role: "Web Developer", desc: "MCA. Built 100+ websites. Expert in WordPress, Hosting, & Payment Integration." },
  { name: "Shradha Shukla", role: "Interview Preparation Trainer", desc: "MBA. BDM with 2+ Year of Experience." },
  { name: "Brijesh", role: "E-commerce Specialist", desc: "Worked with 1000+ Amazon & Flipkart business owners. Teaches listing, ads, & account handling." },
  { name: "Saurabh", role: "Documentation Trainer", desc: "Senior Accountant with 3+ Year of Experience, IIT Kanpur." }
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

        {/* Main Grid: Modules */}
        <div className="courses-grid mb-16">
          <div className="modules-col">
            <h2 className="text-2xl font-bold mb-8 text-primary">What You Will Learn – Complete Course Modules</h2>
            <div className="modules-grid">
              {courseModules.map((mod, idx) => (
                <div key={idx} className="module-card">
                  <div className="img-placeholder ai-graphic-placeholder p-0">
                    <img src={courseImg} alt={mod.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="module-content">
                    <h3>{mod.title}</h3>
                    <p className="text-secondary text-sm mt-2">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section mb-16">
          <div className="pricing-header text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Course Information & Fees</h2>
            <p className="text-secondary mt-2">Special 57.5% Discount Applied! ✔ Certificate + Internship included in all plans</p>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Online Mode</h3>
              <div className="price-box">
                <span className="price-old">₹40,000</span>
                <span className="price-new">₹17,000</span>
              </div>
              <a href="#" className="btn btn-primary w-full mt-6 justify-center">Register Now</a>
            </div>
            
            <div className="pricing-card highlight-pricing">
              <div className="badge-popular">Most Popular</div>
              <h3>Offline Mode</h3>
              <div className="price-box">
                <span className="price-old">₹40,000</span>
                <span className="price-new">₹17,000</span>
              </div>
              <a href="#" className="btn btn-primary w-full mt-6 justify-center" style={{color: '#141413'}}>Register Now</a>
            </div>
          </div>
        </div>

        {/* Agency Achievements */}
        <div className="achievements-section mb-16">
          <div className="achievements-grid">
            <div className="stat-box">
              <h3 className="stat-number">1000+</h3>
              <p className="stat-title">Students Trained</p>
              <p className="stat-desc">Online + Offline batches</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">150+</h3>
              <p className="stat-title">Websites Delivered</p>
              <p className="stat-desc">For businesses across industries</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">50+</h3>
              <p className="stat-title">Companies Served</p>
              <p className="stat-desc">Real marketing for real clients</p>
            </div>
          </div>
        </div>

        {/* Meet Your Trainers */}
        <div className="trainers-section">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Meet Your Trainers</h2>
          
          {/* Founder Highlight */}
          <div className="trainer-founder-card mb-8">
            <div className="trainer-founder-img ai-graphic-placeholder p-0">
               <img src={vivekImg} alt="Vivek Singh" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="trainer-founder-info">
              <h3>Vivek Singh Bhadauriya</h3>
              <span className="trainer-role">Founder – Future Edge Digital Marketing Agency</span>
              <p className="trainer-desc mt-4">Trained 1000+ students • Worked with 50+ companies • MBA in Digital Marketing • Secretary – Kanpur Business Association</p>
              <blockquote className="trainer-quote mt-4">
                "Vivek Sir believes in practical education. His goal is to create skilled digital marketers who are ready for the job market."
              </blockquote>
            </div>
          </div>

          {/* Other Trainers Grid */}
          <div className="trainers-grid">
            {trainers.slice(1).map((trainer, idx) => (
              <div key={idx} className="trainer-card">
                <div className="trainer-img ai-graphic-placeholder">
                  {trainer.img ? (
                    <img src={trainer.img} alt={trainer.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  ) : (
                    <span>Avatar</span>
                  )}
                </div>
                <div className="trainer-info">
                  <h4>{trainer.name}</h4>
                  <span className="trainer-role-small">{trainer.role}</span>
                  <p className="trainer-desc-small mt-2">{trainer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;

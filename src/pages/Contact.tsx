import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <div className="text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
            <span className="text-overline">Get In Touch</span>
            <h1 className="heading-display text-high-contrast">Let's Discuss Your Growth Strategy</h1>
            <p className="contact-hero-desc mt-4">
              Whether you need a complete digital marketing overhaul, a new website, or just have a quick question about our academy, we are here to help. Drop us a message and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{paddingTop: '0'}}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info-card">
              <h3 className="heading-h3 mb-4">Contact Information</h3>
              <p className="text-secondary mb-5">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon"><Phone size={20} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+916393213527">+91 63932 13527</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><Mail size={20} /></div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:contact@futureedge.in">contact@futureedge.in</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Location</h4>
                    <p>Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <form action="mailto:contact@futureedge.in" method="POST" encType="text/plain" className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@company.com" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service" required>
                      <option value="">Select a service...</option>
                      <option value="digital-marketing">Complete Digital Marketing</option>
                      <option value="seo">Search Engine Optimization</option>
                      <option value="ads">Google / Meta Ads</option>
                      <option value="website">Website Development</option>
                      <option value="academy">Future Edge Academy</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your project or query..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn mt-4">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ServicesCarousel.css';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'AI Optimized Campaigns',
    subtitle: '2x - 5x performance yield good ROI on same ad spend.',
    tags: ['Paid Ads', 'ROI', 'Performance'],
    image: '/images/hero_marketing.png',
    stats: '150% Avg Growth',
  },
  {
    id: 2,
    title: 'FREE Social Media Post',
    subtitle: 'Get unlimited ready to use FREE festival posts and business posts with captions and hashtags.',
    tags: ['Social Media', 'Organic'],
    image: '/images/social_media_icon.png',
    stats: '100+ Templates',
  },
  {
    id: 3,
    title: 'CRM Support & Integration',
    subtitle: 'Streamline your leads and automate your follow-ups with advanced CRM solutions.',
    tags: ['Automation', 'Support'],
    image: '/images/crm_dashboard.png',
    stats: '24/7 Support',
  }
];

const ServicesCarousel = () => {
  return (
    <section className="section overflow-hidden" id="services">
      <div className="container">
        <motion.div 
          className="heading-center-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-overline">Discover Our Services</span>
          <h2 className="heading-h2">Supercharge your digital presence.</h2>
        </motion.div>

        <motion.div 
          className="models-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="models-card">
                  <div className="models-card-col-1">
                    <div className="models-card-top-tags">
                      {service.tags.map((tag, idx) => (
                        <div key={idx} className="model-card-top-tag">{tag}</div>
                      ))}
                    </div>
                    
                    <div className="models-card-center">
                      <div className="model-card-title">{service.title}</div>
                      <div className="model-card-subtitle">{service.subtitle}</div>
                    </div>
                    
                    <div className="models-card-bottom">
                      <div className="model-card-likes">
                        <div>{service.stats}</div>
                      </div>
                      <div className="models-card-bottom-dot" />
                      <div className="model-card-likes">
                        <span className="learn-more">Learn More <ArrowRight size={14} /></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="models-card-col-2">
                    <div className="model-card-image-wrapper">
                      <motion.img 
                        src={service.image} 
                        alt={service.title} 
                        className="service-image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                  
                  {/* Glowing Overlay Effect */}
                  <div className={`models-card-overlay bg-gradient-${service.id}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCarousel;

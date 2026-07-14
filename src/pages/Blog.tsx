import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    title: "Why Digital Marketing is Important for Business in India",
    excerpt: "Discover the critical reasons why establishing a digital presence is essential for business growth and ROI in the modern Indian market.",
    date: "July 2026",
    category: "Business Growth"
  },
  // Adding placeholder blogs for visual structure
  {
    title: "How to Optimize Your SEO Strategy in 2026",
    excerpt: "Learn the latest search engine optimization techniques that will rank your website higher and drive organic traffic.",
    date: "June 2026",
    category: "SEO"
  },
  {
    title: "Mastering Social Media Ads for High Conversions",
    excerpt: "A complete guide to scaling your brand through Facebook, Instagram, and LinkedIn advertising campaigns.",
    date: "May 2026",
    category: "Paid Advertising"
  }
];

const Blog = () => {
  return (
    <div className="blog-page section-padding pt-32">
      <div className="container">
        
        {/* Header Section */}
        <div className="blog-header text-center mb-16">
          <motion.h1 
            className="heading-h2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Latest <span className="text-gradient-brand">Insights</span>
          </motion.h1>
          <p className="intro-text mx-auto mt-4 max-w-2xl text-secondary">
            Stay up to date with the latest digital marketing trends, strategies, and industry news.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={idx} 
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="blog-img-placeholder">
                <span>Image Here</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to="/learn-more" className="blog-link">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;

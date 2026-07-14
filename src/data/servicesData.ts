export interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  heroImage: string;
  overview: string;
  features: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  'seo': {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortDesc: 'Increase your visibility on Google with ethical, long-term SEO strategies.',
    heroImage: 'Search',
    overview: 'In today\'s digital landscape, simply having a website isn\'t enough. If your potential customers can\'t find you on the first page of Google, you are losing business to your competitors. Our comprehensive SEO strategies are designed to improve your organic search rankings, drive high-quality traffic, and establish your brand as an authority in your industry.',
    features: [
      { title: 'Technical SEO Audit', desc: 'We resolve underlying code and server issues that prevent search engines from crawling and indexing your site effectively.' },
      { title: 'On-Page Optimization', desc: 'Strategic placement of target keywords across your website’s titles, meta descriptions, headings, and body content.' },
      { title: 'Off-Page SEO & Link Building', desc: 'Building high-quality, authoritative backlinks to signal trust and relevance to search algorithms.' },
      { title: 'Local SEO', desc: 'Optimizing your presence for local searches to capture customers in your direct geographic area.' }
    ],
    benefits: [
      { title: 'Long-Term ROI', desc: 'Unlike paid ads, the traffic generated from organic search rankings continues to yield results over time.' },
      { title: 'Enhanced Trust', desc: 'Users inherently trust websites that rank at the top of Google naturally.' },
      { title: 'Higher Conversion Rates', desc: 'SEO targets users who are actively searching for your specific products or services.' }
    ]
  },
  'website-design': {
    id: 'website-design',
    title: 'Website Design & Development',
    shortDesc: 'Fast, secure, and mobile-friendly websites designed to convert visitors.',
    heroImage: 'Globe',
    overview: 'Your website is your ultimate digital storefront. It operates 24/7 and is often the first point of contact a potential customer has with your brand. We build websites that don’t just look visually stunning, but are architecturally designed to guide users seamlessly toward making a purchase or contacting you.',
    features: [
      { title: 'Responsive Design', desc: 'Flawless experiences across desktops, tablets, and smartphones.' },
      { title: 'E-commerce Solutions', desc: 'Robust Shopify and WooCommerce builds with secure payment gateways and inventory management.' },
      { title: 'UI/UX Optimization', desc: 'Data-backed user interface design that minimizes friction and maximizes conversion rates.' },
      { title: 'Speed & Security', desc: 'Lightning-fast load times and advanced security protocols to protect user data.' }
    ],
    benefits: [
      { title: 'Brand Authority', desc: 'A premium website instantly elevates how customers perceive your business.' },
      { title: 'Lead Generation Engine', desc: 'Optimized landing pages and clear CTAs turn passive visitors into active leads.' },
      { title: 'Scalability', desc: 'Built on modern frameworks that grow and adapt as your business expands.' }
    ]
  },
  'google-ads': {
    id: 'google-ads',
    title: 'Google Ads Management',
    shortDesc: 'Reach customers who are actively searching for your products or services.',
    heroImage: 'MousePointerClick',
    overview: 'When someone searches on Google, they have high intent—they are looking for a solution right now. Google Ads places your business at the very top of those search results. Our certified Google Ads specialists manage your campaigns meticulously to ensure you get the lowest cost-per-click and the highest return on ad spend.',
    features: [
      { title: 'Search Campaigns', desc: 'Targeting high-intent keywords to capture users at the bottom of the funnel.' },
      { title: 'Performance Max', desc: 'Utilizing Google’s AI to deliver ads across Search, Display, YouTube, and Gmail.' },
      { title: 'Remarketing', desc: 'Re-engaging users who visited your site but didn’t convert.' },
      { title: 'A/B Testing', desc: 'Continuous testing of ad copy, extensions, and landing pages to improve CTR and conversions.' }
    ],
    benefits: [
      { title: 'Instant Visibility', desc: 'Skip the line and appear at the top of Google search results immediately.' },
      { title: 'Total Budget Control', desc: 'You decide exactly how much you want to spend per day or per click.' },
      { title: 'Measurable ROI', desc: 'Track exactly how many sales or leads resulted directly from your ad spend.' }
    ]
  },
  'meta-ads': {
    id: 'meta-ads',
    title: 'Meta Advertising (Facebook & Instagram Ads)',
    shortDesc: 'High-performing campaigns that generate leads, sales, and brand awareness.',
    heroImage: 'Smartphone',
    overview: 'With billions of active users, Facebook and Instagram offer unparalleled audience targeting capabilities. Whether your goal is B2B lead generation or B2C e-commerce sales, our Meta advertising strategies cut through the noise, delivering highly creative ads to the exact demographic that needs your product.',
    features: [
      { title: 'Advanced Audience Targeting', desc: 'Targeting based on demographics, interests, behaviors, and custom lookalike audiences.' },
      { title: 'Creative Ad Formats', desc: 'Carousel ads, video ads, collection ads, and interactive stories that capture attention.' },
      { title: 'Pixel Tracking & API', desc: 'Flawless tracking of user actions on your website to optimize ad delivery.' },
      { title: 'Dynamic Retargeting', desc: 'Automatically showing users the exact products they viewed on your website.' }
    ],
    benefits: [
      { title: 'Massive Scale', desc: 'Reach thousands of potential customers in your specific target market every day.' },
      { title: 'Visual Impact', desc: 'Showcase your brand visually to build emotional connections and desire.' },
      { title: 'Low Cost Per Lead', desc: 'Highly optimized campaigns that drive down your customer acquisition costs.' }
    ]
  },
  'performance-marketing': {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDesc: 'Data-driven campaigns focused exclusively on measurable outcomes.',
    heroImage: 'TrendingUp',
    overview: 'Performance marketing is a comprehensive, omni-channel approach where strategy is dictated purely by data and return on investment. We integrate multiple advertising channels (Google, Meta, LinkedIn, Programmatic) and optimize them aggressively toward a specific KPI, such as Cost Per Acquisition (CPA) or Return on Ad Spend (ROAS).',
    features: [
      { title: 'Omni-Channel Strategy', desc: 'Distributing budget dynamically across platforms based on real-time performance.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'Tweaking landing pages and user flows to ensure traffic actually converts.' },
      { title: 'Attribution Modeling', desc: 'Understanding exactly which touchpoints contributed to a sale.' },
      { title: 'Data Analytics', desc: 'Deep dives into GA4 and CRM data to uncover hidden growth opportunities.' }
    ],
    benefits: [
      { title: 'Guaranteed Efficiency', desc: 'Every dollar spent is tracked and optimized for maximum revenue generation.' },
      { title: 'Scalable Growth', desc: 'Once a winning formula is found, we scale the budget confidently.' },
      { title: 'Agile Adjustments', desc: 'Rapid pivots based on market data rather than guesswork.' }
    ]
  },
  'social-media-marketing': {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'Build a strong online presence with engaging, platform-specific content.',
    heroImage: 'Share2',
    overview: 'Your social media presence is the modern equivalent of a physical storefront. It’s where brand personality is established and community is built. Our social media management team handles everything from content strategy and graphic design to community engagement, ensuring your brand stays relevant and top-of-mind.',
    features: [
      { title: 'Content Strategy', desc: 'Developing a cohesive content calendar aligned with your brand voice.' },
      { title: 'High-Quality Creatives', desc: 'Custom graphics, carousels, and short-form videos (Reels/Shorts).' },
      { title: 'Community Management', desc: 'Active engagement with followers, responding to comments and messages.' },
      { title: 'Trend Jacking', desc: 'Capitalizing on viral trends to dramatically increase brand reach.' }
    ],
    benefits: [
      { title: 'Brand Loyalty', desc: 'Consistent, valuable content builds a loyal community of brand advocates.' },
      { title: 'Customer Insights', desc: 'Direct interaction with your audience provides invaluable feedback.' },
      { title: 'Organic Reach', desc: 'High-quality, shareable content acts as free word-of-mouth advertising.' }
    ]
  },
  'branding': {
    id: 'branding',
    title: 'Branding & Creative Design',
    shortDesc: 'Your brand is more than a logo—it\'s how customers remember you.',
    heroImage: 'PenTool',
    overview: 'A strong brand communicates value before you ever say a word. We help businesses define their visual identity, messaging, and positioning in the market. From logo design to comprehensive brand guidelines, we ensure your business presents a cohesive, premium image across all touchpoints.',
    features: [
      { title: 'Brand Identity', desc: 'Logo design, color palettes, typography, and visual guidelines.' },
      { title: 'Corporate Collateral', desc: 'Professional brochures, business cards, letterheads, and presentations.' },
      { title: 'Packaging Design', desc: 'Eye-catching product packaging that stands out on shelves and online.' },
      { title: 'Brand Messaging', desc: 'Crafting your unique value proposition, taglines, and tone of voice.' }
    ],
    benefits: [
      { title: 'Premium Positioning', desc: 'A professional brand allows you to command higher prices and respect.' },
      { title: 'Market Differentiation', desc: 'Stand out clearly from competitors in a crowded marketplace.' },
      { title: 'Consistency', desc: 'Ensure every piece of marketing material feels unmistakably like your brand.' }
    ]
  },
  'content-creation': {
    id: 'content-creation',
    title: 'Content Creation & Production',
    shortDesc: 'Compelling content that informs, engages, and converts.',
    heroImage: 'Video',
    overview: 'Content is the fuel that powers all digital marketing engines. Whether it’s high-production video, professional photography, or persuasive copywriting, our in-house production team creates assets that capture attention and clearly communicate your value to your target audience.',
    features: [
      { title: 'Video Production', desc: 'Corporate films, product demos, testimonials, and social media reels.' },
      { title: 'Professional Photography', desc: 'High-end product photography, team headshots, and lifestyle shoots.' },
      { title: 'Copywriting', desc: 'Persuasive sales copy, engaging blog posts, and SEO-optimized website content.' },
      { title: 'Podcast & Audio', desc: 'End-to-end production for branded podcasts and audio content.' }
    ],
    benefits: [
      { title: 'Higher Engagement', desc: 'Video and high-quality imagery significantly increase user engagement.' },
      { title: 'Better Conversions', desc: 'Professional content builds trust, which directly influences purchasing decisions.' },
      { title: 'Versatile Assets', desc: 'One high-quality video can be repurposed across website, ads, and social media.' }
    ]
  },
  'gbp-optimization': {
    id: 'gbp-optimization',
    title: 'Google Business Profile Optimization',
    shortDesc: 'Help local customers discover your business through optimized local search.',
    heroImage: 'MapPin',
    overview: 'For local businesses, your Google Business Profile (formerly Google My Business) is arguably more important than your website. It dictates whether you show up in Google Maps and local search results. We optimize every aspect of your profile to ensure you dominate local searches in your area.',
    features: [
      { title: 'Profile Completeness', desc: 'Ensuring all categories, attributes, and business details are fully optimized.' },
      { title: 'Review Management', desc: 'Strategies to generate positive reviews and professionally handle negative ones.' },
      { title: 'Local Citations', desc: 'Ensuring your business NAP (Name, Address, Phone) is consistent across the web.' },
      { title: 'Regular Updates', desc: 'Posting weekly updates, offers, and photos to signal an active business to Google.' }
    ],
    benefits: [
      { title: 'Increased Foot Traffic', desc: 'Show up when nearby customers search for "services near me".' },
      { title: 'More Phone Calls', desc: 'Make it incredibly easy for customers to contact you directly from search.' },
      { title: 'Local Dominance', desc: 'Outrank local competitors in the highly coveted Google Local Pack.' }
    ]
  },
  'e-commerce': {
    id: 'e-commerce',
    title: 'E-commerce Growth Solutions',
    shortDesc: 'Scale your online store with platform-specific expertise.',
    heroImage: 'ShoppingBag',
    overview: 'Selling products online requires a unique set of strategies compared to lead generation. Whether you sell on your own Shopify store or on marketplaces like Amazon and Flipkart, we provide end-to-end e-commerce solutions that drive traffic, optimize listings, and maximize your sales volume.',
    features: [
      { title: 'Marketplace Optimization', desc: 'SEO and listing optimization for Amazon, Flipkart, and Myntra.' },
      { title: 'Shopping Campaigns', desc: 'Highly profitable Google Shopping and Meta Catalog Sales campaigns.' },
      { title: 'Cart Abandonment', desc: 'Email and SMS workflows to recover lost sales.' },
      { title: 'Conversion Optimization', desc: 'Improving product pages to turn a higher percentage of visitors into buyers.' }
    ],
    benefits: [
      { title: 'Increased Sales Velocity', desc: 'Move inventory faster with targeted, high-converting traffic.' },
      { title: 'Higher Profit Margins', desc: 'Reduce customer acquisition costs through optimized ad spend.' },
      { title: 'Customer Retention', desc: 'Strategies to turn one-time buyers into loyal, repeat customers.' }
    ]
  },
  'ai-automation': {
    id: 'ai-automation',
    title: 'AI & Marketing Automation',
    shortDesc: 'Save time and improve customer experience with smart automation.',
    heroImage: 'Bot',
    overview: 'The future of marketing lies in artificial intelligence and automation. We help businesses implement cutting-edge AI tools to streamline their marketing operations, provide instant 24/7 customer support, and nurture leads automatically, saving hundreds of hours of manual labor.',
    features: [
      { title: 'Chatbot Development', desc: 'Intelligent AI chatbots for WhatsApp and websites to handle customer queries.' },
      { title: 'Email Automation', desc: 'Complex drip campaigns that nurture leads based on their behavior.' },
      { title: 'CRM Integration', desc: 'Connecting your marketing channels directly to your CRM for seamless lead flow.' },
      { title: 'Workflow Automation', desc: 'Using tools like Zapier and Make to automate repetitive administrative tasks.' }
    ],
    benefits: [
      { title: '24/7 Operations', desc: 'Your marketing and support systems run constantly, even when you sleep.' },
      { title: 'Reduced Overhead', desc: 'Minimize the need for large manual data entry or basic support teams.' },
      { title: 'Faster Response Times', desc: 'Leads are contacted instantly, significantly increasing closing rates.' }
    ]
  }
};

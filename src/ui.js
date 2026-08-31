import { updateHeroScrollProgress } from './hero3d.js';

export function initUI() {
  // Current Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      primaryNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
  }

  // Set Active Navigation Link based on current URL
  function updateActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-link, .mega-dropdown a');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (!href) return;
      
      // Split href into path and hash safely
      let targetPath = href;
      let targetHash = '';
      const hashIndex = href.indexOf('#');
      if (hashIndex !== -1) {
        targetPath = href.substring(0, hashIndex);
        targetHash = href.substring(hashIndex);
      }

      if (targetPath === '' || targetPath === '/') targetPath = 'index.html';
      
      let current = currentPath;
      if (current === '' || current === '/') current = 'index.html';

      if (targetPath === current) {
        if (targetHash) {
           if (targetHash === currentHash) link.classList.add('active');
        } else {
           link.classList.add('active');
        }
      }
    });
  }

  updateActiveNav();
  window.addEventListener('hashchange', updateActiveNav);

  // Hero Sequence Scroll Driver (Pins hero & drives 3D tree + message slides)
  const heroSequence = document.getElementById('hero');
  const heroMessages = document.querySelectorAll('.hero-message');
  const heroWidgets = document.querySelectorAll('.hero-widget');
  const progressFill = document.getElementById('heroProgressFill');

  function updateHeroScroll() {
    if (!heroSequence) return;

    const rect = heroSequence.getBoundingClientRect();
    const heroHeight = heroSequence.offsetHeight;
    const windowHeight = window.innerHeight;
    const totalScrollable = heroHeight - windowHeight;

    if (window.innerWidth <= 768) {
      if (heroMessages[0]) heroMessages[0].classList.add('active');
      heroWidgets.forEach(w => w.classList.add('active'));
      return;
    }

    if (totalScrollable <= 0) return;

    // Calculate scroll progress from 0.0 to 1.0
    const scrollDistance = -rect.top;
    const progress = Math.min(Math.max(scrollDistance / totalScrollable, 0), 1);

    // Update 3D Hero Tree progress
    updateHeroScrollProgress(progress);

    // Update Hero Scroll Progress Bar
    if (progressFill) {
      progressFill.style.width = `${progress * 100}%`;
    }

    // Toggle active hero messages based on data-start and data-end thresholds
    heroMessages.forEach((msg) => {
      const start = parseFloat(msg.dataset.start || '0');
      const end = parseFloat(msg.dataset.end || '1');

      if (progress >= start && progress <= end) {
        msg.classList.add('active');
      } else {
        msg.classList.remove('active');
      }
    });

    // Toggle active floating 3D widget cards around the tree
    heroWidgets.forEach((widget) => {
      const start = parseFloat(widget.dataset.start || '0');
      const end = parseFloat(widget.dataset.end || '1');

      if (progress >= start && progress <= end) {
        widget.classList.add('active');
      } else {
        widget.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateHeroScroll, { passive: true });
  updateHeroScroll();

  // Stat Counter Animation on Scroll
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  function checkCounters() {
    const statsSection = document.querySelector('.stats-strip');
    if (!statsSection || animated) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      animated = true;
      counters.forEach((counter) => {
        const target = +counter.dataset.count;
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        let count = 0;

        const updateCount = () => {
          count += step;
          if (count >= target) {
            counter.textContent = target;
          } else {
            counter.textContent = count;
            requestAnimationFrame(updateCount);
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener('scroll', checkCounters);
  checkCounters();

  // Interactive Service Finder Form
  const finderForm = document.getElementById('serviceFinderForm');
  const finderResult = document.getElementById('finderResult');
  const resultText = document.getElementById('resultText');

  if (finderForm && finderResult && resultText) {
    finderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const goal = document.getElementById('goalSelect').value;
      const industry = document.getElementById('industrySelect').value;
      const stage = document.getElementById('stageSelect').value;

      let plan = '';
      if (goal === 'visibility') {
        plan = 'Google Business Profile + SEO Website Foundation + Local Meta Lead Ads';
      } else if (goal === 'leads') {
        plan = 'Performance Meta & Google Ads + High-Converting Landing Page';
      } else if (goal === 'brand') {
        plan = 'Personal Branding Package + Reel Content Creation + Executive Podcast Production';
      } else if (goal === 'website') {
        plan = 'Custom Responsive Website Creation + E-Commerce Integration + Performance Optimization';
      } else if (goal === 'academy') {
        plan = 'Future Edge Academy Specialized Performance Track + Live Project Mentorship';
      }

      resultText.textContent = `For your ${stage} business in ${industry}, we recommend: ${plan}.`;
      finderResult.style.display = 'block';
      finderResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Testimonials Slider
  const tCards = document.querySelectorAll('.testimonial-card');
  const sDots = document.querySelectorAll('.s-dot');
  let tIndex = 0;

  function showTestimonial(index) {
    tCards.forEach(c => c.classList.remove('active'));
    sDots.forEach(d => d.classList.remove('active'));
    tIndex = (index + tCards.length) % tCards.length;
    tCards[tIndex].classList.add('active');
    if (sDots[tIndex]) sDots[tIndex].classList.add('active');
  }

  sDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      showTestimonial(idx);
    });
  });

  setInterval(() => {
    showTestimonial(tIndex + 1);
  }, 7000);

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Scroll Reveal Observer for Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Dynamically add reveal-up to major text elements to animate them on scroll
  const textElements = document.querySelectorAll('h2, h3, p.lead-text, p, .section-tag');
  textElements.forEach((el, index) => {
    // Avoid animating elements inside the hero header or mobile nav which should be instantly visible
    if (!el.closest('#hero') && !el.closest('.mobile-nav-drawer') && !el.classList.contains('reveal-up')) {
      el.classList.add('reveal-up');
      
      // Add slight staggered delays based on index for a cascading effect
      if (index % 3 === 1) el.classList.add('delay-100');
      if (index % 3 === 2) el.classList.add('delay-200');
      
      revealObserver.observe(el);
    }
  });

  document.querySelectorAll('.reveal-up').forEach(el => {
    revealObserver.observe(el);
  });
  // Initialize IntersectionObserver for Timeline
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineTrack = document.querySelector('.timeline-track');
  
  if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    });
    
    timelineItems.forEach(item => timelineObserver.observe(item));

    // Optional: Update the scroll-fill custom property on track based on scroll depth of container
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer && timelineTrack) {
      window.addEventListener('scroll', () => {
        const rect = timelineContainer.getBoundingClientRect();
        const winHeight = window.innerHeight;
        // Calculate how much of the timeline container has been scrolled past the middle of the screen
        const start = rect.top - winHeight / 2;
        
        let progress = 0;
        if (start < 0) {
          progress = Math.min(1, Math.abs(start) / rect.height);
        }
        
        timelineTrack.style.setProperty('--scroll-fill', `${progress * 100}%`);
      });
    }
  }
}


import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LayoutGroup, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import VivekNavbar from './components/VivekNavbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import VivekSingh from './pages/VivekSingh';
import Courses from './pages/Courses';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LearnMore from './pages/LearnMore';
import ServiceDetail from './pages/ServiceDetail';
import PageTransition from './components/PageTransition';

const NavigationWrapper = () => {
  const location = useLocation();
  // If we are on the Vivek Singh page, show his specific navbar, else show the main agency navbar
  return location.pathname === '/vivek-singh' ? <VivekNavbar /> : <Navbar />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/vivek-singh" element={<PageTransition><VivekSingh /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/digital-marketing-services-kanpur" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/digital-marketing-courses-kanpur" element={<PageTransition><Courses /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/terms-and-conditions" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/learn-more" element={<PageTransition><LearnMore /></PageTransition>} />
        <Route path="/service/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <BrowserRouter>
          <ScrollToTop />
          <NavigationWrapper />
          <main style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
            <AnimatedRoutes />
          </main>
          <Footer />
        </BrowserRouter>
      )}
    </LayoutGroup>
  );
}

export default App;

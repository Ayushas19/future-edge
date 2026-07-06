import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import VivekNavbar from './components/VivekNavbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import VivekSingh from './pages/VivekSingh';
import Courses from './pages/Courses';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const NavigationWrapper = () => {
  const location = useLocation();
  // If we are on the Vivek Singh page, show his specific navbar, else show the main agency navbar
  return location.pathname === '/vivek-singh' ? <VivekNavbar /> : <Navbar />;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onLoadingComplete={() => setLoading(false)} />
      
      {!loading && (
        <BrowserRouter>
          <NavigationWrapper />
          <main style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vivek-singh" element={<VivekSingh />} />
          
          <Route path="/courses" element={<Courses />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
      )}
    </>
  );
}

export default App;

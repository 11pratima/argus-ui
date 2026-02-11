import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ArchitectsSection from './components/ArchitectsSection';
import GlobalCoverage from './components/GlobalCoverage';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black text-white">
      <Navigation />
      <HeroSection />
      <CapabilitiesSection />
      <ArchitectsSection />
      <GlobalCoverage />
      <Footer />
    </div>
  );
}

export default App;

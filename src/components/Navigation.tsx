import { Eye, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Eye className="w-8 h-8 text-purple-500" />
            <span>ARGUS</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider">
            <a href="#home" className="hover:text-purple-400 transition-colors">HOME</a>
            <a href="#protocol" className="hover:text-purple-400 transition-colors">PROTOCOL</a>
            <a href="#architects" className="hover:text-purple-400 transition-colors">ARCHITECTS</a>
            <a href="#github" className="hover:text-purple-400 transition-colors">GITHUB</a>
          </div>

          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded text-sm font-medium transition-all hover:scale-105 flex items-center gap-2">
            ENTER ARGUS
            <span className="text-xs">→</span>
          </button>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

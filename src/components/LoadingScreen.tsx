import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [systemText, setSystemText] = useState('SENSORY LINKS...');

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setSystemText((prev) =>
        prev === 'SENSORY LINKS...' ? 'LINKING...' :
        prev === 'LINKING...' ? 'GEO-SIGNATURES' :
        prev === 'GEO-SIGNATURES' ? 'OBJECT TRACKING' : 'SENSORY LINKS...'
      );
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute top-8 left-8 text-purple-500 font-mono text-xs">
       
        <div className="mt-2 text-green-400">
         
        </div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-8xl font-bold tracking-widest mb-24">ARGUS</h1>

        <div className="relative w-96 h-96 mx-auto mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border-2 border-purple-600 animate-ping opacity-20"></div>
            <div className="absolute w-80 h-80 rounded-full border-2 border-purple-500 animate-pulse"></div>
            <div className="absolute w-64 h-64 rounded-full border-2 border-purple-400"></div>
            <div className="absolute w-48 h-48 rounded-full bg-purple-900/30 backdrop-blur-xl"></div>
            <div className="absolute w-32 h-32 rounded-full border-4 border-purple-500 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-purple-400 font-mono text-sm tracking-wider mb-8">
          {systemText}
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex justify-between text-xs text-purple-400 font-mono mb-2">
            <span>NEURAL WEIGHTS</span>
            <span className="text-green-400">LOADING</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs text-purple-400 font-mono mb-2 mt-6">
            
            <span className="text-green-400">LOADING</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300"
              style={{ width: `${Math.max(0, progress - 20)}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs text-purple-400 font-mono mb-2 mt-6">
            
            <span className="text-green-400">LOADING</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300"
              style={{ width: `${Math.max(0, progress - 40)}%` }}
            ></div>
          </div>
        </div>
      </div>

     

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center font-mono text-xs text-gray-600">
        T
      </div>
    </div>
  );
}

import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="text-purple-400 text-sm font-mono tracking-widest mb-8 animate-pulse">
          NEXT-GENERATION SURVEILLANCE
        </div>

        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 blur-3xl bg-purple-600/30 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-500/40 to-orange-500/40 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full bg-black"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-purple-600 blur-md"></div>
                <div className="absolute w-24 h-24 rounded-full border-2 border-purple-400 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          THE EYE THAT<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            NEVER SLEEPS
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Next-generation neural tracking technology, real-time analysis, and<br />
          predictive behavioral mapping powered by the Argus Core.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            INITIATE SYSTEM
          </button>
          <button className="border border-gray-700 hover:border-purple-500 px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105">
            VIEW DOSSIER
          </button>
        </div>

        <div className="text-red-500 text-xs font-mono tracking-wider animate-pulse">
          SECURITY IDENTIFICATION SYSTEMS
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gray-600 text-xs mb-2 tracking-wider">SCROLL TO EXPLORE</div>
          <ArrowDown className="w-6 h-6 text-gray-600 mx-auto" />
        </div>
      </div>
    </section>
  );
}

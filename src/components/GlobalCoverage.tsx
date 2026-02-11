import { MapPin } from 'lucide-react';

const activeNodes = [
  { city: 'LONDON', status: 'ACTIVE', coord: 'Surveillance active since 2023' },
  { city: 'TOKYO', status: 'ACTIVE', coord: 'East Asia hub operational' },
  { city: 'NEW YORK', status: 'ACTIVE', coord: 'North American primary node' }
];

export default function GlobalCoverage() {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">GLOBAL COVERAGE</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {activeNodes.map((node, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 bg-gradient-to-r from-gray-900 to-black border border-gray-800 hover:border-purple-500 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                      ACTIVE NODE: {node.city}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">{node.coord}</p>
                </div>
                <div className="text-xs font-mono text-green-400">{node.status}</div>
              </div>
            ))}
          </div>

          <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 overflow-hidden group hover:border-purple-500 transition-all">
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                <path
                  d="M 50,100 Q 200,50 350,100 T 650,100"
                  stroke="url(#mapGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />

                <ellipse cx="150" cy="180" rx="80" ry="40" fill="url(#mapGradient)" />
                <ellipse cx="400" cy="150" rx="100" ry="60" fill="url(#mapGradient)" />
                <ellipse cx="600" cy="200" rx="90" ry="50" fill="url(#mapGradient)" />

                <circle cx="150" cy="180" r="5" fill="#a855f7" className="animate-pulse" />
                <circle cx="400" cy="150" r="5" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="600" cy="200" r="5" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '1s' }} />

                <path d="M 150,180 Q 275,140 400,150" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M 400,150 Q 500,160 600,200" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="5,5" className="animate-pulse" />
              </svg>
            </div>

            <div className="absolute top-8 left-8 text-purple-400 font-mono text-xs">
              REAL-TIME NETWORK STATUS
            </div>

            <div className="absolute bottom-8 right-8 space-y-2 text-right">
              <div className="text-xs font-mono text-gray-500">NODES ONLINE: <span className="text-green-400">247</span></div>
              <div className="text-xs font-mono text-gray-500">COVERAGE: <span className="text-green-400">98.7%</span></div>
              <div className="text-xs font-mono text-gray-500">LATENCY: <span className="text-green-400">12ms</span></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

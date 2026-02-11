import { Brain, Scan, Activity, Eye } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'NEURAL TRACKING',
    description: 'Real-time biometric AI-driven learning algorithms analyze and adapt to pattern detection, predicted behavior, all unprecedented.',
    tag: 'PATTERN RECOGNITION',
    color: 'from-purple-600 to-purple-400'
  },
  {
    icon: Scan,
    title: 'IDENTITY SYNTHESIS',
    description: 'Leveraging a global database to build a complete identity profile in milliseconds. Facial recognition meets predictive analysis.',
    tag: 'IMMEDIATE ANALYSIS',
    color: 'from-red-600 to-red-400'
  },
  {
    icon: Activity,
    title: 'PREDICTIVE BEHAVIOR',
    description: 'Utilizing deep learning to anticipate movements and detect potential threats before they manifest.',
    tag: 'THREAT ANALYSIS',
    color: 'from-purple-600 to-pink-400'
  }
];

export default function CapabilitiesSection() {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden" id="protocol">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-purple-400 text-xs font-mono tracking-widest mb-4">
          CYBERSURGE PARAMETERS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">SYSTEM CAPABILITIES</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-purple-500 rounded-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${capability.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg`}></div>

              <div className="mb-6">
                <div className="inline-block p-3 bg-gray-800 group-hover:bg-purple-900/50 rounded-lg transition-colors">
                  <capability.icon className="w-8 h-8 text-purple-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {capability.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {capability.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <span className="text-xs font-mono text-purple-400">{capability.tag}</span>
                <Eye className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

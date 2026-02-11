import { Eye, Twitter, Github, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Eye className="w-8 h-8 text-purple-500" />
            <span>ARGUS</span>
          </div>

          <div className="flex flex-wrap gap-8 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Twitter className="w-4 h-4" />
              TWITTER / X
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GITHUB REPOSITORY
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Shield className="w-4 h-4" />
              SECURITY WHITEPAPER
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              DOCUMENTATION
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-mono text-xs text-purple-400 mb-3">VANTAGE</h4>
            <div className="space-y-2 text-gray-500">
              <div>Core System</div>
              <div>Neural Network</div>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs text-purple-400 mb-3">CORTEX-AI</h4>
            <div className="space-y-2 text-gray-500">
              <div>Deep Learning</div>
              <div>Pattern Analysis</div>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs text-purple-400 mb-3">SENTIENCE</h4>
            <div className="space-y-2 text-gray-500">
              <div>Behavioral Prediction</div>
              <div>Threat Assessment</div>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs text-purple-400 mb-3">INSPECTER</h4>
            <div className="space-y-2 text-gray-500">
              <div>Identity Verification</div>
              <div>Biometric Scan</div>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs text-purple-400 mb-3">VCND</h4>
            <div className="space-y-2 text-gray-500">
              <div>Network Operations</div>
              <div>Global Coverage</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-600 font-mono">
            PROTOTYPE NEXT SUPER SURVEILLANCE FRAMEWORK © 2026
          </div>
          <div className="text-xs text-gray-600 font-mono">
            CLASSIFIED: LEVEL 5 ACCESS REQUIRED
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block px-6 py-2 border border-purple-500/30 rounded-full text-xs font-mono text-purple-400">
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}

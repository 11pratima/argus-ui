import { Heart } from "lucide-react";

const architects = [
  {
    name: "[Arnav Ghosh]",
    role: "Lead Backend",
    status: "BCA",
    image: "/images/arnav.jpg",
  },
  {
    name: "[Mandira Singha]",
    role: "Host / PPT",
    status: "ECE",
    image: "/images/mandira.jpg",
  },
  {
    name: "[Abhishek Sha]",
    role: "Backend / Cybersecurity",
    status: "BCA",
    image: "/images/abhishek.jpg",
  },
  {
    name: "[Pratima Mishra]",
    role: "Lead Frontend",
    status: "BCA",
    image: "/images/pratima.jpg",
  },
];

export default function ArchitectsSection() {
  return (
    <section
      className="py-24 px-4 md:px-8 relative bg-black text-white"
      id="architects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="text-purple-400 text-xs font-mono tracking-widest mb-4">
              CLASSIFIED PERSONNEL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              ARCHITECTS OF SIGHT
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-purple-400" />
            <span></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architects.map((architect, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-purple-500 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Image Section */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={architect.image}
                  alt={architect.name}
                  className="w-full h-full object-cover group-hover: transition duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Hover Lock Effect */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="text-red-500 font-mono text-xs mb-2">
                      
                    </div>
                    <div className="text-purple-400 text-xs">
                     
                    </div>
                  </div>
                </div>

                {/* Status Dot */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {architect.name}
                </h3>

                <div className="text-sm text-gray-400 mb-1">
                  {architect.role}
                </div>

                <div className="text-xs font-mono text-purple-400">
                  {architect.status}
                </div>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 border-2 border-purple-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

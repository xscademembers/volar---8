import { motion } from "motion/react";
import { useState } from "react";
import { Factory, Zap, Droplet, HardHat, Building2, Server } from "lucide-react";

const industries = [
  { id: "power", name: "Power Generation", icon: Zap, x: 20, y: 30, stats: "98% Uptime" },
  { id: "oil", name: "Oil & Gas", icon: Droplet, x: 60, y: 40, stats: "Zero Incidents" },
  { id: "chemical", name: "Chemical", icon: Factory, x: 40, y: 60, stats: "100% Compliance" },
  { id: "cement", name: "Cement", icon: Building2, x: 75, y: 25, stats: "30% Cost Save" },
  { id: "mining", name: "Steel & Mining", icon: HardHat, x: 30, y: 70, stats: "24/7 Monitoring" },
  { id: "infra", name: "Infrastructure", icon: Server, x: 80, y: 65, stats: "Predictive AI" },
];

export function Industries() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="py-32 relative border-t border-surface-border bg-surface/10" id="industries">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Global Industry <span className="text-primary-400">Network</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Securing critical infrastructure across the world's most demanding sectors.
          </p>
        </div>

        <div className="relative h-[600px] w-full rounded-3xl border border-surface-border bg-surface/30 overflow-hidden">
          {/* Abstract World Map Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"></div>
          
          {/* Network Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {industries.map((start, i) => 
              industries.slice(i + 1).map((end, j) => (
                <motion.line
                  key={`${start.id}-${end.id}`}
                  x1={`${start.x}%`}
                  y1={`${start.y}%`}
                  x2={`${end.x}%`}
                  y2={`${end.y}%`}
                  stroke="rgba(50, 163, 255, 0.1)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              ))
            )}
          </svg>

          {/* Nodes */}
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${ind.x}%`, top: `${ind.y}%` }}
              onMouseEnter={() => setActiveNode(ind.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="relative">
                {/* Node Core */}
                <div className={`w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(50,163,255,0.8)] transition-transform duration-300 ${activeNode === ind.id ? 'scale-150' : ''}`}></div>
                
                {/* Pulse */}
                <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-50"></div>

                {/* Hover Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ 
                    opacity: activeNode === ind.id ? 1 : 0,
                    scale: activeNode === ind.id ? 1 : 0.9,
                    y: activeNode === ind.id ? 0 : 10,
                    pointerEvents: activeNode === ind.id ? 'auto' : 'none'
                  }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass-panel p-4 z-20"
                >
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-surface-border">
                    <ind.icon className="w-5 h-5 text-primary-400" />
                    <span className="font-semibold text-white">{ind.name}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Active Assets</span>
                      <span className="text-white font-mono">1,204</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Performance</span>
                      <span className="text-green-400 font-mono">{ind.stats}</span>
                    </div>
                    <div className="mt-2 h-1 w-full bg-surface-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 w-[85%]"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

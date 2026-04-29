import { motion } from "motion/react";
import { FileText, Users, Network, ArrowRight } from "lucide-react";

export function ThoughtLeadership() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-primary-400 text-sm font-mono uppercase tracking-wider mb-4">
                <Network className="w-4 h-4" />
                Industrial AI Roundtable
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Shaping the Future of <br />
                <span className="text-primary-400">Policy & Operations</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Join the global dialogue. We convene industry leaders, policymakers, and technologists to define the standards for AI in critical infrastructure.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.a 
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 flex items-center justify-between group hover:border-primary-500/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-primary-400 transition-colors">2026 State of Industrial AI Report</div>
                    <div className="text-sm text-gray-500">Download the comprehensive analysis</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
              </motion.a>

              <motion.a 
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-6 flex items-center justify-between group hover:border-primary-500/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-accent transition-colors">Mumbai Executive Roundtable</div>
                    <div className="text-sm text-gray-500">Request an invitation to the next session</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </motion.a>
            </div>
          </div>

          {/* Right: Network Graph Simulation */}
          <div className="relative h-[500px] glass-panel overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>
            
            {/* Simulated Nodes */}
            <div className="absolute inset-0">
              {[
                { top: '20%', left: '30%', label: 'Policy' },
                { top: '50%', left: '50%', label: 'Mumbai Hub', active: true },
                { top: '70%', left: '20%', label: 'Tech' },
                { top: '30%', left: '70%', label: 'EU Regs' },
                { top: '80%', left: '80%', label: 'Operations' },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                  style={{ top: node.top, left: node.left }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className={`w-4 h-4 rounded-full ${node.active ? 'bg-accent shadow-[0_0_20px_rgba(0,240,255,0.8)]' : 'bg-primary-500/50'}`}>
                    {node.active && <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50"></div>}
                  </div>
                  <span className={`text-xs font-mono ${node.active ? 'text-accent' : 'text-gray-500'}`}>{node.label}</span>
                </motion.div>
              ))}
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
                <motion.path
                  d="M 30% 20% L 50% 50% L 70% 30% M 50% 50% L 20% 70% M 50% 50% L 80% 80%"
                  fill="none"
                  stroke="rgba(50, 163, 255, 0.2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

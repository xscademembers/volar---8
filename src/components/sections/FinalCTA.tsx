import { motion } from "motion/react";
import { ArrowRight, Activity } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-surface-border">
      {/* Background: Activated Plant Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-background to-background"></div>
        
        {/* Glowing Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Multiplied Drones/Data Streams */}
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${Math.random() * 100},100 Q ${Math.random() * 100},50 ${Math.random() * 100},0`}
              fill="none"
              stroke="rgba(0, 240, 255, 0.2)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </svg>

        {/* Stable Predictive Graphs */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <motion.path
              d="M0,50 Q25,45 50,40 T100,20 L100,50 Z"
              fill="url(#roi-gradient)"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <defs>
              <linearGradient id="roi-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            System Online: All Assets Optimized
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Activate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent text-glow">Intelligence Layer</span> <br />
            of Your Plant.
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the world's leading industrial operators who have already transformed their critical infrastructure with Volar Alta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/50 animate-pulse"></div>
              <span className="relative z-10 flex items-center gap-2">
                Deploy Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border border-surface-border hover:bg-surface transition-all flex items-center justify-center gap-2">
              <Activity className="w-4 h-4 text-primary-400" />
              Schedule Architecture Review
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

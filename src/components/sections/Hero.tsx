import { motion } from "motion/react";
import { ArrowRight, Activity, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Copy */}
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <span className="px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono uppercase tracking-wider">
              Industrial Intelligence
            </span>
            <span className="text-gray-400 text-sm">Trusted by Fortune 500</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            The Operating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent text-glow">Intelligence</span> <br />
            Platform.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Transform critical infrastructure with AI-driven robotic inspections. 
            Predict failures, optimize maintenance, and ensure zero downtime.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 group">
              Activate Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold border border-surface-border hover:bg-surface transition-all flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary-400" />
              View Live Demo
            </button>
          </motion.div>

          {/* Rotating Industries Ticker */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 border-t border-surface-border mt-4"
          >
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">Securing Critical Assets In</p>
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-accent" /> Power</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary-400" /> Oil & Gas</span>
              <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-green-400" /> Chemical</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Cinematic Digital Twin (Simulated) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative h-[600px] w-full rounded-2xl border border-surface-border bg-surface/30 overflow-hidden backdrop-blur-sm"
        >
          {/* Simulated 3D Environment */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background"></div>
          
          {/* Scanning Line */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-accent/50 shadow-[0_0_20px_rgba(0,240,255,0.8)] z-20"
          ></motion.div>

          {/* Abstract Plant Structure */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-primary-500/20 rounded-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 border border-primary-500/40 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-1/2 h-1/2 border border-accent/50 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
            </div>
          </div>

          {/* Data Nodes */}
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"
          >
            <div className="absolute top-4 left-4 bg-black/80 border border-red-500/30 text-xs font-mono p-2 rounded text-red-400 whitespace-nowrap">
              Corrosion Detected: 87%
            </div>
          </motion.div>

          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]"
          >
            <div className="absolute top-4 right-4 bg-black/80 border border-green-500/30 text-xs font-mono p-2 rounded text-green-400 whitespace-nowrap">
              ESG Node: Optimal
            </div>
          </motion.div>

          {/* Drone Path */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M 10,90 Q 30,10 50,50 T 90,10"
              fill="none"
              stroke="rgba(0, 240, 255, 0.3)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <motion.circle
              r="1.5"
              fill="#00f0ff"
              filter="drop-shadow(0 0 4px #00f0ff)"
            >
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M 10,90 Q 30,10 50,50 T 90,10"
              />
            </motion.circle>
          </svg>

          {/* Overlay UI */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-30">
            <div className="glass-panel p-4 w-48">
              <div className="text-xs text-gray-400 font-mono mb-1">System Status</div>
              <div className="text-sm text-white font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live Telemetry
              </div>
            </div>
            <div className="glass-panel p-4">
              <div className="flex gap-1 items-end h-8">
                {[40, 70, 45, 90, 65, 85, 50].map((h, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [`${h}%`, `${Math.random() * 100}%`, `${h}%`] }}
                    transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                    className="w-2 bg-primary-500 rounded-t-sm"
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

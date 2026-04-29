import { motion } from "motion/react";
import { Cpu, Layers, BrainCircuit, BarChart3 } from "lucide-react";

const layers = [
  {
    id: "04",
    title: "Business Intelligence",
    description: "Maintenance timeline, cross-plant benchmarking, ESG reporting, ROI compounding.",
    icon: BarChart3,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    id: "03",
    title: "AI Cognition",
    description: "Crack classification, anomaly detection, corrosion prediction, risk prioritization.",
    icon: BrainCircuit,
    color: "text-primary-400",
    bg: "bg-primary-400/10"
  },
  {
    id: "02",
    title: "Multimodal Fusion",
    description: "Thermal, ultrasonic, visual, lidar, acoustic data synthesis.",
    icon: Layers,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    id: "01",
    title: "Robotic Inspection Hardware",
    description: "Drones, crawlers, quadrupeds, advanced sensors.",
    icon: Cpu,
    color: "text-gray-400",
    bg: "bg-gray-400/10"
  }
];

export function PlatformStory() {
  return (
    <section className="py-32 relative overflow-hidden" id="platform">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Industrial AI <br />
                <span className="text-primary-400">Stack Architecture</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                From raw sensor data to predictive business intelligence. Our platform unifies hardware and software into a single cognitive engine.
              </p>
            </motion.div>

            <div className="space-y-6">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="glass-panel p-6 flex items-start gap-6 group hover:border-primary-500/30 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl ${layer.bg} flex items-center justify-center shrink-0`}>
                    <layer.icon className={`w-6 h-6 ${layer.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-gray-500">LAYER {layer.id}</span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">{layer.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{layer.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Stack Visualization */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 flex flex-col justify-between py-12">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative h-24 w-full"
                >
                  {/* 3D Layer Representation */}
                  <div className="absolute inset-x-8 top-0 h-full transform perspective-1000 rotate-x-60 rotate-z-[-10deg]">
                    <div className={`w-full h-full border-2 border-surface-border rounded-xl bg-surface/80 backdrop-blur-sm flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-${layer.color.split('-')[1]}-500/50 transition-all duration-500 relative overflow-hidden`}>
                      
                      {/* Scanning effect */}
                      <motion.div 
                        animate={{ left: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-${layer.color.split('-')[1]}-500/20 to-transparent skew-x-12`}
                      ></motion.div>

                      <span className="text-surface-border font-display font-bold text-4xl">{layer.title}</span>
                    </div>
                  </div>
                  
                  {/* Connecting Lines */}
                  {index < layers.length - 1 && (
                    <div className="absolute left-1/2 bottom-[-2rem] w-px h-8 bg-gradient-to-b from-primary-500/50 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Data flow particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: ["0%", "100%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2, 
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  className="absolute w-1 h-1 bg-accent rounded-full shadow-[0_0_10px_#00f0ff]"
                  style={{ left: `${20 + Math.random() * 60}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

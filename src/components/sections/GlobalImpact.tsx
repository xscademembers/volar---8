import { motion } from "motion/react";
import { ShieldCheck, Clock, TrendingDown, Leaf } from "lucide-react";

const metrics = [
  {
    value: "100%",
    label: "Safety Increase",
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  },
  {
    value: "96%",
    label: "Downtime Reduction",
    icon: Clock,
    color: "text-primary-400",
    bg: "bg-primary-400/10",
    border: "border-primary-400/20"
  },
  {
    value: "86%",
    label: "Cost Reduction",
    icon: TrendingDown,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20"
  },
  {
    value: "30X",
    label: "Carbon Impact",
    icon: Leaf,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  }
];

export function GlobalImpact() {
  return (
    <section className="py-32 relative border-t border-surface-border bg-surface/20" id="impact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Global Impact Metrics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Transforming industrial operations from reactive maintenance to predictive intelligence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-8 relative overflow-hidden group border ${metric.border}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full ${metric.bg} group-hover:scale-150 transition-transform duration-700`}></div>
              
              <metric.icon className={`w-8 h-8 mb-6 ${metric.color}`} />
              
              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), type: "spring" }}
                  className={`text-5xl font-bold mb-2 ${metric.color} font-display`}
                >
                  {metric.value}
                </motion.div>
                <div className="text-gray-400 font-medium">{metric.label}</div>
              </div>

              {/* Simulated Graph/Animation in background */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  <motion.path
                    d="M0,50 Q25,40 50,20 T100,0 L100,50 Z"
                    fill="currentColor"
                    className={metric.color}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

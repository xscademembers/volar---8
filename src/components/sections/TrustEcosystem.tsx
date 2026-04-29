import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Volar Alta's platform didn't just digitize our inspections; it fundamentally changed how we predict maintenance cycles across our European grid.",
    author: "Director of Operations",
    company: "Global Power Conglomerate",
    metric: "40% Maintenance Cost Reduction"
  },
  {
    quote: "The ability to fuse thermal, visual, and ultrasonic data into a single AI dashboard has given us unprecedented visibility into our offshore assets.",
    author: "VP of Asset Integrity",
    company: "Leading Oil & Gas Provider",
    metric: "Zero Unplanned Downtime"
  }
];

export function TrustEcosystem() {
  return (
    <section className="py-32 relative bg-surface/20 border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CEO Quote Section */}
        <div className="relative rounded-3xl overflow-hidden mb-32">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/drone-inspection/1920/1080')] bg-cover bg-center opacity-20 grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          
          <div className="relative z-10 p-12 md:p-20 max-w-3xl">
            <Quote className="w-12 h-12 text-primary-500 mb-8 opacity-50" />
            <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-8">
              "We are not just capturing data; we are building the cognitive layer for the world's most critical infrastructure."
            </h3>
            <div>
              <div className="font-bold text-lg">Pravin Kumar</div>
              <div className="text-primary-400">CEO & Founder, Volar Alta</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-10 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-display font-bold text-6xl text-primary-500">{t.metric.split(' ')[0]}</span>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-border flex items-center justify-center text-gray-400 font-bold">
                  {t.company.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-gray-400">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Ribbon (Simulated Carousel) */}
        <div className="border-y border-surface-border py-10 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex gap-20 items-center whitespace-nowrap w-max"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                <span className="text-2xl font-display font-bold text-gray-600">TechCrunch</span>
                <span className="text-2xl font-display font-bold text-gray-600">Forbes</span>
                <span className="text-2xl font-display font-bold text-gray-600">Wired</span>
                <span className="text-2xl font-display font-bold text-gray-600">Bloomberg</span>
                <span className="text-2xl font-display font-bold text-gray-600">Reuters</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

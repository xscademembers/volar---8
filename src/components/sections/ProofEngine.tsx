import { motion } from "motion/react";
import { CheckCircle2, Award, Globe2, Database } from "lucide-react";

const proofs = [
  {
    title: "Technical Prowess",
    description: "Proprietary AI models trained on 10M+ industrial images for 99.9% defect recognition accuracy.",
    icon: Database,
    metric: "10M+",
    label: "Images Analyzed"
  },
  {
    title: "Global Compliance",
    description: "Certified to operate in high-risk environments across 15+ regulatory jurisdictions.",
    icon: Globe2,
    metric: "15+",
    label: "Jurisdictions"
  },
  {
    title: "Domain Expertise",
    description: "Founded by industrial engineers, built for critical infrastructure operators.",
    icon: Award,
    metric: "50k+",
    label: "Field Hours"
  },
  {
    title: "Scalable Infrastructure",
    description: "Deploy across a single plant or a global portfolio with unified reporting.",
    icon: CheckCircle2,
    metric: "100%",
    label: "Deployment Success"
  }
];

export function ProofEngine() {
  return (
    <section className="py-32 relative" id="company">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Standard for <br />
            <span className="text-primary-400">Industrial Intelligence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {proofs.map((proof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 relative overflow-hidden group"
            >
              {/* Background Footage Mask Simulation */}
              <div className="absolute inset-0 bg-surface-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/industrial/800/600')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <proof.icon className="w-8 h-8 text-primary-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{proof.title}</h3>
                  <p className="text-gray-400 mb-8">{proof.description}</p>
                </div>
                
                <div className="pt-6 border-t border-surface-border flex items-end justify-between">
                  <div>
                    <div className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-1">{proof.label}</div>
                    <div className="text-4xl font-display font-bold text-white">{proof.metric}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Chips */}
        <div className="mt-20 pt-10 border-t border-surface-border flex flex-wrap justify-center gap-4">
          {["IndiaAI Recognized", "Station F Alumni", "EU Horizon Partner", "ISO 27001 Certified"].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 rounded-full border border-surface-border bg-surface text-sm text-gray-300 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, Building2, Megaphone } from "lucide-react";

const useCases = [
  {
    icon: Calculator,
    title: "For Chartered Accountants",
    description:
      "Streamline ITR filing reminders, send bulk compliance notices, and onboard new clients effortlessly. Save 10+ hours/week on client communication.",
    highlights: ["ITR filing reminders", "Compliance notices", "Document collection"],
  },
  {
    icon: Building2,
    title: "For Financial Firms",
    description:
      "Manage client portfolios, send market updates, and automate KYC document requests. Keep your clients informed and engaged.",
    highlights: ["Portfolio updates", "KYC automation", "Client engagement"],
  },
  {
    icon: Megaphone,
    title: "For Marketing Teams",
    description:
      "Schedule drip campaigns, send personalized newsletters, and track email performance. Scale your outreach without scaling your team.",
    highlights: ["Drip campaigns", "Newsletters", "Performance tracking"],
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm font-semibold text-primary uppercase tracking-wider"
          >
            Use Cases
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mt-3"
          >
            Built for <span className="text-gradient">professionals</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-card">
                <uc.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
              <div className="flex flex-wrap gap-2">
                {uc.highlights.map((h) => (
                  <span key={h} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

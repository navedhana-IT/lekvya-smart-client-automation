import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, FolderUp, Send } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Create Organization",
    description: "Create your account in seconds and set up your organization profile to get started.",
  },
  {
    icon: FolderUp,
    step: "02",
    title: "Add Clients & Upload Documents",
    description: "Import your client list and upload relevant documents for easy access and management.",
  },
  {
    icon: Send,
    step: "03",
    title: "Schedule & Send Emails",
    description: "Use pre-built or custom templates to schedule and send professional emails at scale.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm font-semibold text-primary uppercase tracking-wider"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mt-3"
          >
            Get started in <span className="text-gradient">3 simple steps</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="relative flex flex-col items-center text-center p-8"
            >
              <div className="text-6xl font-extrabold text-primary/10 absolute top-0">
                {step.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mt-8 shadow-elevated">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

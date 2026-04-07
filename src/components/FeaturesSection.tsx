import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Mail,
  FileText,
  LayoutTemplate,
  Shield,
  Upload,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Client Onboarding System",
    description: "Smooth and structured onboarding flow to get clients started quickly.",
  },
  {
    icon: Mail,
    title: "Bulk Email Scheduler",
    description: "Send instant emails or schedule them daily, weekly, or monthly with ease.",
  },
  {
    icon: FileText,
    title: "Custom Email Templates",
    description: "Create personalized templates that match your brand and communication style.",
  },
  {
    icon: LayoutTemplate,
    title: "Pre-built Templates Library",
    description: "Ready-to-use professional email formats for common business scenarios.",
  },
  {
    icon: Shield,
    title: "Organization & Client Login",
    description: "Secure multi-user access with separate organization and client portals.",
  },
  {
    icon: Upload,
    title: "Client Document Submission",
    description: "Easy document upload and management with organized file handling.",
  },
  {
    icon: BarChart3,
    title: "Automation Dashboard",
    description: "Centralized control for all activities with real-time insights and analytics.",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm font-semibold text-primary uppercase tracking-wider"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mt-3"
          >
            Everything you need to{" "}
            <span className="text-gradient">automate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Powerful tools designed to save you hours every week and delight your clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

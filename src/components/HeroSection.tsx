import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight, Play } from "lucide-react";
import dashboardImg from "@/assets/dashboard-preview.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero-gradient pt-16">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium"
            >
              🚀 Now with 7-day Free Trial
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl leading-tight"
            >
              Automate Your Client{" "}
              <span className="text-gradient">Communication</span> &{" "}
              <span className="text-gradient">Onboarding</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              AI-powered workflows for CAs, financial firms, and marketing teams.
              Save hours every week with smart email scheduling, client management, and document handling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" className="bg-gradient-primary text-primary-foreground gap-2 text-base px-8 h-12 shadow-elevated">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 h-12">
                <Play className="w-4 h-4" /> Book a Demo
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">🔒 Secure</span>
              <span className="flex items-center gap-1.5">⚡ Reliable</span>
              <span className="flex items-center gap-1.5">🏢 Built for Professionals</span>
            </motion.div>
          </div>
        }
      >
        <img
          src={dashboardImg}
          alt="Lekvya AI Automation Dashboard"
          className="w-full h-full object-cover object-left-top"
        />
      </ContainerScroll>
    </section>
  );
}

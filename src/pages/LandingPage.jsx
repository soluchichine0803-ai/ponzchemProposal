import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
  ChevronDown,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { NAV_LINKS, FEATURES, STATS, FAQ } from "../lib/constants";
import { fadeUp, staggerContainer } from "../lib/motion";

const IconMap = {
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-blue rounded-lg glow-blue flex items-center justify-center">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">NexPay</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-text-secondary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-white/10 p-4 space-y-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-text-secondary hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <Button variant="ghost" className="w-full">Sign In</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="info" className="mb-4">Version 2.0 is now live</Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Modern Banking for <br />
              <span className="text-accent-blue">Digital Natives</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Manage assets, track spending, and grow your wealth with a platform designed for the future of finance.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8">
              Open Free Account <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="secondary" size="lg" className="h-14 px-8">
              View Solutions
            </Button>
          </motion.div>

          {/* Abstract Device Placeholder */}
          <motion.div
            variants={fadeUp}
            className="mt-16 relative mx-auto max-w-4xl aspect-[16/9] glass rounded-3xl p-4 glow-blue overflow-hidden"
          >
            <div className="w-full h-full bg-background-deep rounded-2xl flex items-center justify-center border border-white/5">
              <BarChart3 className="text-accent-blue/20 w-32 h-32 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Why choose NexPay?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Everything you need to manage your finances in one seamless experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = IconMap[feature.icon];
            return (
              <Card key={i} className="hover:border-accent-blue/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden border border-white/5"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{item.question}</span>
                <ChevronDown
                  className={`text-text-secondary transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-text-secondary border-t border-white/5">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 bg-accent-blue rounded flex items-center justify-center">
            <Zap size={14} className="text-white fill-current" />
          </div>
          <span className="text-lg font-display font-bold">NexPay</span>
        </div>
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} NexPay Fintech Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

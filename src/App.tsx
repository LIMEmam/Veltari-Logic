/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Bot, 
  Code, 
  Cpu, 
  CheckCircle2, 
  Send, 
  Monitor, 
  Zap, 
  ShieldCheck,
  Menu,
  X,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

type Page = 'home' | 'about' | 'pricing' | 'contact';

// --- Shared Components ---

const GlassCard = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`glass glass-hover p-8 rounded-3xl ${className}`}
  >
    {children}
  </motion.div>
);

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = "" 
}: { 
  children: ReactNode, 
  onClick?: () => void, 
  variant?: 'primary' | 'secondary' | 'outline',
  className?: string
}) => {
  const variants = {
    primary: "bg-white text-black hover:bg-blue-600 hover:text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 px-8 py-4",
    outline: "bg-transparent border border-white/20 hover:border-white/50 text-white px-8 py-4"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`rounded-full transition-all flex items-center justify-center gap-2 group ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

// --- Page Sections ---

const Home = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="space-y-32 py-12">
    {/* Hero Section */}
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
      >
        The 2026 Digital Standard
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[72px] md:text-[96px] font-black leading-[0.9] tracking-tighter text-white mb-6 uppercase"
      >
        Total Digital<br/>
        <span className="text-gradient">Transformation.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-slate-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
      >
        We build the <span className="text-white italic">Digital Nervous System</span> for enterprises. 
        Precision design, autonomous intelligence, and managed growth.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button onClick={() => setPage('contact')}>
          Start Your Transition <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="outline" onClick={() => setPage('about')}>
          Explore Logic
        </Button>
      </motion.div>
    </section>

    {/* Service Blocks */}
    <section className="px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard>
          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
            <Monitor className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">High-End Design</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Modern storefronts built for scale. Impeccable UI coupled with elite conversion metrics.
          </p>
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform cursor-pointer">Explore Architecture &rarr;</div>
        </GlassCard>

        <GlassCard className="ring-1 ring-blue-500/30">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            <Bot className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Logic Agents</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Autonomous support bots that handle complexity. Eliminate 10+ hours of manual admin weekly.
          </p>
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform cursor-pointer">Deploy Intelligence &rarr;</div>
        </GlassCard>

        <GlassCard>
          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Full Automation</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            The Veltari Bundle. We build it, we manage it, you grow. The ultimate business modernization.
          </p>
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform cursor-pointer">Bundle & Save &rarr;</div>
        </GlassCard>
      </div>
    </section>

    {/* Key Selling Point Banner */}
    <section className="py-24 bg-charcoal-light border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight">
            "We build it. We manage it. <span className="text-electric-blue">You grow.</span>"
          </h2>
          <p className="text-gray-400 text-lg">
            Stop worrying about tech debt. Veltari Logic provides complete end-to-end management of your digital infrastructure.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl font-display font-bold text-electric-blue mb-1">10h+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Admin Saved/Week</div>
          </div>
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl font-display font-bold text-electric-blue mb-1">90%</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Auto-Resolved Tsks</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
    <section className="text-center space-y-6 max-w-4xl mx-auto">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-blue-500 uppercase tracking-[0.3em] font-medium text-sm"
      >
        The Veltari Philosophy
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-display font-bold tracking-tight"
      >
        Your Digital <br /> Nervous System
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 text-xl font-light leading-relaxed"
      >
        Veltari Logic builds the intelligence that drives modern enterprises. 
        We specialize in the bridge between high-end design and autonomous workplace logic.
      </motion.p>
    </section>

    {/* Service Detail Boxes */}
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Box 1: Company Website */}
        <GlassCard className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
            <Monitor className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-4 text-white">Elite Company Websites</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            We build your company website from the ground up, focusing on a premium 'SaaS' aesthetic that signals elite quality to your clients. Our storefronts are designed for 2026 performance standards—lightning-fast, mobile-first, and architected specifically for high-intent conversions.
          </p>
        </GlassCard>

        {/* Box 3: workplace Automation (moved here for grid layout) */}
        <GlassCard className="flex flex-col">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-4 text-white">Workplace AI Automation</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            We integrate advanced AI agents directly into your team's nervous system. From managing complex calendars to qualifying B2B leads and processing documentation, we build and manage the intelligence layer that eliminates repetitive manual labor. We don't just add bots; we manage the agents for you.
          </p>
        </GlassCard>
      </div>

      {/* Box 2: AI Support Bot (Featured/Large) */}
      <GlassCard className="border-blue-500/30 bg-blue-500/[0.02]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 text-white">AI Support Logic</h3>
            <p className="text-blue-400 font-medium italic">"A digital team member that lives on your website."</p>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                Unlike old-school chatbots that could only answer "Yes" or "No" questions, our bots are powered by the same intelligence as ChatGPT. We "train" your bot by giving it all your business information—your price lists, your services, and your FAQs.
              </p>
              <p className="text-slate-400">
                It memorizes everything about your company so it can talk to your customers exactly like a human would.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Zap className="w-4 h-4 text-blue-500" /> It Never Sleeps
                </div>
                <p className="text-sm text-slate-500">Your business might close at 5:00 PM, but your website is still open. Your bot stays awake 24/7 to answer questions and capture leads while you sleep.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Zap className="w-4 h-4 text-blue-500" /> Instant Responses
                </div>
                <p className="text-sm text-slate-500">Customers today hate waiting. Your bot answers questions in less than a second. No "on-hold" music, no waiting for an email reply.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Zap className="w-4 h-4 text-blue-500" /> It Does the Work For You
                </div>
                <p className="text-sm text-slate-500">It doesn't just talk; it takes action. It can qualify a lead, collect a customer's phone number, or even book an appointment directly into your calendar.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Zap className="w-4 h-4 text-blue-500" /> One-Time Training
                </div>
                <p className="text-sm text-slate-500">Once we set it up, it never forgets a detail. It provides consistent, accurate information to every single person who visits your site.</p>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>

    <section className="glass rounded-3xl p-12 relative overflow-hidden text-center">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl -mr-32 -mt-32" />
      <h3 className="text-3xl font-display font-bold mb-4">Precision over Volume.</h3>
      <p className="text-slate-400 max-w-2xl mx-auto">
        We believe in "Simple Logic, Complex Results." Every line of code and every AI prompt we deploy is designed for edge-case resilience.
      </p>
    </section>
  </div>
);

const Pricing = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
    <div className="text-center space-y-4">
      <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight uppercase">Strategic Tiers</h2>
      <p className="text-slate-400 text-xl font-light">Choose the logic that powers your expansion.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* 1. The Veltari Bundle */}
      <GlassCard className="flex flex-col h-full border-blue-500/20 bg-blue-500/[0.02]">
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">The Veltari Bundle</h3>
          <div className="space-y-1">
            <div className="text-4xl font-display font-bold text-white">$175 <span className="text-base font-normal text-slate-500 uppercase">/ month</span></div>
            <div className="text-sm text-blue-400 font-bold uppercase tracking-widest">+ $300 Setup Fee</div>
          </div>
        </div>
        <p className="text-slate-400 mb-8 flex-grow">A perfect fusion of design and intelligence. We build your site and your bot, and manage it all.</p>
        <ul className="space-y-4 mb-8">
          {[
            'Fully Built Company Website',
            'Advanced Logic Support Bot',
            'Detailed Monthly Breakdown',
            'Fully Managed by Veltari',
            'Hosted on Veltari Edge'
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
              <Zap className="w-4 h-4 text-blue-500 shrink-0" /> {t}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full" onClick={() => setPage('contact')}>Select Bundle</Button>
      </GlassCard>

      {/* 2. The Website */}
      <GlassCard className="flex flex-col h-full">
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">The Website</h3>
          <div className="space-y-1">
            <div className="text-4xl font-display font-bold text-white">$275 <span className="text-base font-normal text-slate-500 uppercase">/ year</span></div>
            <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Ongoing Maintenance</div>
          </div>
        </div>
        <p className="text-slate-400 mb-8 flex-grow">Elite design for a modern storefront. Efficiency and cross-device compatibility guaranteed.</p>
        <ul className="space-y-4 mb-8">
          {[
            'Fully Built Enterprise Site',
            'Modern 2026 UI/UX',
            'Hosted & Managed by Veltari',
            'Fully Responsive Design',
            'Edge-Optimized Performance'
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0" /> {t}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full" onClick={() => setPage('contact')}>Select Website</Button>
      </GlassCard>

      {/* 3. The Support Bot */}
      <GlassCard className="flex flex-col h-full">
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">The Support Bot</h3>
          <div className="space-y-1">
            <div className="text-4xl font-display font-bold text-white">$150 <span className="text-base font-normal text-slate-500 uppercase">/ month</span></div>
            <div className="text-sm text-blue-400 font-bold uppercase tracking-widest">+ $300 Setup Fee</div>
          </div>
        </div>
        <p className="text-slate-400 mb-8 flex-grow">Deploy an advanced logic agent to your existing infrastructure. Seamless integration.</p>
        <ul className="space-y-4 mb-8">
          {[
            'Add to Any Pre-existing Site',
            'Setup by Veltari Experts',
            'Managed Logic Flow',
            'Advanced Data Training',
            'Omnichannel Ready'
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
              <Bot className="w-4 h-4 text-slate-500 shrink-0" /> {t}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full" onClick={() => setPage('contact')}>Select Bot</Button>
      </GlassCard>

      {/* 4. AI Automation */}
      <GlassCard className="flex flex-col h-full lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-2">
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">AI Automation</h3>
          <div className="space-y-1">
            <div className="text-4xl font-display font-bold text-white">$100 <span className="text-base font-normal text-slate-500 uppercase">/ month</span></div>
            <div className="text-sm text-blue-400 font-bold uppercase tracking-widest">+ $250 Setup Fee</div>
          </div>
        </div>
        <p className="text-slate-400 mb-8 flex-grow">Transform your internal operations. We build and manage AI agents for your specific workplace needs.</p>
        <ul className="space-y-4 mb-8">
          {[
            'Add & Manage Work Automations',
            'Custom AI Agent Design',
            'Managed Internal Logic',
            'Efficiency Training Session',
            'Workplace AI Integration'
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
              <Cpu className="w-4 h-4 text-slate-500 shrink-0" /> {t}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full" onClick={() => setPage('contact')}>Explore Automation</Button>
      </GlassCard>

      {/* 5. The Full Bundle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-hover relative bg-blue-600/10 border-2 border-blue-600 rounded-3xl p-8 flex flex-col h-full lg:col-start-2 lg:col-end-4 md:col-start-2 md:col-end-3 group transition-all duration-500"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
          Maximum Transformation
        </div>
        <div className="space-y-4 mb-8">
          <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">The Full Bundle</h3>
          <div className="space-y-1">
            <div className="text-5xl font-display font-bold text-white">$300 <span className="text-lg font-normal text-slate-500 uppercase">/ month</span></div>
            <div className="text-base text-blue-400 font-bold uppercase tracking-widest">+ $500 Setup Fee</div>
          </div>
        </div>
        <p className="text-slate-300 mb-8 flex-grow text-lg italic">"The ultimate business modernization. Every logic service we offer, integrated and managed."</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          {[
            'All Services Included',
            'Premium Company Website',
            'Advanced Logic Support Bot',
            'Workplace AI Automation',
            'Fully Managed Infrastructure',
            'Hosted on Veltari Edge',
            'Priority Support Access',
            'AI Efficiency Consulting'
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-100 list-none">
              <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" /> {t}
            </li>
          ))}
        </div>
        <Button variant="primary" className="w-full electric-glow" onClick={() => setPage('contact')}>Get Full Bundle</Button>
      </motion.div>
    </div>
  </div>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-display font-bold tracking-tight">Ready for a <span className="text-electric-blue">Demo</span>?</h2>
            <p className="text-gray-400 text-lg">Leave your details and our logic agent will contact you to schedule a deep dive.</p>
          </div>

          <form 
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Name</label>
                <input type="text" required placeholder="John Veltari" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email</label>
                <input type="email" required placeholder="john@logic.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                <option className="bg-charcoal text-white">The Veltari Bundle</option>
                <option className="bg-charcoal text-white">High-End Web Design</option>
                <option className="bg-charcoal text-white">Logic Agent Implementation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none" />
            </div>

            <Button className="w-full">
              {submitted ? "Sending..." : "Request a Demo"} <Send className="w-4 h-4 ml-2" />
            </Button>
            
            {submitted && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-electric-blue text-sm text-center font-medium"
              >
                Logic received. We'll be in touch within 24 hours.
              </motion.p>
            )}
          </form>
        </section>

        {/* Bot Demo Placeholder */}
        <section className="space-y-8 flex flex-col justify-center">
          <div className="glass rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent opacity-50" />
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 bg-electric-blue rounded-full flex items-center justify-center relative z-10 mb-8"
            >
              <Bot className="w-12 h-12 text-white" />
            </motion.div>
            <h3 className="text-2xl font-display font-semibold mb-4 relative z-10">Live Agent Preview</h3>
            <p className="text-gray-400 max-w-sm mb-8 relative z-10">
              Interactive Botpress demo loading... <br />
              (Placeholder for Veltari-Logic-Agent_v2.0)
            </p>
            <div className="flex gap-4 relative z-10 opacity-50">
              <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse delay-150" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 text-gray-500">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-bold">End-To-End Security</span>
            <span className="text-xs uppercase tracking-widest font-bold">SOC2 Compliant Logic</span>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- Core Layout ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItem = ({ p, label }: { p: Page, label: string }) => (
    <button 
      onClick={() => { setCurrentPage(p); setIsMenuOpen(false); window.scrollTo(0, 0); }}
      className={`text-sm font-medium transition-colors ${currentPage === p ? 'text-blue-500' : 'hover:text-white'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen selection:bg-electric-blue/30 overflow-x-hidden">
      {/* Navigation */}
  <nav className="fixed top-0 w-full z-50 px-10 py-8 transition-all duration-300">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setCurrentPage('home')}>
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-transform duration-700">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          VELTARI <span className="text-blue-500">LOGIC</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <NavItem p="home" label="Home" />
        <NavItem p="about" label="About" />
        <NavItem p="pricing" label="Pricing" />
        <NavItem p="contact" label="Contact" />
        <Button variant="primary" onClick={() => setCurrentPage('contact')}>
          Get Started
        </Button>
      </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-6 right-6 glass p-8 rounded-3xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-6 items-center">
                <NavItem p="home" label="Home" />
                <NavItem p="about" label="About" />
                <NavItem p="pricing" label="Pricing" />
                <NavItem p="contact" label="Contact" />
                <Button variant="primary" className="w-full mt-4" onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}>
                  Deploy Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-24 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {currentPage === 'home' && <Home setPage={setCurrentPage} />}
            {currentPage === 'about' && <About />}
            {currentPage === 'pricing' && <Pricing setPage={setCurrentPage} />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="pt-24 pb-12 border-t border-white/5 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Code className="text-electric-blue w-6 h-6" />
                <span className="text-2xl font-display font-bold">VELTARI LOGIC</span>
              </div>
              <p className="text-gray-500 max-w-sm mx-auto md:mx-0">
                Crafting the future of digital commerce and support. 
                Based in the 2026 digital ether.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 glass flex items-center justify-center rounded-full hover:text-electric-blue transition-colors">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-display font-bold uppercase tracking-widest text-xs text-gray-300">Headquarters</h4>
              <ul className="text-gray-500 space-y-3 text-sm">
                <li><button onClick={() => setCurrentPage('home')}>Logic Lab</button></li>
                <li><button onClick={() => setCurrentPage('about')}>Philosophy</button></li>
                <li><button onClick={() => setCurrentPage('pricing')}>Bundled Solutions</button></li>
                <li><button onClick={() => setCurrentPage('contact')}>Direct Access</button></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-display font-bold uppercase tracking-widest text-xs text-gray-300">Legal</h4>
              <ul className="text-gray-500 space-y-3 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>SOC2 Protocols</li>
                <li>AI Ethics Charter</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <div className="flex gap-6">
              <span>Est. 2026</span>
              <span>Tokyo / San Francisco / London</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-slate-400">System Status: Optimal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

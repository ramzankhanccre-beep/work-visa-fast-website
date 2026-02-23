import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe2,
  GraduationCap,
  Briefcase,
  Building2,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  ChevronLeft,
  X,
  MessageCircle,
  Phone
} from 'lucide-react';

const DisclaimerPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show initially after 3 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
      // Auto close after 10 seconds of being visible
      setTimeout(() => setIsVisible(false), 10000);
    }, 3000);

    // Then show every 30 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
      // Auto close after 10 seconds of being visible
      setTimeout(() => setIsVisible(false), 10000);
    }, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
        >
          <div className="bg-amber-500 text-slate-900 p-5 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="font-bold text-lg mb-1">Trial Version</p>
                <p className="text-sm font-medium opacity-90">
                  This is a trial version of my work. If you want to get this website, contact <strong>+971 566002589</strong>
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-1.5 hover:bg-amber-600 rounded-lg transition-colors shrink-0 bg-amber-400/50"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-3">
              <a 
                href="tel:+971566002589" 
                className="flex-1 bg-slate-900 text-amber-500 hover:bg-slate-800 py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a 
                href="https://wa.me/971566002589" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 text-white hover:bg-emerald-500 py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Globe2 className="h-8 w-8 text-amber-400" />
          <span className="text-2xl font-bold text-white tracking-tight">
            Work Visa <span className="text-amber-400">Fast</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#global" className="hover:text-amber-400 transition-colors">Global Reach</a>
          <a href="#apply" className="hover:text-amber-400 transition-colors">Apply Now</a>
        </div>
        <motion.a 
          href="#apply" 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] inline-block"
        >
          Get Started
        </motion.a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Your Global Career, <br />
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500"
            >
              Accelerated
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Expediting work permits for recent graduates and global professionals. 
            Seamless relocation, zero hassle.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a 
              href="#apply" 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center">
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-10 h-10 text-amber-400" />,
      title: "Graduate Permits",
      description: "Fast-tracked work authorization for recent international graduates seeking their first global role."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-amber-400" />,
      title: "Professional Visas",
      description: "Streamlined processing for skilled laborers and experienced professionals across all industries."
    },
    {
      icon: <Building2 className="w-10 h-10 text-amber-400" />,
      title: "Corporate Relocation",
      description: "End-to-end expat management and bulk visa processing for multinational corporations."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Tailored visa solutions designed to get you working faster, wherever your career takes you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-amber-500/10"
            >
              <div className="bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GlobalReach = () => {
  return (
    <section id="global" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Borderless Ambition, <br />
              <span className="text-amber-400">Global Reach</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg mb-8 leading-relaxed"
            >
              We operate across 50+ countries, ensuring your transition is smooth regardless of your destination. Our network of legal experts and immigration specialists are stationed worldwide.
            </motion.p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "98%", label: "Approval Rate" },
                { value: "50+", label: "Countries Served" },
                { value: "10k+", label: "Visas Secured" },
                { value: "24/7", label: "Global Support" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract Globe Representation */}
            <div className="aspect-square rounded-full border border-slate-800 relative flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-slate-700/50 border-dashed animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-slate-600/30 animate-[spin_40s_linear_infinite_reverse]" />
              <Globe2 className="w-32 h-32 text-amber-500/20" />
              
              {/* Floating Pins */}
              {[
                { top: '20%', left: '20%' },
                { top: '30%', right: '25%' },
                { bottom: '25%', left: '30%' },
                { bottom: '40%', right: '15%' },
                { top: '50%', left: '10%' },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                  style={pos}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nationality: '',
    targetCountry: '',
    experience: ''
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="apply" className="py-24 bg-slate-900 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700"
        >
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-white mb-2">Start Your Application</h2>
                  <p className="text-slate-400">Takes less than 2 minutes.</p>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-between mb-8 relative">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -z-10 -translate-y-1/2 rounded-full" />
                  <div 
                    className="absolute top-1/2 left-0 h-1 bg-amber-500 -z-10 -translate-y-1/2 rounded-full transition-all duration-300"
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  />
                  {[1, 2, 3].map((num) => (
                    <div 
                      key={num}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        step >= num ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Current Nationality</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                            placeholder="e.g. Indian"
                            value={formData.nationality}
                            onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Target Country</label>
                          <select 
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none"
                            value={formData.targetCountry}
                            onChange={(e) => setFormData({...formData, targetCountry: e.target.value})}
                          >
                            <option value="" disabled>Select a destination</option>
                            <option value="UAE">United Arab Emirates</option>
                            <option value="UK">United Kingdom</option>
                            <option value="USA">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Years of Experience</label>
                          <select 
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none"
                            value={formData.experience}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          >
                            <option value="" disabled>Select experience level</option>
                            <option value="0-1">0-1 Years (Recent Graduate)</option>
                            <option value="2-5">2-5 Years</option>
                            <option value="5-10">5-10 Years</option>
                            <option value="10+">10+ Years</option>
                          </select>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8 flex justify-between">
                    {step > 1 ? (
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="px-6 py-3 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                    ) : (
                      <div /> // Spacer
                    )}

                    {step < 3 ? (
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-2"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">Application Received!</h3>
                <p className="text-slate-400 mb-8">
                  Thank you, {formData.fullName}. One of our immigration specialists will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                    setFormData({fullName: '', email: '', nationality: '', targetCountry: '', experience: ''});
                  }}
                  className="text-amber-500 hover:text-amber-400 font-medium"
                >
                  Submit another application
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe2 className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Work Visa <span className="text-amber-400">Fast</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Your trusted partner in global mobility. We make international career transitions seamless and compliant.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">Our Services</a></li>
              <li><a href="#global" className="text-slate-400 hover:text-amber-400 transition-colors">Global Network</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Visa Requirements</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Burjuman Business Center,<br />Office 804,<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>+971 56 552 4467</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>hello@workvisafast.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Work Visa Fast. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-amber-500/30">
      <DisclaimerPopup />
      <Navbar />
      <Hero />
      <Services />
      <GlobalReach />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

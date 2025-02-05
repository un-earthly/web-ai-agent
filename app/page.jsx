"use client"

import Hero from "../components/hero"
import Navbar from "../components/navbar"
import { SparklesCore } from "../components/sparkles"
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  ArrowUp,
  Menu,
  X
} from 'lucide-react';
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState, useEffect } from 'react';
import { Star, Zap, Brain, Code, MessageSquare, Image, Music, Lock, Users, CheckCircle } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-20 right-4 rounded-full w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chat Support</DialogTitle>
        </DialogHeader>
        <div className="h-[400px] bg-black/50 rounded-lg p-4">
          {/* Chat interface would go here */}
          <div className="text-gray-400">Chat support interface coming soon...</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
            size="icon"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export const Features = () => {
  const features = [
    { icon: <Brain className="w-6 h-6" />, title: 'Text Analysis', description: 'Advanced NLP for deep content understanding' },
    { icon: <Image className="w-6 h-6" />, title: 'Image Generation', description: 'Create stunning visuals with AI' },
    { icon: <Music className="w-6 h-6" />, title: 'Text to Audio', description: 'Convert text to natural-sounding speech' },
    { icon: <Code className="w-6 h-6" />, title: 'Code Generation', description: 'AI-powered code suggestions and completion' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Features for Your Success
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm p-6 rounded-xl hover:bg-black/60 transition">
              <div className="text-purple-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export const HowItWorks = () => {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 1, title: 'Connect Your Data', desc: 'Easily integrate our API with your existing systems' },
            { step: 2, title: 'Process with AI', desc: 'Our AI analyzes and processes your content' },
            { step: 3, title: 'Get Results', desc: 'Receive actionable insights and generated content' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">{step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      features: ['5,000 API calls/month', 'Basic analytics', 'Email support', '3 team members']
    },
    {
      name: 'Professional',
      price: '$99',
      features: ['50,000 API calls/month', 'Advanced analytics', 'Priority support', '10 team members']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited API calls', 'Custom analytics', '24/7 support', 'Unlimited team members']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm p-8 rounded-xl hover:bg-black/60 transition">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-purple-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "The AI insights have transformed how we understand our customer data. Incredible tool!",
      author: "Sarah Johnson",
      role: "Data Analyst, TechCorp"
    },
    {
      quote: "The image generation capabilities are mind-blowing. It's saved us countless hours of work.",
      author: "Michael Chen",
      role: "Creative Director, DesignX"
    },
    {
      quote: "The API integration was seamless, and the results have exceeded our expectations.",
      author: "Emma Williams",
      role: "CTO, StartupHub"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-black/60 hover:transform hover:-translate-y-2">
                <p className="text-gray-400 mb-6 relative">
                  <span className="text-purple-500 text-4xl absolute -top-4 -left-2">"</span>
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/50 rounded-full group-hover:bg-purple-600 transition-colors"></div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export const About = () => {
  const [stats] = useState([
    { label: "API Calls Daily", value: "1M+", prefix: "" },
    { label: "Active Users", value: "50k+", prefix: "" },
    { label: "Countries Served", value: "100+", prefix: "" }
  ]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Story</h2>
        <p className="text-gray-400 text-lg mb-12">
          Founded in 2023, we set out to democratize AI technology for businesses of all sizes.
          Our team of engineers and researchers are passionate about making advanced AI capabilities
          accessible and easy to use.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:bg-black/60">
                <div className="text-4xl font-bold text-purple-500 mb-2">{stat.prefix}{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export const Security = () => {
  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Encryption",
      description: "End-to-end encryption for all your sensitive data"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Access Control",
      description: "Granular permissions and role-based access"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Compliance",
      description: "SOC 2 and GDPR compliant infrastructure"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Enterprise-Grade Security</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-black/60 hover:transform hover:-translate-y-2">
                <div className="text-purple-500 mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of companies using our AI platform to transform their business.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
            Start Free Trial
          </button>
          <button className="border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] text-purple-50 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Security />
        <Testimonials />
        <Pricing />
        <CTA />
        <div className="z-[9999999]">
          <ChatWidget />
          <BackToTop />
        </div>
      </div>
    </main>
  );
}
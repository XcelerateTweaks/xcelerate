'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-xcelerate-void to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-xcelerate-purple to-xcelerate-gold">
            Xcelerate Store
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            THE INFINITY FORGE
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Welcome to the FINAL FORM of PC performance. This isn't just a store.
            This is a performance temple, a gamer's vault, a creator's armory.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-xcelerate-purple rounded-full text-xl font-semibold hover:bg-opacity-90 transition-all duration-300 animate-glow"
          >
            Enter the Tweakverse™
          </motion.button>
        </motion.div>
      </section>

      {/* Core Philosophy Section */}
      <section ref={ref} className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-xcelerate-gold">
            CORE PHILOSOPHY
          </h2>
          <p className="text-2xl text-gray-300 italic">
            "Why settle for good when you can reprogram the laws of computing?"
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-xcelerate-void bg-opacity-50 backdrop-blur-lg border border-xcelerate-purple border-opacity-20 hover:border-opacity-100 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-xcelerate-neon">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Xcelerate Omega Suite™",
    description: "The all-in-one experience pack for CPU overdrive, GPU uplift, and direct-to-FPS acceleration.",
  },
  {
    title: "AI-Powered Dynamic Tweak Matrix™",
    description: "Real-time optimization powered by advanced AI algorithms.",
  },
  {
    title: "VaporTrail FPS Mode",
    description: "Extreme visuals & input sync for the ultimate gaming experience.",
  },
  {
    title: "Xcelerate PW Plan™",
    description: "Turn your laptop into a titanium titan and desktop into a volcanic beast.",
  },
  {
    title: "NeuralSync AI Companion",
    description: "Auto-adjusts your PC on game launch and learns your habits.",
  },
  {
    title: "X-GLASS++™ Interface",
    description: "Glass panels with ion-shift glow rings and animated hover cards.",
  },
]; 
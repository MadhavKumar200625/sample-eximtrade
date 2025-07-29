'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GrowWithGlobalSection = () => {
  return (
    <section className="relative bg-gradient-to-br  from-blue-200 via-pink-50 to-indigo-200 py-24 px-6 text-center overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight">
          GROW WITH GLOBAL
        </h2>
        <p className="text-2xl md:text-3xl text-blue-700 mb-10">
          IMPORT EXPORT AND SHIPMENT RECORDS
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-tr from-blue-700 to-blue-600 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-200 rounded-full"></span>
          <Link href="/contact"><span className="relative z-10">Schedule A Demo</span></Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GrowWithGlobalSection;
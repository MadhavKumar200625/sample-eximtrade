'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GrowWithGlobalSection = () => {
  return (
    <section className="relative flex justify-between px-32 items-center bg-blue-100 py-14  text-center overflow-hidden">
      <div>
<motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl max-w-2xl font-extrabold text-black mb-12 tracking-tight">
          GROW WITH GLOBAL IMPORT EXPORT AND SHIPMENT RECORDS
        </h2>
        
        <button
          
          className="relative inline-flex items-center justify-center px-8 py-4 text-md overflow-hidden font-semibold text-white transition-all duration-300 bg-blue-600 shadow-md group"
        >
          <Link href="/contact"><span className="relative z-10">Schedule A Demo</span></Link>
        </button>
      </motion.div>
      </div>

      <div>
        <img src='GROW-WITH-GLOBAL-IMPORT-EXPORT-AND-SHIPMENT-RECORDS.png' className='w-80'></img>
      </div>
      
    </section>
  );
};

export default GrowWithGlobalSection;
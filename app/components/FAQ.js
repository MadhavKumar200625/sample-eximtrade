'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquarePlus } from "lucide-react"; // modern icon

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-[-200px] right-[-200px] bg-blue-300/20 rounded-full blur-3xl w-[500px] h-[500px]" />
      <div className="absolute bottom-[-150px] left-[-150px] bg-purple-300/20 rounded-full blur-3xl w-[400px] h-[400px]" />

      <div className="mx-auto max-w-5xl relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-zinc-900 mb-16 leading-tight drop-shadow-md">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-xl border border-zinc-200 rounded-3xl shadow-xl hover:shadow-blue-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left cursor-pointer flex justify-between items-center group"
              >
                <span className="text-2xl font-semibold  text-zinc-800 group-hover:text-blue-600 transition">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageSquarePlus className="w-7 h-7 text-zinc-500 group-hover:text-blue-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="px-8 pb-8 pt-2 text-lg text-zinc-700 leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
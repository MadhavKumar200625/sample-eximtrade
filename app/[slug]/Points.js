"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Points = ({ points , heading , subheading , peviousSection}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className={`w-full bg-gradient-to-b  py-24 px-6 md:px-20 ${peviousSection ? 'from-sky-100 via-blue-50 to-sky-50' : 'from-white via-blue-50 to-blue-100'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-8 leading-tight">
          {heading}
        </h2>

        <h2 className="text-lg md:text-xl font-extrabold text-center text-gray-700 mb-16 leading-tight">
          {subheading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const isExpanded = expandedIndex === index;
            const pointNumber = String(index + 1).padStart(2, "0");
            const previewText =
              point.description.split(" ").slice(0, 25).join(" ") + "...";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-700 font-bold text-xl bg-blue-50 px-3 py-1 rounded-full shadow-sm">
                      {pointNumber}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {point.heading}
                    </h3>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isExpanded ? "expanded" : "collapsed"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0 }}
                      className="text-gray-600 mb-4 text-sm leading-relaxed"
                    >
                      {isExpanded ? point.description : previewText}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Points;
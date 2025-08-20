'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from 'react'

const points = [
  {
    title: "API Development",
    desc: "Our Developers will create really fast APIs with secure connections along with an API key & documentation to understand functionality.",
    image: "https://eximtradedata.com/images/code_plan.svg",
  },
  {
    title: "API integration",
    desc: "Then after reviewing the API documentation, you will make API calls and synchronize it into your applications.",
    image: "https://eximtradedata.com/images/api_integration.svg",
  },
  {
    title: "Execute strategies",
    desc: "Once you are done API integration, the next step is to execute strategies to create an exceptional user interface.",
    image: "https://eximtradedata.com/images/execute_strategy.svg",
  },
];

const HowToGetStarted = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
    return (
      <section className="bg-white py-20 relative">
        {/* Top heading */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            How to get started?

          </h2>
          
        </div>
  
        <div ref={ref} className="relative max-w-5xl mx-auto px-6 md:px-10">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-600 via-sky-500 to-blue-500 animate-pulse"></div>
  
          <div className="flex flex-col md:gap-20">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } md:justify-between`}
              >
                {/* Image placeholder */}
                <div>  </div>
                <img src={`/api/${point.title.toLowerCase().replace(/ /g,"-")}.webp`} className="h-56 flex justify-start"></img>
  
                {/* Connector dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center text-white bg-gradient-to-r font-black text-xl from-blue-600 to-sky-500 rounded-full shadow-lg">0{index+1}</div>
  
                {/* Content */}
                <div className="w-full md:w-5/12 mt-6 md:mt-0">
                  <h3 className="text-2xl font-semibold text-black">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-black">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default HowToGetStarted
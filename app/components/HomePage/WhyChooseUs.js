"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardData = [
  {
    title: "Comprehensive Guide",
    desc: "Get in-depth knowledge of existing market channels and consumer preferences around the globe. We provide a complete comprehensive guide of the global trade market that helps you to align your business with international trade with the help of our Global Import Export Trade Data.",
    image: "https://eximtrade-new.vercel.app/images/comprehensive_guide.svg",
  },
  {
    title: "Explore Foreign Market",
    desc: "With our Global Export Import Trade Data, find overseas customers and discover the best match that adds better economic value to your product. Simplified and genuine trade data pave the way to successful overseas trade for your business.",
    image: "https://eximtrade-new.vercel.app/images/explore_foreign.svg",
  },
  {
    title: "Build Valuable Partnership",
    desc: "With our fine tailored global import export trade data, assess your readiness for the target market and grow with your business. Understand the key aspects of international trade and associate with valuable industry peers.",
    image: "https://eximtrade-new.vercel.app/images/valuable_partnership.svg",
  },
];

const Card = ({ title, desc, image, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative w-full flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 bg-white/80 backdrop-blur border border-blue-400/60 shadow-xl rounded-3xl max-w-6xl mx-auto my-16 group hover:scale-[1.02] transition-transform duration-200"
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 group-hover:underline decoration-blue-400/60">
          {title}
        </h3>
        <p className="text-blue-700 text-lg leading-relaxed">{desc}</p>
      </div>

      {/* Neon border glow effect */}
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 blur opacity-25  transition-opacity duration-400"></div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 px-6 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          Why Businesses Trust Exim Trade Data for Global Import Export Data?
        </h2>
      </div>

      <div className="space-y-32">
        {cardData.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

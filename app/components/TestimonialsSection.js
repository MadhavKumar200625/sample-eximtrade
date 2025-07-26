'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    title: 'Outstanding',
    content:
      "We've been using Exim Trade Data for updated Global import-export data, and the experience has been outstanding",
    highlight: 'outstanding',
  },
  {
    title: 'Reliable Partner',
    content:
      "Exim Trade Data has been a reliable partner in our international trade journey. The quality of insights they provide is unmatched. Their interface is easy to use, and the support team is just amazing.",
    highlight: 'reliable partner',
  },
  {
    title: 'Exceptional Service',
    content:
      "The support team at Exim Trade Data always goes the extra mile to resolve our concerns. They deliver beyond expectations. Highly recommended for businesses looking to grow with data.",
    highlight: 'exceptional',
  },
  {
    title: 'Highly Accurate',
    content:
      "What sets Exim Trade Data apart is the accuracy and comprehensiveness of their data. We've found valuable leads and opportunities thanks to their insights.",
    highlight: 'accuracy',
  },
  {
    title: 'Professional Support',
    content:
      "The professionalism of the Exim Trade Data team is commendable. Every query is answered promptly, and the support is always available when we need it.",
    highlight: 'professional',
  },
  {
    title: 'Game Changer',
    content:
      "Using Exim Trade Data has been a game changer for our business. Their timely data and insights have helped us identify trends and stay ahead of the competition.",
    highlight: 'game changer',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          ✨ Testimonials
        </h2>
        <h3 className="text-2xl text-sky-700 mb-4">Our Client’s Testimonials</h3>
        <p className="text-gray-600 text-lg">
          We are known to deliver quality services to our clients. See what they are saying?
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={3}
        loop
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative p-8 md:p-10 min-h-[300px] mb-20  mx-2 rounded-3xl bg-white shadow-xl border border-gray-100 backdrop-blur-md">
              <h6 className="text-lg font-bold text-sky-600 capitalize mb-2">
                {t.title}
              </h6>
              <p className="text-gray-700 text-base leading-relaxed">
                {t.content.split(t.highlight).map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx !== arr.length - 1 && (
                      <b className="text-sky-600">{t.highlight}</b>
                    )}
                  </span>
                ))}
              </p>

              {/* Triangle Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute -bottom-3 left-8 rotate-90 fill-white text-white"
              >
                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              </svg>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Maya Sharma',
    content:
"We just started our new export business, and the guidance on the import-export trade reports of the Exim Trade Data is very helpful to get the buyers' insights.Their salespeople are also good in terms of knowledge, guidance, and services.",
    rating: 4,
  },
  {
    name: 'Divya Varshney',
    content:
      "We've been using Exim Trade Data for updated Global import-export data, and the experience has been outstanding. Their data is accurate and up-to-date, which has significantly improved our decision-making. The team is professional, responsive, and always ready to assist with any queries. I highly recommend Exim Trade Data for reliable import export data and excellent customer service.",
    rating: 5,
  },
  {
    name: 'Pepper Game',
    content:
      "Love the service. They are very helpful and nice. The owner is also very down to earth. Pushpmala is really helpful, patient and supportive too. She solved all my doubts through a Google meet. Would definitely recommend them.",
    rating: 5,
  },
  {
    name: 'Harshit Saxena',
    content:
      "Global Import Export Data services are really good and offer the best pricing in the market. We are happy with their services. Exim Trade Data offers 100% genuine and reliable data, which has helped my business grow.",
    rating: 5,
  },
  {
    name: 'Anjali Mishra',
    content:
      "I recently approached Exim Trade Data for global import export data related to electronic products for my business. They were very professional in their approach and swiftly provided the required data in a short span of time. I had a good experience getting service from them.I will surely approach them in the future as well.",
    rating: 5,
  },
  {
    name: 'Bhavya Sri Nadella',
    content:
      "We had a great experience working with Goutam for the EXIM website data. He was incredibly helpful in guiding us through the portal, patiently explaining how to access and interpret the data effectively. His support made it easy for us to get started, and the information provided through the 6-month subscription has been clear, well-structured, and valuable for our analysis. A big thanks to Goutam for his proactive assistance and smooth onboarding experience!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Our Client&apos;s Testimonials

        </h2>
        <p className="text-gray-600 text-lg">
          We are known to deliver quality services to our clients. See what they are saying?
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={24}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative p-6 md:p-8 mb-16 bg-white rounded-3xl shadow-xl border border-gray-100 min-h-[320px] flex flex-col justify-between">
              {/* Name at top */}
              <div className="text-lg font-bold text-sky-800 mb-2">{t.name}</div>

<p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-4 overflow-hidden text-ellipsis whitespace-pre-line">
                {t.content}
              </p>

              <div className="flex items-center gap-1 text-yellow-500 text-lg">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <span key={starIdx}>
                    {starIdx < t.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="absolute -bottom-3 left-6 rotate-90"
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
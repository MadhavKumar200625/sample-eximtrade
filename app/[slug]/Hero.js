'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({ title, description, image }) => {
  return (
<section className="w-full bg-gradient-to-br from-blue-50 via-sky-100 to-sky-50 pb-14 pt-32">
    
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6 whitespace-pre-line">
            {description}
          </p>
          <Link href="/pricing">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Get Insight Reports →
            </span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={image}
            alt="Hero image"
            width={500}
            height={400}
            className="rounded-xl shadow-xl object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
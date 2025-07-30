import React from 'react'

const ContactInfo = () => {
  return (
   <section className="relative z-10 pb-32 py-36 px-4 md:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Card 1: Support */}
        <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 bg-blue-100 text-blue-600 text-2xl flex items-center justify-center rounded-full">
              📞
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Support Enquiry</h2>
          </div>
          <div className="space-y-5 text-gray-700 text-base">
            <div className="flex gap-3">
              <span className="text-xl">📱</span>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                  +91 96258 12393
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">✉️</span>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:support@yourdomain.com" className="text-blue-600 hover:underline">
                   info@eximtradedata.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Visit Us */}
        <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 bg-green-100 text-green-600 text-2xl flex items-center justify-center rounded-full">
              🏢
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Reach Us</h2>
          </div>
          <div className="space-y-5 text-gray-700 text-base">
            <div className="flex gap-3">
              <span className="text-xl">📌</span>
              <div>
                <p className="font-semibold">Location</p>
                <p>G-232 , Noida Sector-63, Uttar Pradesh - 201301, India</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">🕒</span>
              <div>
                <p className="font-semibold">Hours</p>
                <p>Monday - Friday: 9:00 am to 7:00 pm</p>
                <p>Saturday: 9:00 am to 5:00 pm</p>
                <p>Sunday: Closed</p>

              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default ContactInfo
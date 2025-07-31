'use client'
import React from 'react'


const page = () => {
  return (
      <div className="bg-white pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-neutral-800 text-center  mb-12">Terms Of Service</h1>
      <h2 className="text-2xl font-semibold text-blue-700 mb-3">
        Exim Trade Data : Terms Of Service
      </h2>
<p className="text-gray-700 leading-relaxed mb-8">
           The following terms and conditions of service (“Terms of Service”) apply to all visitors of eximtradedata.com website and associated web pages (“Website”). By accessing this website, you hereby accept the following terms and conditions.


          </p>


      <section className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            Collection of Personal Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Your right to use the Website is personal to you. You agree not to
            reproduce, duplicate, copy, sell, resell, use or exploit for any
            commercial purposes, the Website or use of or access to the Website
            or any information or technology obtained from the Website. The
            contents of the Website, including, without limitation, any content,
            images, logos and other material are protected under both India and
            foreign copyright, patent, trademark, and other laws of Exim Trade
            Data.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            Changes and Modifications to the Website
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Personal information includes any information that you choose to
            provide to us as part of registering for an account. This will
            include information such as your name, mobile number, address, date
            of birth, social security number, bank account information, etc.
            Besides any information you may directly provide, you may give us
            authorization to access Personal Information from third parties.
          </p>
          <p className="text-gray-700 mt-3 leading-relaxed">
            In addition, we may also collect information when you use our
            products or services, such as the search queries you use, how you
            use the services we provide, and the types of requests you make.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            Use of Personal Information
          </h3>
          <p className="text-gray-700 leading-relaxed mb-5">
            In general we will use the Personal Information that you share for
            the purpose for which the information was provided, for providing
            you with information that you have requested or may relate to your
            request, for informing you about services that you may be interested
            in, or to improve the WebSite and services we offer customers. Our
            use of your Personal Information may include, without limitation,
            the following:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Register you as a user and identify you when log in",
              "Communicate regarding account information, wire transfers, customer service requests, marketing communications, etc",
              "Obtain maintain, improve, and provide to you the Service and to conduct our business",
              "Produce data analytics and reports containing anonymized summaries of Personal Information and other information that is not Personal Information (such information, \"General Information\") that we share with business partners.",
              "General Information may include Personal Information that has been aggregated, anonymized and will not identify you"
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-blue-50 shadow-md text-blue-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            Disclosure of Personal Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Personal Information may be disclosed in limited circumstances,
            including, but not limited to, meet any applicable law, regulation,
            legal process or enforceable governmental request, enforce
            applicable Terms of Service, including investigation of potential
            violations, detect, prevent, or otherwise address fraud, security or
            technical issues, to protect and defend the rights or property of
            Exim Trade Data, or in an emergency threatening an individual&posa;s
            life, health, or security.
          </p>
          <p className="text-gray-700 mt-3 leading-relaxed">
            We rely on third-party service providers to perform a variety of
            services on our behalf, such as hosting our website. In so doing,
            we may need to share your Personal Information with them. We provide
            our service providers with only the Personal Information they need
            to perform their services and we require that they protect this
            information and not use it for any other purpose. We may supplement
            your personal information with information from third parties.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            Information Transfer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Your Personal Information may be transferred to, stored, and
            processed in a country other than the one in which it was provided.
            This may include the United States. When we do so, we transfer
            information in compliance with applicable data protection laws. And,
            we take steps to protect Personal Information in whatever country it
            is stored in or transferred to. We have procedures and controls to
            help ensure this.
          </p>
        </div>
      </section>
    </div>
  )
}

export default page
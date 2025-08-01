import Link from 'next/link'
import React from 'react'
import Hero from '../components/GlobalPorts/Hero'
import PortDataByCountry from '../components/GlobalPorts/PortDataByCountry'
import ContactUs from '../components/ContactUs'


const page = () => {
  return (
    <main>
      <Hero></Hero>
      <PortDataByCountry></PortDataByCountry>
      <ContactUs></ContactUs>
    </main>
  )
}

export default page
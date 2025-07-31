import React from 'react'
import Hero from '../components/OurClients/Hero'
import Sectors from '../components/OurClients/Sectors'
import TestimonialsSection from '../components/TestimonialsSection'
import Reputation from '../components/OurClients/Reputation'



const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Sectors></Sectors>
        <Reputation></Reputation>
        <TestimonialsSection></TestimonialsSection>
    </main>
  )
}

export default page
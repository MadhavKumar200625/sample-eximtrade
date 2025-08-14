import React from 'react'
import Hero from './Hero'
import CountryLinksSection from "./CountryLinksSection"
import Includes from './Includes'
import What from './What'


const page = () => {
  return (
    <main>
        <Hero></Hero>
        <CountryLinksSection></CountryLinksSection>
        <Includes></Includes>
        <What></What>
    </main>
  )
}

export default page
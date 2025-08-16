import React from 'react'
import Hero from './Hero'
import CountryLinksSection from "./CountryLinksSection"
import Includes from './Includes'
import What from './What'
import Who from './Who'
import Suppliers from './Buyers'
import ClientsSection from '../components/ClientsSection'
import GlobalImpact from './GlobalImpact'
import ImportantLinks from './ImportantLinks'
import FindWhat from './FindWhat'
import GetTradeData from './GetTradeData'



const page = () => {
  return (
    <main>
        <Hero></Hero>
        <CountryLinksSection></CountryLinksSection>
        <Includes></Includes>
        <What></What>
        <Who></Who>
        <Suppliers></Suppliers>
        <ClientsSection></ClientsSection>
        <GlobalImpact></GlobalImpact>
        <ImportantLinks></ImportantLinks>
        <FindWhat></FindWhat>
        <GetTradeData></GetTradeData>
    </main>
  )
}

export default page
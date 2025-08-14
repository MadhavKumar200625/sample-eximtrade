import React from 'react'
import Hero from './Hero'
import Companies from './Companies'

const productDirectorySample = {
  defaultLetter: "A",
  totalValues: 700,
  companies: Array.from({ length: 100 }, (_, i) => ({
    ROW_NUM: i + 1,
    product: `AS Product ${i + 1}`,
  })),
};

const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Companies {...productDirectorySample} ></Companies>
    </main>
  )
}

export default page
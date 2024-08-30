import React from 'react'
import Categories from './aboutcomponents/Categories'
import Hero from './aboutcomponents/Hero'
import Listing from './aboutcomponents/Listing'
import Newsletter from './aboutcomponents/Newsletter'
import Reviews from './aboutcomponents/Reviews'
import Sales from './aboutcomponents/Sales'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Hero />
      <Sales />
      <Categories />
      <Listing />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default About
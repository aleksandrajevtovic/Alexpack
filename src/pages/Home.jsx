import React from 'react'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Hero from '../components/hero/Hero'
import Howtouse from '../components/Howtouse/Howtouse'
import Innovation from '../components/Innovation/Innovation'
import Navigation from '../components/Navigation/Navigation'

const Home = () => {
  return (
    <div>
    <Navigation />
    <Hero />
    <Innovation />
    <Features />
    <Howtouse />
    <Footer />
  </div>
  )
}

export default Home
import React from 'react'
import Backtotop from '../components/Backtotop'
import Header from '../components/Header'
import Economy from '../components/Economy'
import Features from '../components/Features'
import Tourroad from '../components/Tourroad'
import Swipcardsec from '../components/Swipcardsec'
import Travelersec from '../components/Travelersec'
import Customer from '../components/Customer'
import Memoriesec from '../components/Memoriesec'
import Formsec from '../components/Formsec'
import Lastsec from '../components/Lastsec'

const Home = () => {
  return (
    <div>
      <Backtotop />
      <Features />
      <Tourroad />
      <Swipcardsec />
      <Travelersec />
      <Customer />
      <Memoriesec />
      <Formsec />
      <Lastsec />
    </div>
  )
}

export default Home
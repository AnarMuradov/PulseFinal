import React from 'react'
import Slider from '../../components/HomeSections/SliderSection'
import MenuSections from '../../components/HomeSections/MenuSections'
import WelcomeSection from '../../components/HomeSections/WelcomeSection'
import { Helmet } from 'react-helmet-async'


const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <main>
      <Slider/>
      <WelcomeSection/>
      <MenuSections/>
    </main>
    </>
  )
}

export default Home
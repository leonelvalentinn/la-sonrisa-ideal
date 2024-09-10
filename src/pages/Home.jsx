import { Hero } from '../components/Hero'
import { NavBar } from '../components/NavBar'
import { useRef } from 'react'
import { About } from '../components/About'
import { Services } from '../components/Services'
// import { AboutDoctors } from '../components/AboutDoctors'
import { Map } from '../components/Map'
import { Footer } from '../components/Footer'
import { Promotions } from '../components/Promotions'
import { Reviews } from '../components/Reviews'
import { ButtonFixed } from '../components/ButtonsFixed'

export const Home = () => {
  const divRef = useRef('home')

  const scrollToElement = () => {
    const { current } = divRef
    if (current !== null) {
      return (current.scrollIntoView ? current.scrollIntoView() : '')
    }
  }

  return (
    <>
      <NavBar
        Function={scrollToElement}
      />
      <Hero />
      <About />
      {/* <AboutDoctors /> */}
      <Services />
      <Promotions />
      <Reviews />
      <Map />
      <Footer />
      <ButtonFixed />
    </>
  )
}

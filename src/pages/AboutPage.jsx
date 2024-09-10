import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useRef } from 'react'
import about from '../assets/about.webp'
import { ButtonFixed } from '../components/ButtonsFixed'
import { Map } from '../components/Map'
import { CardColor } from '../components/CardColor'
import { TitleSection } from '../components/TitleSection'
import { Mission } from '../components/aboutpage/Mission'

const ADVANTAGES = [
  {
    number: '+14',
    description: 'años de experiencia'
  },
  {
    number: '+600',
    description: 'clientes felices'
  },
  {
    number: '+3',
    description: 'promociones activas'
  },
  {
    number: '+10',
    description: 'tratamientos'
  }
]

export const AboutPage = () => {
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
      <main>
        <section className='w-full flex justify-center items-center flex-col relative px-4 py-4' id='home' ref={divRef}>
          <div className='w-full max-w-6xl text-center'>
            <h1 className='text-4xl font-bold text-primary mb-6 lg:text-6xl'>Conoce La Sonrisa Ideal</h1>
            <img className='rounded-lg w-full aspect-[5/7] object-cover object-center md:aspect-[18/9]' src={about} alt='Fotografía del consultorio' />
          </div>
          <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-4'>
            {
              ADVANTAGES.map((item, i) => (
                <CardColor key={i}>
                  <span className='flex flex-col justify-center items-center text-white'>
                    <span className='text-3xl font-semibold leading-5 mb-2 lg:text-4xl lg:mb-0'>{item.number}</span>
                    <span className='text-xs text-nowrap lg:text-base'>{item.description}</span>
                  </span>
                </CardColor>
              ))
            }
          </ul>
        </section>
        <section className='w-full flex justify-center items-center flex-col relative px-4 py-6 lg:py-8'>
          <div className='w-full max-w-6xl'>
            <TitleSection title='¿Quiénes somos?' />
            <p className='text-lg mt-4'>
              En nuestra clínica dental, nos dedicamos a ofrecer una atención integral y de excelencia para toda la familia. Con más de 14 años de experiencia, nuestro equipo de profesionales altamente capacitados está comprometido con brindar tratamientos personalizados en un ambiente cálido y acogedor. Utilizamos tecnología avanzada para garantizar resultados excepcionales, tanto en salud bucal como en estética dental. Creemos firmemente en la ética, transparencia y el respeto, asegurando que cada paciente reciba soluciones adecuadas a sus necesidades y expectativas. Nuestro enfoque se centra en mejorar tu bienestar y tu sonrisa, mientras mantenemos un alto estándar de calidad y accesibilidad en nuestros servicios.
            </p>
          </div>
        </section>
        <Mission />
      </main>
      <Map />
      <Footer />
      <ButtonFixed />
    </>
  )
}

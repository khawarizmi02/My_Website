import React from 'react'

import styles from '../style'
import { ServiceIntro } from '../constant'
import { Navbar, Footer, Request, Whatsapp, Services as ServiceComp } from '../components'
import { photo3 } from '../assets'

const Introduction = () => {
  return (
    <section className={`flex md:flex-row flex-col justify-evenly min-h-[375px] ${styles.paddingY}`} id="hero">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-6`}>
        <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] 
                        text-primary ss:leading-[100.8px] leading-[75px] max-w-[1000px]">
          Titan Pest Solution
        </h1>
        <div className={`${styles.paragraph2} max-w-[30em] mt-1`}>
          {ServiceIntro.map((data) => (
            <p>{data}</p>
          ))}
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative pl-none `}>
        <img 
          src={photo3} 
          alt='photo-3' 
          className={`w-[359px] h-[479px] relative z-[5] hidden md:block transition rounded-[5px]`}
        />
      </div>
    </section>
  )
}

const Services = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} border-b-[1px] border-b-primary`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Introduction />
          <ServiceComp />
          <Request />
          <Footer />
        </div>
      </div>

      <Whatsapp />
    </div>
  )
}

export default Services

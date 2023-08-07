import React from 'react'

import styles from '../style'
import { HeroContent as content } from '../constant'

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col justify-evenly ${styles.paddingY}`} id="hero">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] capitalize
                        text-black ss:leading-[100.8px] leading-[75px] max-w-[1000px]">
            {content.tagline}
          </h1>
        </div>

        <div className={`${styles.paragraph} max-w-[30em] mt-5`}>
          <p>{content.summarize}</p>
        </div>

        <button href='#contact-us' className='button-white mt-5 hover:bg-black hover:text-secondary'>
          <div className='text-bold text-[16px]'>
            Contact Us
          </div>
        </button>

      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
        <img src={content.image} alt={content.id} className="w-[100%] h-[90%] relative z-[5] hidden md:block"/>
      </div>
    </section>
  )
}

export default Hero

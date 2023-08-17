import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style'
import { HeroContent as content } from '../constant'

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col justify-evenly min-h-[375px] ${styles.paddingY}`} id="hero">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] capitalize
                        text-primary ss:leading-[100.8px] leading-[75px] max-w-[1000px]">
            {content.tagline}
          </h1>
        </div>

        <div className={`${styles.paragraph2} max-w-[30em] mt-5`}>
          <p>{content.summarize}</p>
        </div>

        <button href='#contact-us' className='button mt-5 hover:bg-primary hover:text-dimWhite'>
          <div className='text-cream text-[16px] font-bold'>
            <Link to={`/contact-us`}>Contact Us</Link>
          </div>
        </button>

      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative pl-none `}>
        <img src={content.image} alt={content.id} className="w-[359px] h-[479px] rounded relative z-[5] hidden md:block"/>
      </div>
    </section>
  )
}

export default Hero

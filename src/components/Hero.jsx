import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from '../style'
import { HeroContent as content } from '../constant'


const Hero = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {

    const changeImage = () => {
      setFadeIn(false);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % content.image.length);
        setFadeIn(true);
      }, 200);
    };

    const interval = setInterval(changeImage, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
        <img 
          src={content.image[imageIndex]} 
          alt={content.id} 
          className={`w-[359px] h-[479px] rounded-[20px] relative z-[5] hidden md:block transition 
                    duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </section>
  )
}

export default Hero

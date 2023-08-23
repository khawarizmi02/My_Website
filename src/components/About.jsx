import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style'
import { AboutUsContent as content } from "../constant/index"

const About = () => {
  return (
    <section id="about" className={`${styles.paddingY} ${styles.flexCenter} bg-primaryBlur flex-col relative `}>
      <div className='center'>
        <h1 className='text-center text-primary text-[50px] font-extrabold leading-relaxed'
        >About Us</h1>
      </div>

      <div className={`${styles.paragraph3} max-w-[967px] mt-5`}>
        <p> {content.about} </p>
      </div>

      <button href='#about' className='button my-5 hover:bg-primary hover:text-dimWhite'>
        <div className='text-cream font-bold text-[18px]'>
          <Link to={`/about`}>Read More</Link>
        </div>
      </button>
      
      <div className='center'>
        <h1 className='text-center text-primary text-[50px] font-extrabold leading-relaxed'
        >YOUR RELIABLE PEST CONTROL OPERATOR</h1>
      </div>
      
      <div className={`${styles.paragraph3} max-w-[967px] mt-5`}>
        <p> {content.hook} </p>
      </div>
    </section>
  )
}

export default About

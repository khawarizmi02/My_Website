import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style'
import { ServicesContent as content } from '../constant'

const Services = () => {
  return (
    <section id="services" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className='center'> 
        <h1 className='text-center text-primary text-[50px] font-extrabold leading-relaxed'>
          Our Services
        </h1>
        <p className={`${styles.paragraph3} max-w-[967px] mt-5`}>
          We deal with all kinds of pest that interfere with your peace a comfort of livings.
        </p>
        <p className={`${styles.paragraph4} max-w-[967px]`}>
          Here are the list of services the we can provide:
        </p>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start items-center w-full feedback-container relative z-[1]">
        {content.map((item) => (
          <div className={`flex flex-col justify-around items-center px-10 py-12 rounded-[55px]
                  min-w-[170px] max-w-[170px] mx-0 sm:mx-5 md:mx-10 my-5`}>
          
            <div className="relative w-[147px] h-[147px] hover:scale-105 transition-transform duration-200">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              feedback-card-brown w-[170px] h-[170px] z-[-1] ">
              </div>
              <Link to={`/services/${item.id}-services`}><img src={item.image} alt={item.id} className="w-full h-full rounded-full z-10" /></Link>
            </div> 
            
            <Link to={`/services/${item.id}`}>
              <div className='flex items-center'>
                <div className={`${styles.point} mt-5 capitalize text-center max-w-full`}> {item.name} </div>
              </div>
            </Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

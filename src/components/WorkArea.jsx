import React from 'react'

import styles from '../style'
import { WorkAreaContent as contents } from "../constant"

const WorkArea = () => {
  return (
    <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className='center'>
        <h1 className='text-center text-black text-[50px] font-extrabold leading-relaxed'>
          Where Do We Work?
        </h1>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start items-center w-full feedback-container relative z-[1]">
        {contents.map((item, index) => (
          <div className={`flex flex-col justify-around items-center px-10 py-12 rounded-[55px]
                  min-w-[330px] max-w-[350px] mx-0 sm:mx-5 md:mx-10 my-5
                  ${index % 2 === 0 ? 'feedback-card-blue' : 'feedback-card-green'}`}>
          
            <div className="relative w-[176px] h-[176px] hover:scale-105 transition-transform duration-200">
              <div className="absolute top-[-5px] left-[-5px] w-[186px] h-[186px] rounded-full border-2 border-black"></div>
              <img src={item.image} alt={item.id} className="w-full h-full rounded-full" />
            </div> 
            
            <div className='flex items-center'>
              <div className={`${styles.point} mt-5 uppercase text-center max-w-[176px]`}> {item.title} </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkArea

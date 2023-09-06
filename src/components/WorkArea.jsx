import React from 'react'

import styles from '../style'
import { WorkAreaContent as contents } from "../constant"

const WorkArea = () => {
  return (
    <section id="work-area" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className='center'>
        <h1 className='text-center text-black text-[50px] font-extrabold leading-relaxed'>
          Where Do We Work?
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  feedback-container relative z-[1]">
        {contents.map((item, index) => (
          <div className={`flex flex-col center items-center px-10 py-12 rounded-[55px]
                 w-[200px] h-[220px] sm:w-[330px] mx-0 sm:mx-5 md:mx-10 my-0 md:my-9
                  ${index % 2 === 0 ? 'feedback-card-blue' : 'feedback-card-green'}`}>
          
            <div className="relative w-[100px] h-[100px] md:w-[176px] md:h-[176px] hover:scale-105 transition-transform duration-200">
              <div className="absolute top-[-5px] left-[-5px] w-[110px] h-[110px] md:w-[186px] md:h-[186px] rounded-full border-2 border-black"></div>
              <img src={item.image} alt={item.id} className="w-full h-full rounded-full" />
            </div> 
            
            <div className='flex items-center'>
              <div className={`font-poppins font-semibold text-black text-[20px] sm:text-[30px] 
                              mt-5 capitalize text-center max-w-full`}> {item.title} </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkArea


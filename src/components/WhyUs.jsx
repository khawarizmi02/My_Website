import React from 'react'

import { BulletContent as items } from '../constant'
import styles from '../style'

const WhyUs = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className='center'>
        <h1 className='text-center text-black text-[50px] font-extrabold leading-relaxed'
        >Why Titan Pest Control?</h1>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container-whyus relative z-[1]">
        {items.map((item) => (
          <div className="flex justify-around items-center flex-col px-10 py-12 rounded-[55px] 
                          min-w-[250px]  max-w-[350px] md:mr-10 md:ml-10 sm:mr-5 sm:ml-5 mr-0 my-5 feedback-card-whyus">
          
            <img src={item.logo} alt={item.id} className="w-[80px] h-[80px]" />
            <div className='flex items-center'>
              <div className={`${styles.point} pl-5 text-center`}> {item.title} </div>
            </div>

            <p className={`${styles.paragraph2} text-center`}> {item.description} </p>       
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs

import React from 'react'

import { BulletContent as items } from '../constant'
import styles from '../style'

const Bullet = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {items.map((item) => (
        <div className="flex justify-around items-center flex-col px-10 py-12 rounded-[55px] 
                        min-w-[250px]  max-w-[350px] md:mr-10 md:ml-10 sm:mr-5 sm:ml-5 mr-0 my-5 feedback-card">
          
          <div className='flex items-center'>
            <img src={item.logo} alt={item.id} className="w-[25px] h-[25px]" /> 
            <div className={`${styles.point} pl-5 text-center`}> {item.title} </div>
          </div>

          <p className={`${styles.paragraph} text-center`}> {item.description} </p>       
        </div>
      ))}
    </div>
  </section>
)

export default Bullet

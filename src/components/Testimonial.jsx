import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import styles from '../style'
import { TestimonyContent as content } from '../constant'

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? content.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === content.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  return (
    <section id="services" className={`${styles.paddingY} ${styles.flexCenter} bg-primaryBlur flex-col relative group`}>
      <div className='center'>
        <h1 className='text-center text-black text-[50px] font-extrabold leading-relaxed'>
          What They Say About Us
        </h1>
      </div>

      <div className='realtive'>
        <div className='flex flex-col items-center my-5'>
          <img src={content[currentIndex].image} alt={content[currentIndex].id} className='w-[130px] h-[130px]' />
        
          <div className={`${styles.paragraph3} max-w-[900px] mt-5`}>
            <p> {content[currentIndex].comment} </p>
          </div>
          
          <div className={` max-w-[900px] mt-5`}>
            <p> <span className="font-bold">{content[currentIndex].name}</span> - {content[currentIndex].title} </p>
          </div>
        </div>

        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl 
                        rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl 
                        rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
          {content.map((item, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Testimonial

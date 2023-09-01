import React from 'react'
import { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import styles from '../style'
import { urlFor, client } from '../client';

const Testimonial = () => {
  
  const [testimony, setTestimony] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const query = '*[_type == "testimonial"]';
    setIsLoading(true);
    
    client.fetch(query).then((data) => {
      setTestimony(data);
      setIsLoading(false);
    });
  }, [])


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimony.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimony.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (isLoading) {
    return <div 
    className='flex flex-col justify-center center 
    font-poppins font-[20px] text-black text-center'
    >
    Loading...
    </div>;  // Render a loading message while data is being fetched
  }

  if (!testimony[currentIndex]) return null;

  const currentTestimonial = testimony[currentIndex];
  const imageSrc = currentTestimonial && currentTestimonial.image ? urlFor(currentTestimonial.image).url() : null;
  
  return (
    <section id="services" className={`${styles.paddingY} ${styles.flexCenter} bg-primaryBlur flex-col relative group`}>
      <div className='center'>
        <h1 className='text-center text-black text-[50px] font-extrabold leading-relaxed'>
          What They Say About Us
        </h1>
      </div>

      <div>
        <div className='flex flex-col items-center my-5'>
          {/* Using the urlFor function to generate the correct image URL */}
          <img src={imageSrc} alt={testimony[currentIndex].name} className='w-[130px] h-[130px] rounded-full' />
        
          <div className={`${styles.paragraph3} max-w-[900px] mt-5`}>
            <p> {testimony[currentIndex].feedback} </p>
          </div>
          
          <div className={` max-w-[900px] mt-5`}>
            <p> <span className="font-bold">{testimony[currentIndex].name}</span> - {testimony[currentIndex].title} </p>
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
          {testimony.map((item, index) => (
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

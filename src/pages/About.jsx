import React from 'react'
import { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import { Navbar, Footer, WorkArea, Whatsapp } from '../components'
import styles from '../style'
import { client, urlFor } from '../client';
import { photo19 } from '../assets';

const Info = () => {
  
  const [about, setAbout] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "about"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setAbout(data);
      setCertificates(data[0].certificates);
      setIsLoading(false);
    })
  }, [])
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === certificates.length - 1;
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

  if (!certificates[currentIndex]) return null;

  const currentCertificate = certificates[currentIndex];
  const imageSrc = currentCertificate && currentCertificate.certificateImage ? urlFor(currentCertificate.certificateImage).url() : null;

  return (
    <>
      <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className='grid grid-cols-1 md:grid-cols-[40%,60%]'>
          <div className='px-3 py-3'>
            <img src={photo19} alt='photo19' className='w-full h-full rounded-[10px] object-cover'/>
          </div>
          <div className='flex flex-col w-full px-6'>
            <h1 className={`${styles.heading1} text-center`}>About Us</h1>
            <p className={`${styles.paragraph2} text-justify`}> {about[0].introduction} </p>
          </div>
        </div>
      </section>
            
      <section className='grid grid-cols-1 md:grid-cols-2 bg-primaryBlur'>
        <div className={`${styles.paddingY} px-6 flex-col relative`}>
          <h1 className={`${styles.heading3} text-center`}>Vision</h1>
          <p className={`${styles.paragraph2} text-justify`}> {about[0].vision} </p>
        </div>
        <div className={`${styles.paddingY} px-6 flex-col relative`}>
          <h1 className={`${styles.heading3} text-center`}>Mission</h1>
          <p className={`${styles.paragraph2} text-justify`}> {about[0].mission} </p>
        </div>
      </section>

      <WorkArea />

      <section id="about" className={`${styles.paddingY} ${styles.flexCenter} my-5 bg-primaryBlur flex-col relative group relative `}>
        <h1 className={`${styles.heading1} text-center`}>Certificates</h1>
              
        <div>
          <div className='flex flex-col items-center my-5'>
            <img src={imageSrc} alt={certificates[currentIndex].name} className='w-100 h-100' />
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
            {certificates.map((item, index) => (
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
    </>
  )
}

const About = () => {


  return (
      <div className="bg-cream w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Info />
            <Footer />
          </div>
        </div>
        
        <Whatsapp />
      </div>
  )
}

export default About

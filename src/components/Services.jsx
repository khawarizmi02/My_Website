import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from '../style'
import { urlFor, client } from '../client'

const Services = () => {
  
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    const query = '*[_type == "services"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setServices(data);
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return <div 
    className='flex flex-col justify-center center 
    font-poppins font-[20px] text-black text-center'
    >
    Loading...
    </div>;  // Render a loading message while data is being fetched
  }

  console.log(services[0].name);
  
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
      <div className="grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full feedback-container relative z-[1]">
        {services.map((item) => (
          <div className={`flex flex-col justify-around items-center px-10 py-12 rounded-[55px]
                  min-w-[170px] max-w-[170px] mx-0 sm:mx-5 md:mx-10 my-5`}>
          
            <div className="relative w-[130px] h-[130px] xs:w-[147px] xs:h-[147px] hover:scale-105 transition-transform duration-200">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              feedback-card-brown w-[150px] h-[150px] xs:w-[170px] xs:h-[170px] z-[-1] ">
              </div>
              <Link to={`/services/${item.slug.current}-services`}>
                <img src={urlFor(item.image).url()} alt={item.slug.current} className="w-full h-full rounded-full object-cover z-10" />
              </Link>
            </div> 
            
            <Link to={`/services/${item.slug.current}`}>
              <div className='flex items-center'>
                <div 
                  className={`font-poppins font-semibold text-black text-[20px] xs:text-[30px] 
                              mt-5 capitalize text-center max-w-full`}> 
                  {item.name.replace("Services", "").trim()} </div>
              </div>
            </Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

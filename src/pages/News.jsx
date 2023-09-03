import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { client, urlFor } from '../client'
import styles from '../style'
import { Navbar, Footer, Request } from '../components'

const formatDate = (isoString) => {
  const date = new Date(isoString);
  
  // Get the day of the month
  const day = date.getDate();
  
  // Month names array
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Get the month name
  const month = monthNames[date.getMonth()];

  // Get the year
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
}

const NewList = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "news"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setNews(data);
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

  return (
    <section className={`${styles.paddingY}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 relative z-[1]">
        {news.map((item) => (
          <div className={` sm:px-8 px-none pb-3 min-w-[310px] max-w-[350px]`}>
            
            <div>
              <div className="relative min-w-[330px] max-w-[350px] h-[350px]">
                <img src={urlFor(item.image).url()} className="h-full w-full object-cover object-center rounded-[10px]" />
              </div> 
            
              <div className='flex flex-col w-full'>
                <div className={`${styles.point} mt-5 capitalize max-w-[250px]`}> 
                  {item.topic} 
                </div> 
                <div>{formatDate(item._updatedAt)}</div>
                <Link to={`/news/${item.slug.current}`} className='fonst-poppins font-bold text-black'>READ MORE +</Link>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}

const Intro = () => {
  return (
    <section className={`${styles.flexCenter} flex-col relative `}>
      <h1 className='font-poppins font-extrabold text-[40px] text-black pb-3'>News & Tips</h1>
      <p className={`${styles.paragraph3} max-w-[70%]`}>
        Dealing with pest can be a frustrating and time-consuming experience for homeowners and businesses alike.
        Read on as we provide you with useful tips and information to help you identify, prevent, and control pests
        in your home or business.
      </p>
    </section>
  )
}

const News = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Intro />
          <NewList />
          <Request />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default News

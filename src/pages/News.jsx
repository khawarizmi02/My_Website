import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { client, urlFor } from '../client'
import styles from '../style'
import { Navbar, Footer } from '../components'

const NewList = ({ list }) => {
  return (
    <>
      New & Tips list
    </>
  )
}

const Intro = () => {
  return (
    <section>
      <h1>News & Tips page</h1>
      <p>
        Dealing with pest can be a frustrating and time-consuming experience for homeowners and businesses alike.
        Read on as we provide you with useful tips and information to help you identify, prevent, and control pests
        in your home or business.
      </p>
    </section>
  )
}

const News = () => {

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
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default News

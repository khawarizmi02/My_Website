import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RxCalendar } from 'react-icons/rx'

import styles from '../style'
import { Navbar, Footer, Whatsapp } from '../components'
import { client, urlFor, RenderBlockContent } from '../client'


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

const NewsContent = ({ newsId }) => {
  
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

  const filteredNews = news.find( item => item.slug.current === newsId) 
  const listedNews = news.filter( item => item.slug.current !== newsId)

  return (
    <section className={`${styles.flexCenter} px-7 sm:px-7 flex-col relative`}> 
      <img src={urlFor(filteredNews.image).url()} className='px-none sm:px-3 py-3 w-full max-h-[450px] object-cover rounded-[15px]' />
      <div className='grid grid-cols-1 sm:grid-cols-[80%,20%] w-full'>
        <div className='flex flex-col'>
          <div className='flex items-center space-x-4 pt-6'> 
            <RxCalendar className='w-[40px] h-[40px]' />
            <div className='font-poppins font-medium text-[20px] text-black '>{formatDate(filteredNews._updatedAt)}</div>
          </div>

          <div className={`${styles.heading3} capitalize pb-3`}>
            {filteredNews.topic}
          </div>

          <div>
            {filteredNews.subtopics.map((topic) => (
              <div className='flex flex-col pr-6 pb-6'>
                <div className={`${styles.point} border-b-2 border-blackBlur pb-2`}>{topic.subtopicName}</div>
                <div className='font-poppins text-black text-[20px] py-5'> 
                  <RenderBlockContent blocks={topic.subtopicDescription}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col p-3'>
          <div className='font-poppins font-medium text-black text-[20px] text-center'> Read more news and tips from us:</div>
          <div>
            {listedNews.map((item) => (
              <div className='py-5 min-w-[120px]'>
                <div className='max-w-full min-w-[120px] max-h-[350px] sm:h-[145px] overflow-hidden rounded-[10px] relative pt-3'>
                  <img src={urlFor(item.image).url()} className='absolute top-0 left-0 w-full h-full object-cover'/>
                </div>
                <div className='pt-3 font-poppins font-medium capitalize text-[20px] text-black'> {item.topic} </div>
                <div className='py-none font-poppins font-extralight text-[15px] text-black'> {formatDate(item._updatedAt)} </div>
                <Link to={`/news/${item.slug.current}`} className='font-poppins font-bold text-[15px] text-black'> Read More +</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const NewsInfo = () => {

  const { newsId } = useParams();
  
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NewsContent newsId={newsId}/>
          <Footer />
        </div>
      </div>

      <Whatsapp />
    </div>
  )
}

export default NewsInfo


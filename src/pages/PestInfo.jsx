import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from '../style'
import { Navbar, Footer } from '../components'
import { urlFor, client } from '../client'

const Info = ({ pestId }) => {
  
  const [pests, setPests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const query = '*[_type == "library"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setPests(data);
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
  
  const filteredPest = pests.find( item => item.slug.current === pestId) 
  const listedPests = pests.filter( item => item.slug.current !== pestId)

  return (
    <>
      <section className={`${styles.flexStart} pb-3 relative`}>
        <div className='flex flex-col items-center justify-center'>
          <img src={urlFor(filteredPest.pestImage).url()} className='w-full max-h-[450px] object-cover' />
          <div className='font-poppins font-bold text-black text-center text-[45px] capitalize'>
            {filteredPest.pestName}
          </div>
        </div>
      </section>
      <section className={`${styles.paddingY} px-3`}>
        <div className='grid grid-cols-[80%,20%]'>
          <div className='py-3 px-3'> 
            <div className='py-5 px-3'>
              <div className='font-poppins font-bold text-black text-[35px] border-b-2 border-blackBlur pb-2'> 
                Introduction 
              </div>
              <div className={`${styles.paragraph2}`}> {filteredPest.info}</div>
            </div>
            <div className='py-5 px-3'>
              <div className='font-poppins font-bold text-black text-[35px] border-b-2 border-blackBlur pb-2'>
                Lifecycle 
              </div>
              <div className={`${styles.paragraph2}`}> {filteredPest.lifecycle}</div>
            </div>
            <div className='py-5 px-3'>
              <div className='font-poppins font-bold text-black text-[35px] border-b-2 border-blackBlur pb-2'>
                Importance 
              </div>
              <div className={`${styles.paragraph2}`}> {filteredPest.importance} </div>
            </div>
          </div>
          <div className='flex flex-col p-3'>
            <div 
              className='font-poppins font-medium text-black text-[20px] text-center
                         py-3 px-3'> 
              Read more about other pest: 
            </div>
            <div> 
              {listedPests.map((item) => (
                <div className='py-5 min-w-[120px]'>
                  <div className='max-w-full min-w-[120px] max-h-[350px] sm:h-[145px] overflow-hidden rounded-[10px] relative pt-3'>
                    <img src={urlFor(item.pestImage).url()} className='absolute top-0 left-0 w-full h-full object-cover'/>
                  </div>
                  <div className='pt-3 font-poppins font-medium capitalize text-[20px] text-black'> {item.pestName} </div>
                  <Link to={`/pests/${item.slug.current}`} className='font-poppins font-bold text-[15px] text-black'>Read More +</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const PestInfo = () => {
  
  const { pestId } = useParams();
  
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Info pestId={pestId}/>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PestInfo


import React from 'react'
import { useParams } from 'react-router-dom'

import styles from '../style'
import { Navbar, Footer } from '../components'

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
          {pestId} page

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PestInfo


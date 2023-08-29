import React from 'react'

import styles from '../style'
import { Navbar, Footer } from '../components'

const NewsInfo = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          News & Tips page

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default NewsInfo


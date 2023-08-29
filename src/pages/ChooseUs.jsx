import React from 'react'

import styles from '../style'
import { Navbar, Footer } from '../components'

const Location = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Choose Us page

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Location

import React from 'react'

import { Navbar, Footer } from '../components'
import styles from '../style'

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
            About Page
            
            <Footer />
          </div>
        </div>
      </div>
  )
}

export default About

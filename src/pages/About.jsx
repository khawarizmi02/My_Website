import React from 'react'

import { Navbar } from '../components'
import styles from '../style'

const About = () => {
  return (
      <div className="bg-secondary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth} bg-black`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-gradient-blue ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            About Page
          </div>
        </div>
      </div>
  )
}

export default About

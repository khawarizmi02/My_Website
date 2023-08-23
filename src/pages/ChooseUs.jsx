import React from 'react'

import styles from '../style'
import { Navbar } from '../components'

const Location = () => {
  return (
    <div className="bg-secondary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
        <div className={`${styles.boxWidth} bg-black`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-gradient-blue ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Choose Us page
        </div>
      </div>
    </div>
  )
}

export default Location
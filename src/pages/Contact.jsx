import React from 'react'

import styles from '../style'
import { Navbar, Footer, Request, Whatsapp } from '../components'

const Contact = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Request />
          <Footer />
        </div>
      </div>

      <Whatsapp />
    </div>
  )
}

export default Contact

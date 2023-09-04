import React from 'react'

import { whatsapp1 } from '../assets'

const Whatsapp = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=60169693525&text=Hi.%20I%20would%20like%20to%20request%20a%20quote%20for%20pest%20control%20service" 
      className="fixed bottom-9 right-9 bg-[#13990A] text-white p-3 rounded-full shadow-lg 
                    hover:bg-green-600 focus:outline-none focus:bg-green-700 z-[20]"
      target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp">
        <img src={whatsapp1} alt='whatsapp' className='h-[40px] w-[40px]'/>
      </i>
    </a>
  )
}

export default Whatsapp

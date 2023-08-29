import React from 'react'
import { Link } from "react-router-dom";

import styles from "../style";
import { logo1 } from "../assets";
import { footerLinks, socialMedia } from "../constant"

const Footer = () => {

  const address = footerLinks[0];
  const contactInfo = footerLinks[1];
  const exploreLink = footerLinks[2];

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} px-5 flex-col bg-black rounded`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo1}
            alt="company"
            className="w-[443px] h-[266px] object-contain"
          />
        </div>
        
        <div className="flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10">
          <div className='text-cream font-poppins font-normal'>
            <div> {address.title} </div>
            <div className='font-light'>
              <div> {address.name} {address.companyNum} </div>
              <div> {address.address} </div>
              <div> {address.poscode} {address.city} </div>
              <div> {address.district} {address.nation} </div>
            </div>
            
            <div className='pt-6'> {contactInfo.title}  </div>
            <div className='font-light'> {contactInfo.contactNum}  </div>
            <div className='font-light'> {contactInfo.email}  </div>
          </div>

          <div>
            <div className='text-cream font-poppins font-normal'> {exploreLink.title} </div>
            <ul className="list-none mt-4">
              { exploreLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-light text-[16px] leading-[24px] text-cream hover:text-secondary cursor-pointer
                    ${index !== exploreLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                > <Link to={`/${link.link}`}>  {link.name} </Link> </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-cream px-4">
        <p className="font-poppins font-light text-center text-[18px] leading-[27px] text-cream">
          Copyright Ⓒ 2023 Titan Pest Solution Sdn.Bhd. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          <div><p className={`${styles.paragraph} px-4`}> Hang with us on these social sites </p></div>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[30px] h-[30px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section> 
  )
}

export default Footer

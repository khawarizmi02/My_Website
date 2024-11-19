import { Link } from "react-router-dom";
import { useRef } from "react";

import styles from "../style";
import { logo1 } from "../assets";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  const address = footerLinks[0];
  const contactInfo = footerLinks[1];
  const exploreLink = footerLinks[2];

  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={footerRef}
      className={`${styles.flexCenter} ${styles.paddingX} py-3 flex-col bg-primaryBlur rounded`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo1}
            alt="company"
            className="w-[443px] h-[266px] object-contain"
          />
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10">
          <div className="text-black font-poppins font-extrabold text-center sm:text-left">
            <div> {address.title} </div>
            <div className="font-normal">
              <div>
                {" "}
                {address.name} {address.companyNum}{" "}
              </div>
              <div className="max-w-[330px]"> {address.address} </div>
              <div>
                {" "}
                {address.poscode} {address.city}{" "}
              </div>
              <div>
                {" "}
                {address.district} {address.nation}{" "}
              </div>
            </div>

            <div className="pt-6"> {contactInfo.title} </div>
            <div className="font-normal"> {contactInfo.contactNum} </div>
            <div className="font-normal"> {contactInfo.email} </div>
          </div>

          <div>
            <div className="text-black font-poppins font-extrabold pt-6 text-center sm:text-left">
              {" "}
              {exploreLink.title}{" "}
            </div>
            <ul className="list-none mt-4">
              {exploreLink.links &&
                exploreLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-medium text-[16px] leading-[24px] text-black 
                    hover:text-mainBlue cursor-pointer text-center sm:text-left
                    ${
                      index !== exploreLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {" "}
                    <Link to={`/${link.link}`}> {link.name} </Link>{" "}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-black px-4">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
          Copyright Ⓒ 2023 Titan Pest Solution. All Rights Reserved.
        </p>

        <div className="flex flex-col sm:flex-row items-center md:mt-0 mt-3">
          <div>
            <p className="font-poppins font-normal text-black text-[18px] pr-2">
              {" "}
              Hang with us on these social sites{" "}
            </p>
          </div>
          <div className="grid grid-cols-4 pt-3 sm:pt-0">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[30px] h-[30px] object-contain cursor-pointer justify-center items-center fill-black ${
                  index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

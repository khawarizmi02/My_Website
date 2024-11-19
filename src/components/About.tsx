import { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "../style";
import { AboutUsContent as content } from "../constant/index";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`${styles.paddingY} ${styles.flexCenter} bg-primaryBlur flex-col relative `}
    >
      <div className="center">
        <h1 className="text-center text-mainBlue text-[50px] font-extrabold leading-relaxed">
          About Us
        </h1>
      </div>

      <div className={`${styles.paragraph3} max-w-[967px] mt-5 px-6`}>
        <p> {content.about} </p>
      </div>

      <button className="button my-5">
        <div className="text-cream font-bold text-[18px]">
          <Link to={`/about`}>Read More</Link>
        </div>
      </button>

      <div className="center pt-3">
        <h1 className="text-center text-mainBlue text-[50px] font-extrabold leading-relaxed">
          YOUR RELIABLE PEST CONTROL OPERATOR
        </h1>
      </div>

      <div className={`${styles.paragraph3} max-w-[967px] mt-5 px-6`}>
        <p> {content.hook} </p>
      </div>
    </section>
  );
};

export default About;

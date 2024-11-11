import { useRef } from "react";

import { BulletContent as items } from "../constant";
import styles from "../style";

const WhyUs = () => {
  const whyUsRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={whyUsRef}
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="center">
        <h1 className="text-center text-black text-[50px] font-extrabold leading-relaxed">
          Why Titan Pest Solution?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center w-full feedback-container-whyus relative z-[1]">
        {items.map((item) => (
          <div
            className="flex justify-around items-center flex-col px-10 py-12 rounded-[55px] 
                          min-w-[250px]  max-w-full md:mr-10 md:ml-10 sm:mr-5 sm:ml-5 mr-0 my-5 feedback-card-whyus"
          >
            <img src={item.logo} alt={item.id} className="w-[80px] h-[80px]" />
            <div className="flex items-center">
              <div className={`${styles.point} text-center`}>
                {" "}
                {item.title}{" "}
              </div>
            </div>

            <div className="flex items-center">
              <p
                className={`${styles.paragraph2} max-w-[450px] md:max-w-[600px] text-center`}
              >
                {" "}
                {item.description}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

import { useRef } from "react";
import { useState, useEffect } from "react";

import styles from "../style";

import { urlFor, client } from "@/client";

const WhyUs = () => {
  const [data, setData] = useState<WhyUs[]>([]);

  useEffect(() => {
    const query = '*[_type == "home"]{whyUs}';
    client.fetch(query).then((result) => {
      setData(result[0].whyUs);
    });
  }, []);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full feedback-container-whyus relative z-[1]">
        {data.map((item) => (
          <div
            className="flex items-center flex-col px-10 py-12 rounded-[55px] 
                          min-w-[250px]  max-w-full md:mr-10 md:ml-10 sm:mr-5 sm:ml-5 mr-0 my-5 feedback-card-whyus"
          >
            <img
              src={urlFor(item.pointImage).url() || ""}
              alt={item.pointImage.asset._ref}
              className="w-[80px] h-[80px]"
            />
            <div className="flex items-center">
              <div className={`${styles.point} text-center`}>
                {" "}
                {item.pointName}{" "}
              </div>
            </div>

            <div className="flex items-center">
              <p
                className={`${styles.paragraph2} max-w-[450px] md:max-w-[600px] text-center`}
              >
                {" "}
                {item.pointText}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

interface WhyUs {
  pointName: string;
  pointImage: {
    asset: {
      _ref: string;
    };
  };
  pointText: string;
}

export default WhyUs;

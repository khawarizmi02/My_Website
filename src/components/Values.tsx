import { useState, useEffect } from "react";

import { client, urlFor } from "../client";
import styles from "@/style";

const Values = () => {
  const [data, setData] = useState<Values[]>([]);

  useEffect(() => {
    const query = '*[_type == "about"]{values}';
    client.fetch(query).then((data) => {
      setData(data[0].values);
    });
  }, []);

  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="center">
        <h1 className="text-center text-black text-[50px] font-extrabold leading-relaxed">
          Values
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full feedback-container-whyus relative z-[1]">
        {data.map((item) => (
          <div
            className="flex items-center flex-col px-10 py-12 rounded-[55px] 
                          min-w-[250px]  max-w-full md:mr-10 md:ml-10 sm:mr-5 sm:ml-5 mr-0 my-5 feedback-card-whyus"
          >
            <img
              src={urlFor(item.valueImage).url() || ""}
              alt={item.valueImage.asset._ref}
              className="w-[80px] h-[80px]"
            />
            <div className="flex items-center">
              <div className={`${styles.point} text-center`}>
                {" "}
                {item.valueName}{" "}
              </div>
            </div>

            <div className="flex items-center">
              <p
                className={`${styles.paragraph2} max-w-[450px] md:max-w-[600px] text-center`}
              >
                {" "}
                {item.valueText}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

interface Values {
  valueImage: {
    asset: {
      _ref: string;
    };
  };
  valueName: string;
  valueText: string;
  _type: string;
  children: {
    _type: string;
    text: string;
  }[];
}

export default Values;

import { Link } from "react-router-dom";
import { ReactNode, useEffect, useState, useRef } from "react";

import styles from "../style";
import { urlFor, client } from "../client";

const Services = () => {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = '*[_type == "services"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setServices(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div
        className="flex flex-col justify-center center 
    font-poppins font-[20px] text-black text-center"
      >
        Loading...
      </div>
    ); // Render a loading message while data is being fetched
  }

  return (
    <section
      ref={servicesRef}
      id="services"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="center">
        <h1 className="text-center text-mainBlue text-[50px] font-extrabold leading-relaxed">
          Our Services
        </h1>
        <p className={`${styles.paragraph3} max-w-[967px] mt-5`}>
          We deal with all kinds of pest that interfere with your peace a
          comfort of livings.
        </p>
        <p className={`${styles.paragraph3} max-w-[967px]`}>
          Here are the list of services the we can provide:
        </p>
      </div>
      <div className="grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 w-full feedback-container relative z-[1]">
        {services.map((item) => (
          <div
            className={`flex flex-col items-center py-12 rounded-[55px]
                  min-w-[170px] max-w-full mx-0 sm:mx-3 md:mx-5 my-5`}
          >
            <div className="relative w-[130px] h-[130px] xs:w-[147px] xs:h-[147px] hover:scale-105 transition-transform duration-200">
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              w-[150px] h-[150px] xs:w-[170px] xs:h-[170px] z-[-1] "
              ></div>
              <Link to={`/services/${item.slug.current}`}>
                <img
                  src={urlFor(item.image).url()}
                  alt={item.slug.current}
                  className="w-full h-full rounded-full object-cover z-10"
                />
              </Link>
            </div>

            <Link to={`/services/${item.slug.current}`}>
              <div className="flex items-center">
                <div
                  className={`font-poppins font-normal sm:font-bold text-black text-[20px] 
                              mt-5 capitalize text-center max-w-full`}
                >
                  {item.name.replace("Services", "").trim()}{" "}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

interface Services {
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
    };
  };
  introduction: string;
  servicesMethod: {
    methodDescription: ReactNode;
    methodName: ReactNode;
    methodImage(methodImage: any): unknown;
    methodDetails: {
      methodImage: {
        asset: {
          _ref: string;
        };
      };
      methodName: string;
      methodDescription: string;
    };
  }[];
}
export default Services;

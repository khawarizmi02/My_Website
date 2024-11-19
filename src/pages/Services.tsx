import { useState, useEffect } from "react";

import { urlFor, RenderBlockContent, client } from "../client";
import styles from "../style";
import {
  Navbar,
  Footer,
  Request,
  Whatsapp,
  Services as ServiceComp,
} from "../components";

const Introduction = ({ seviceIntro }: { seviceIntro: ServiceIntro }) => {
  return (
    <section
      className={`flex md:flex-row flex-col justify-evenly min-h-[375px] ${styles.paddingY}`}
      id="hero"
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-6`}
      >
        <h1
          className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] 
                        text-mainBlue ss:leading-[100.8px] leading-[75px] max-w-[1000px]"
        >
          {seviceIntro.title}
        </h1>
        <div className={`${styles.paragraph2} max-w-[30em] mt-1`}>
          <RenderBlockContent blocks={seviceIntro.introduction} />
        </div>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative pl-none `}
      >
        <img
          src={urlFor(seviceIntro.image).url()}
          alt="service-intro"
          className={`w-[359px] h-[479px] relative z-[5] hidden md:block transition rounded-[5px]`}
        />
      </div>
    </section>
  );
};

const Services = () => {
  const [intro, setIntro] = useState<ServiceIntro[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "serviceIntro"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setIntro(data);
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
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} border-b-[1px] border-b-mainBlue`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Introduction seviceIntro={intro[0]} />
          <ServiceComp />
          <Request />
          <Footer />
        </div>
      </div>

      <Whatsapp />
    </div>
  );
};

interface ServiceIntro {
  title: string;
  introduction: {
    _type: string;
    children: {
      _type: string;
      text: string;
    }[];
  }[];
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default Services;

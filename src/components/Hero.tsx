import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import styles from "../style";
import { client, urlFor } from "../client";

const Hero = () => {
  const [data, setData] = useState<Home>({
    tagLine: "",
    heroText: "",
    heroImage: {
      asset: {
        _ref: "",
      },
    },
  });
  const [heroImagelink, setHeroImagelink] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = '*[_type == "home"]{tagLine, heroText, heroImage}';
    setIsLoading(true);

    client.fetch(query).then((result) => {
      setData(result[0]);
      setHeroImagelink(urlFor(result[0].heroImage).url());
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
      ref={heroRef}
      style={{
        backgroundImage: `url(${heroImagelink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
      className={`flex md:flex-row flex-col justify-evenly min-h-[375px] ${styles.paddingY}`}
      id="hero"
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}
      />
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-20`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] capitalize
                        text-[#1E2D66] ss:leading-[100.8px] leading-[75px] max-w-[1000px]"
          >
            {data.tagLine}
          </h1>
        </div>

        <div className={`${styles.paragraph2} max-w-[30em] mt-5`}>
          <p>{data.heroText}</p>
        </div>

        <button className="button mt-5 ml-5">
          <div className="text-cream text-[16px] font-bold">
            <Link to={`/contact-us`}>Contact Us</Link>
          </div>
        </button>
      </div>
    </section>
  );
};

interface Home {
  tagLine: string;
  heroText: string;
  heroImage: {
    asset: {
      _ref: string;
    };
  };
  // media: {
  //   _type: "image" | "file";
  //   asset: {
  //     _ref: string;
  //   };
  // }[];
  // whyUs: {
  //   content: {
  //     pointName: string;
  //     pointImage: {
  //       asset: {
  //         _ref: string;
  //       };
  //     };
  //   };
  // }[];
}

export default Hero;

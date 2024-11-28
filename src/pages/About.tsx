import { useState, useEffect } from "react";

import { Navbar, Footer, WorkArea, Whatsapp, Values } from "../components";
import styles from "../style";
import { client, urlFor } from "../client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import CertificateCard from "@/components/CertificateCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Info = () => {
  const [about, setAbout] = useState<About[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "about"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setAbout(data);
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
    <>
      <section
        id="about"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      >
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%]">
          <div className="px-3 py-3">
            <img
              src={urlFor(about[0].introImage).url()}
              alt="photo19"
              className="w-full h-full rounded-[10px] object-cover"
            />
          </div>
          <div className="flex flex-col w-full px-6">
            <h1 className={`${styles.heading3} text-center`}>About Us</h1>
            <p className={`${styles.paragraph2} text-justify`}>
              {" "}
              {about[0].introduction}{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 bg-primaryBlur">
        <div className={`${styles.paddingY} px-6 flex-col relative`}>
          <h1 className={`${styles.heading1} text-center`}>Vision</h1>
          <p className={`${styles.paragraph2} text-justify`}>
            {" "}
            {about[0].vision}{" "}
          </p>
        </div>
        <div className={`${styles.paddingY} px-6 flex-col relative`}>
          <h1 className={`${styles.heading1} text-center`}>Mission</h1>
          <p className={`${styles.paragraph2} text-justify`}>
            {" "}
            {about[0].mission}{" "}
          </p>
        </div>
      </section>

      <Values />
      <WorkArea />

      <section
        id="about"
        className={`${styles.paddingY} ${styles.flexCenter} my-5 bg-primaryBlur flex-col relative group`}
      >
        <h1 className={`${styles.heading1} text-center`}>
          Accreditions & Certifications
        </h1>

        <ScrollArea className="w-full rounded-md border">
          {/* Desktop View */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-3">
            {about[0].certificates.map((item) => (
              <CertificateCard key={item.certificateName} item={item} />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden w-full py-3 relative">
            <Carousel>
              <CarouselContent>
                {about[0].certificates.map((item) => (
                  <CarouselItem key={item.certificateName}>
                    <CertificateCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
              <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
            </Carousel>
          </div>
        </ScrollArea>
      </section>
    </>
  );
};

const About = () => {
  return (
    <div className="bg-cream w-full overflow-hidden p-0">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} border-b-[1px] border-b-mainBlue`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Info />
        </div>
      </div>

      <Footer />
      <Whatsapp />
    </div>
  );
};

interface About {
  introduction: string;
  introImage: {
    asset: {
      _ref: string;
    };
  };
  vision: string;
  mission: string;
  value: {
    _type: string;
    children: {
      _type: string;
      text: string;
    }[];
  }[];
  values: {
    valueName: string;
    valueImage: {
      asset: {
        _ref: string;
      };
    };
    valueText: string;
  }[];
  image: {
    asset: {
      _ref: string;
    };
  };
  certificates: {
    certificateName: string;
    certificateDescription: string;
    certificateImage: {
      asset: {
        _ref: string;
      };
    };
  }[];
}

export default About;

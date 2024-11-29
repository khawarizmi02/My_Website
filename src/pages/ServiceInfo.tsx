import { useState, useEffect, ReactNode } from "react";
import { useParams } from "react-router-dom";

import styles from "../style";
import { Navbar, Footer, Whatsapp, RequestForm } from "../components";
import { urlFor, client } from "../client";

const Info = ({ serviceId }: { serviceId: string }) => {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const filteredService = services.find(
    (item) => item.slug.current === serviceId
  );

  return (
    <>
      {filteredService && (
        <>
          <section
            className={`flex md:flex-row flex-col justify-evenly min-h-[375px] ${styles.paddingY}`}
          >
            <div
              className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-6`}
            >
              <h1
                className="flex-1 font-poppins font-bold text-mainBlue ss:text-[72px] text-[52px] capitalize
                         ss:leading-[100.8px] leading-[75px] max-w-[1000px]"
              >
                {filteredService.name}
              </h1>
              <div className={`${styles.paragraph2} max-w-[30em] mt-1`}>
                {filteredService.introduction}
              </div>
            </div>
            <div
              className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative pl-none `}
            >
              <img
                src={urlFor(filteredService.image).url()}
                alt={filteredService.slug.current}
                className={`h-[479px] relative z-[5] hidden md:block transition pl-2`}
              />
            </div>
          </section>

          <section
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
          >
            <div className="center pb-5">
              <h1 className="text-center text-black text-[50px] font-extrabold leading-relaxed">
                What can we Do?
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 feedback-container relative z-[1]">
              {"servicesMethod" in filteredService &&
              filteredService.servicesMethod.length > 0 ? (
                filteredService.servicesMethod.map((item) => (
                  <div
                    className={`flex flex-col justify-around items-center px-5 pb-3
                        min-w-[330px] max-w-[350px] bg-primaryBlur`}
                  >
                    <div className="relative min-w-[330px] max-w-[350px] h-[350px]">
                      <img
                        src={urlFor(item.methodImage).url()}
                        className="h-full w-full object-cover object-center rounded-[2px]"
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <div
                        className={`${styles.point} mt-5 uppercase text-center max-w-[250px]`}
                      >
                        {" "}
                        {item.methodName}{" "}
                      </div>{" "}
                      {/* Adjust width if necessary */}
                      <div
                        className={`${styles.paragraph2} text-center max-w-[250px]`}
                      >
                        {" "}
                        {item.methodDescription}{" "}
                      </div>{" "}
                      {/* Adjust width if necessary */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center">
                  <p className={`${styles.paragraph2} text-center`}>
                    No services available at the moment.
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

const ServiceInfo = () => {
  const { serviceId } = useParams();

  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} border-b-[1px] border-b-mainBlue`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Info serviceId={serviceId ?? ""} />
          {/* <Request /> */}
          <RequestForm />
        </div>
      </div>

      <Footer />
      <Whatsapp />
    </div>
  );
};

export interface Services {
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

export default ServiceInfo;

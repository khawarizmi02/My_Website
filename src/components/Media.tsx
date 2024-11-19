import { useState, useEffect, useRef } from "react";

import { client, urlFor } from "../client";
import styles from "../style";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Media = () => {
  const [data, setData] = useState<Home[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = '*[_type == "home"]{media}';
    setIsLoading(true);

    client.fetch(query).then((result) => {
      setData(result[0].media);
      setIsLoading(false);
    });
  }, []);

  const getAssetUrl = (data: Home) => {
    if (data.asset._type === "reference") {
      const ref = data.asset._ref;
      const [fileType, fileId, fileExtension] = ref.split("-");
      if (fileType === "file") {
        return `https://cdn.sanity.io/files/${client.config().projectId}/${
          client.config().dataset
        }/${fileId}.${fileExtension}`;
      }
    }
    return urlFor(data.asset).url();
  };

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
      ref={mediaRef}
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="center">
        <h1 className="text-center text-black text-[50px] font-extrabold leading-relaxed">
          Media
        </h1>
      </div>
      <Carousel className="w-full px-10 relative">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="w-full">
              {item._type === "image" && (
                <AspectRatio ratio={16 / 9} className="w-full">
                  <img
                    src={getAssetUrl(item)}
                    alt={item.asset._ref}
                    className="w-full h-auto"
                  />
                </AspectRatio>
              )}
              {item._type === "file" && (
                <AspectRatio ratio={16 / 9} className="w-full">
                  <video
                    controls
                    src={getAssetUrl(item)}
                    typeof="video/mp4"
                    className="w-full h-auto"
                  />
                </AspectRatio>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
};

interface Home {
  asset: {
    _type: string;
    _key: string;
    _ref: string;
  };
  _type: string;
  // tagLine: string;
  // heroText: string;
  // heroImage: {
  //   asset: {
  //     _ref: string;
  //   };
  // };
  media: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }[];
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

export default Media;
